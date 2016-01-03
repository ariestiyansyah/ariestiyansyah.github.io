---
title: Django Superuser Open edX
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
description: Django superuser untuk Open edX
---
Untuk menggunakan django admin kita membutuhkan django superuser, di sistem Open edX kita bisa membuat superuser menggunakan perintah berikut:

    $ sudo su edxapp -s /bin/bash
    $ cd ~
    $ source edxapp_env
    $ python /edx/app/edxapp/edx-platform/manage.py lms createsuperuser --settings aws

Untuk membuat superuser dengan full-profile bisa menggunakan langkah berikut :

    $ sudo -u www-data /edx/bin/python.edxapp ./manage.py lms --settings aws create_user -s -p edx -e user@email.com
    $ sudo -u www-data /edx/bin/python.edxapp ./manage.py lms --settings aws changepassword user
    $ sudo -u www-data /edx/bin/python.edxapp ./manage.py lms --settings aws shell

Di python shell gunakan code dibawah ini

    from django.contrib.auth.models import User
    me = User.objects.get(username="user")
    me.is_superuser = True
    me.is_staff = True
    me.save()

Anda bisa masuk ke localhost/admin dengan django superuser sekarang.

Jika Anda membutuhkan planning, implementation, hosting, theming, support, training, dan custom development untuk Open edX silahkan hubungi [saya](http://oonlab.com/contact)
