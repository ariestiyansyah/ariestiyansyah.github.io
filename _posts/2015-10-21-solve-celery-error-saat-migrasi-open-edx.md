---
title: SOLVE Celery error saat migrasi server Open edX
author: ariestiyansyah
layout: post
thumbnail: /images/logo-edx.png
categories:
  - edX
  - Code
tags:
- edX
- code
- Django
description: Solusi untuk masalah saat migrasi server Open edX
---

Saat ingin memindahkan instance Open edX ke server lain saya menemukan masalah dimana celery untuk membuat laporan peringkat di sistem Open edX tidak berjalan dengan semestinya, setelah saya cekcok lagi ternyata server RabbitMQ error karena user celery tidak ada alias konfigurasi di instance lama itu missing.

	$ sudo tail -f /edx/var/log/{lms,cms,nginx}/*log
	==> /edx/var/log/lms/edx.log <==
	Oct 21 02:21:16 ip-x [service_variant=lms][celery.worker.consumer][env:sandbox] ERROR [ip-x  1400] [consumer.py:364] - consumer: Cannot connect to amqp://celery:**@127.0.0.1:5672//: [Errno 104] Connection reset by peer.
	Trying again in 32.00 seconds...
	
Dapat kita lihat pada log diatas `connection reset by peer` itu adalah masalah auth permission pada RabbitMQ server. Hal yang dapat kita lakukan untuk solving masalah ini adalah dengan membuat user celery baru di RabbitMQ server yang kita gunakan.

Buat user celery dengan password yang sama kita gunakan pada konfigurasi `lms.auth.json` dan `cms.auth.json` (pada contoh ini saya menggunakan user dan password celery)

	$ sudo rabbitmqctl add_user celery celery
	
Set permission pada user celery

	$ sudo rabbitmqctl set_permissions celery ".*" ".*" ".*"
	
Restart RabbitMQ server

	$ sudo service rabbitmq-server restart

Restart instance

	$ sudo reboot

Masuk ke server dan cek kembali log.


	$ sudo tail -f /edx/var/log/{lms,cms,nginx}/*log
	==> /edx/var/log/lms/edx.log <==
	Oct 21 02:29:09 ip-x [service_variant=lms][celery.worker.consumer][env:sandbox] INFO [x  1483] [consumer.py:573] - mingle: sync with 2 nodes
	Oct 21 02:29:09 ip-x [service_variant=lms][celery.worker.consumer][env:sandbox] INFO [ip-x  1483] [consumer.py:583] - mingle: sync complete
	Oct 21 02:29:09 ip-x [service_variant=lms][celery.redirected][env:sandbox] WARNING [ip-x  1483] [log.py:282] - celery@edx.lms.core.high.ip-xready.
	

Jika Anda membutuhkan planning, implementation, hosting, theming, support, training, dan custom development untuk Open edX silahkan hubungi  saya di [sini](mailto:onto@valutac.com)