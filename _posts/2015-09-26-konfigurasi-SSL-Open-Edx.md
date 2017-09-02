---
title: Konfigurasi SSL Open Edx
author: ariestiyansyah
layout: post
thumbnail: /images/logo-edx.png
categories:
  - edX
  - Code
tags:
- edX
- code
- Nginx
description: Konfigurasi SSL nginx server di Open edX
---
Open edX secara default tidak menyediakan Konfigurasi SSL untuk sistemnya, dikarenakan Open edX menggunakan nginx sebagai web server maka untuk melakukan konfigurasi SSL sangatlah mudah. Di sistem Open edX terdapat lms (learning management system) dan cms (Studio) yang memiliki konfigurasi berbeda, untuk konfigurasi nginx lms dan cms Anda dapat menemukannya di `/edx/app/nginx/sites-available`.

Saya anggap Anda sudah memiliki certificate dan key untuk konfigurasi SSL Anda, selanjutnya simpan file tersebut dimana saja, misalnya di `/etc/nginx/ssl/`, jadi akan ada certificate dan key kita pada folder tersebut

    /etc/nginx/ssl/certiificate.crt
    /etc/nginx/ssl/key-insecure.key

Untuk konfigurasi lms yang memiliki default port 80 maka kita harus melakukan force HTTPS redirect agar setiap user mengakses port HTTP tersebut akan diarahkan ke HTTPS. Anda harus membuat server block baru pada konfigurasi nginx untuk lms Anda

Konfigurasi untuk LMS `/edx/app/nginx/sites-available/lms`

    server {
        listen 80;
        return 301 https://$host$request_uri;
      }

Untuk studio tidak memerlukan redirect karena port defaultnya 18010.

Berikutnya kita perlu menambahkan konfigurasi agar server block pada nginx Anda menggunakan SSL, konfigurasi certificate dan key yang sudah simpan di `/etc/nginx/ssl` tadi,

Konfigurasi untuk LMS `/edx/app/nginx/sites-available/lms`

    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/certiificate.crtt;
    ssl_certificate_key /etc/nginx/ssl/key-insecure.key;

Port 443 adalah port default untuk HTTPS

konfigurasi untuk CMS `/edx/app/nginx/sites-available/cms`

    listen 18010 ssl;
    ssl_certificate /etc/nginx/ssl/certiificate.crt;
    ssl_certificate_key /etc/nginx/ssl/key-insecure.key;

Selanjutnya restart nginx.

`sudo service nginx restart`

Sampai disini dulu yah, see you!

Jika Anda membutuhkan planning, implementation, hosting, theming, support, training, dan custom development untuk Open edX silahkan hubungi saya.
