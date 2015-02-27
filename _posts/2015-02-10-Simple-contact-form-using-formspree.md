---
title: Create simple form using formspree.io 
author: ariestiyansyah
layout: post
permalink: /create-simple-form-using-formspree
categories:
  - Code
tags:
  - html
  - formspree
  - form
description: Simple form without backend using formspree
---

Seringkali ketika membuat sebuah website atau blog Anda dipusingkan dengan membuat kontak form, padahal yang ingin kita buat adalah kontak form sederhana yang terdiri dari empat field (biasanya) yaitu field nama, email, subject dan isi pesan. Di era modern ini sudah banyak teknologi yang mempermudah kita menyelesaikan masalah membuang-buang waktu dengan membuat kontak form tersebut, salah satunya yang akan saya bahas adalah menggunakan formspree "an functional HTML forms".

Apa yang akan kita buat?
Kita akan membuat sebuah form HTML tanpa PHP, Django, Ruby on Rails, Laravel dan sebagainya (Ya, hanya HTML)

Apa yang kita butuhkan?
- Bootstrap form css (Untuk membuat design form yang lebih minimalist)
- Editor 
- Sedikit pengetahuan tentang HTML/CSS 

PoC 

Formspree.io yang akan kita gunakan tidak perlu registrasi hanya saja ketika kita melakukan input pada form yang telah kita buat pertama kali akan dilakukan verifikasi, kita hanya akan membuat tag form dengan field berikut :

1. nama
2. email
3. subject
4. kategori pesan (option)
5. isi pesan

Kita akan mulai membuat form sederhana menggunakan HTML

{% highlight html %}
<form role="form">
    <div class="form-group">
    <label for="nama">Nama</label>
    <input type="text" name="nama" class="form-control" required>
    </div>

    <div class="form-group">
    <label for="_replyto">Email</label>
    <input type="email" for="_replyto" class="form-control" required>
    </div>

    <div class="form-group">
    <label for="_subject">Subject</label>
    <input type="text" name="_subject" class="form-control" required>
    </div>

    <div class="form-group">
    <label for="kategori">Kategori</label>
    <select name="kategori" class="form-control">
      <option value="">Pilih Kategori</option>
      <option>ExploreCrew</option>
      <option>Kategori Coder</option>
      <option>Kategori Hacker</option>
      <option>Kategori Developer</option>
    </select>
    </div>

    <div class="form-group">
    <label for="pesan">Isi Pesan</label>
    <textarea name="pesan" class="form-control" rows="4" widht="100%" required>/textarea>
    </div>

    <div>
    <input type="submit" class="btn btn-lg" value="Kirim Pesan Rahasia">
    </div>
</form>
{% endhighlight %}

Membuat form sederhana sudah selesai, jika dilihat class yang saya gunakan seperti form-control, form-group, dan btn itu adalah class dari bootstrap, saya menggunakan bootstrap agar lebih minimalis dan responsive untuk form layoutnya. include bootstratp.form.css di codingan form kita,

{% highlight html %}
<link href="css/bootstrap.form.css" rel="stylesheet">
{% endhighlight %}
 
Kita dapat melihat formnya sudah terlihat bagus namun belum bisa digunakan, yang akan kita lakukan adalah menambahkan action dan method pada tag <form> seperti code berikut

{% highlight html %}
<form action="http://formspress.io/test@exlporecrew.org" role="form" method="POST">
{% endhighlight %}

Penjelasan dari kode diatas adalah pada action kita menggunakan layanan formspree sebagai third-party untuk mengirimkan input form ke email kita, dan untuk method yang dibutuhkan oleh formspree adalah POST agar dapat memproses hasil dari kontak form kita.

Selanjutnya upload form kita lalu isi form tersebut untuk pertama kali dan submit, cek email Anda dan klik verify pada email yang Anda terima. Kontak form Anda sudah ready dan siap digunakan

* Source Code : https://github.com/ariestiyansyah/Simple-form/
* Live : http://ariestiyansyah.github.io/Simple-form/


