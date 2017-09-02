---
id: 222
title: Pasang Firefox Nightly di IGOS Nusantara / Fedora
author: ariestiyansyah
layout: post
guid: http://oonlab.com/?p=222
permalink: /pasang-firefox-nightly-di-igos-nusantara-fedora
authorsure_include_css:
  - 
categories:
  - Ide
  - Mozilla
tags:
  - Australis
  - Fedora
  - Firefox
  - IGOS Nusantara
  - Nightly
---
*Firefox Nightly* sudah pada tahukan? ok gak usah basah-basahan lagi karena kita semua sudah tahu kalau Nightly itu versi untuk para *Q&A* dan *Developer*. Well, postingan ini sederhana karena lagi sendiri tidak ada yang dikerjakan maka terciptalah niat buat nyampah di blog ini, tulisannya gak akan jauh beda dari title diatas &#8220;Pasang Firefox Nightly di <a title="http://igos-nusantara.or.id/" href="http://igos-nusantara.or.id/" target="_blank"><em>IGOS Nusantara</em></a> / *Fedora*&#8220;.

Alasan saya menulis ini karena Nightly (Firefox) memiliki user interface baru yang disebut &#8220;Australis&#8221;, rupanya hampir sama dengan peramban besutan &#8220;*Google*&#8221; (OH NO&#8230;!!). Ok sekarang saatnya WTF ?? (Where To Find) not (What The F*CK).

**Before** : Firefox kita masih versi biasa seperti ini

<div id="attachment_224" style="width: 610px" class="wp-caption aligncenter">
  <a href="http://oonlab.com/wp-content/uploads/2014/04/Screenshot-from-2014-04-06-161038.png"><img class="size-large wp-image-224" alt="Firefox Standard (Final)" src="http://oonlab.com/wp-content/uploads/2014/04/Screenshot-from-2014-04-06-161038-600x337.png" width="600" height="337" /></a>
  
  <p class="wp-caption-text">
    Firefox Standard (Final)
  </p>
</div>

Dan sekarang kita akan menuju perubahan karena negara api sedang menyerang, YAA the Nightly is come. Caranya adalah sebagai berikut bero&#8230;

**Buka Console** (masuk root ya bos..)

Buka link <a title="http://nightly.mozilla.org" href="http://nightly.mozilla.org" target="_blank">http://nightly.mozilla.org</a> untuk mengunduh versi terakhir dari si malam (Nightly)

Di console gunakan command berikut ini,

<pre class="lang:bash decode:true"># cd /opt/
# wget http://ftp.mozilla.org/pub/mozilla.org/firefox/nightly/latest-trunk/firefox-31.0a1.en-US.linux-i686.tar.bz2
# tar -xvf firefox-31.0a1.en-US.linux-i686.tar.bz2
# mv firefox nightly
# ln -s /opt/nightly/firefox /usr/local/bin/nightly</pre>

Menjalankannya? Gunakan saja command &#8220;*nightly*&#8221; di console bos.

**After** : Screenshot Nightly

<div id="attachment_223" style="width: 610px" class="wp-caption aligncenter">
  <a href="http://oonlab.com/wp-content/uploads/2014/04/Screenshot-from-2014-04-06-160620.png"><img class="size-large wp-image-223" alt="Firefox Nightly" src="http://oonlab.com/wp-content/uploads/2014/04/Screenshot-from-2014-04-06-160620-600x337.png" width="600" height="337" /></a>
  
  <p class="wp-caption-text">
    Firefox Nightly
  </p>
</div>

OK! Finish, selamat menikmati <img src="https://oonlab.com/wp-includes/images/smilies/icon_biggrin.gif" alt=":D" class="wp-smiley" /> 

**DISCLAIMER** : Tulisan ini bukan hoax dan dapat dipercaya karena sudah dicoba di sistem operasi berbasis open source yang katanya bebas untuk diungkapkan tetapi sampai saat ini penulis belum menemukan kebebasan bercinta dikarenakan terlalu mainsteamnya pergaulan remaja saat ini, untuk itu selalu hati-hati dengan open source jangan sampai sourcemu leaked by lelaki hidung belang atau cowok berparas tampan yang ternyata adalah homo.