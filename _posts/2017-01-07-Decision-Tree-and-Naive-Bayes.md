---
title: Dasar Decision Tree dan Naive Bayes
author: ariestiyansyah
layout: post
categories:
- Data
tags:
- Machine Learning
- Data Scientist
- Decision Tree
- Naive Bayes
description: Machine Learning merupakan ilmu pengetahuan yang membahas tentang mesin yang mempelajari tingkah laku dan mengolah data yang diberikan seperti halnya manusia yang belajar dari pengalaman sebelumnya
---
Machine Learning merupakan ilmu pengetahuan yang membahas tentang mesin yang mempelajari tingkah laku dan mengolah data yang diberikan seperti halnya manusia yang belajar dari pengalaman sebelumnya. Machine Learning banyak digunakan untuk voice recognition, trading, car automation, rumah sakit dan sebagainya.

## Decision Trees

| Jenis Kelamin | Umur | Aplikasi   |
|---------------|------|------------|
| L             | 17   | Pokemon Go |
| P             | 25   | WhatsApp   |
| L             | 42   | Twitter    |
| P             | 19   | Pokemon Go |
| P             | 12   | Pokemon Go |
| L             | 22   | Twitter    |

Antara Umur dan Jenis Kelamin, Dari data diatas bagaimana kita dapat menentukan aplikasi mana yang akan pengguna unduh?

Jenis Kelamin Laki-laki menguduh Pokemon Go, Twitter dan Twitter
Jenis Kelamin Perempuan mengunduh Pokemon Go dan Whatspp

Umur 10-20 Mengunduh aplikasi Pokemon Go
Umur 20+ Mengunduh Aplikasi Whatsapp dan Twitter

<img src="http://oonlab.com/images/ml/decision-tree.png" width="300">

## Naive Bayes Algorithm

Untuk case ini kita akan mencoba mendeteksi spam email dari kumpulan data yang sudah ada, misal ada 100 email yang kita miliki dan 20 dari 100 emailnya adalah spam sedangkan sisanya 80 email adalah non-spam. Pada case ini kita beranggapan bahwa email yang mengandung kata “promo” akan dikategorikan spam.

<img src="http://oonlab.com/images/ml/naive-bayes.png" width="300">

Setelah dilakukan analisa ada 15 dari 20 email spam dan 10 dari 80 email non-spam memiliki kata promo, okay, berapa kemungkinan presentase spam di inbox yang kita miliki?

Kita sudah mendapatkan data bahwa 15 email dari email yang dikategorikan spam memiliki kata promo dan 10 dari email yang dikategorikan non-spam memiliki kata promo, berarti jumlah email yang dianggap spam karena memiliki kata promo adalah 25 dengan presentasi spam dan non-spam adalah 60%:40%, jadi email yang memiliki kata promo kemungkinan untuk dikategorikan spam adalah 60%.

<img src="http://oonlab.com/images/ml/naive-bayes2.png" width="300">

Ok, di artikel berikutnya saya akan membahas linier regeression dan logistic regression.
