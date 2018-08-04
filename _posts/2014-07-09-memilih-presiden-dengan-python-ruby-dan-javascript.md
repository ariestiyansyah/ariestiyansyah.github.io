---
id: 337
title: Memilih Presiden dengan Python, Ruby dan Javascript
author: ariestiyansyah
layout: post
guid: http://oonlab.com/?p=337
permalink: /memilih-presiden-dengan-python-ruby-dan-javascript
ssb_post_sites:
  - 'a:6:{s:2:"fb";s:0:"";s:5:"gplus";i:1;s:7:"twitter";i:1;s:8:"linkedin";i:1;s:9:"pineterst";N;s:6:"reddit";N;}'
categories:
  - Code
  - Ide
  - Python
tags:
  - Indonesia Memilih
  - Pilpres 2014
  - Presiden Javascript
  - Presiden Python
  - Presiden Ruby
image: /wp-content/uploads/2014/07/pemilu-2014.jpg
---
[<img class="aligncenter size-full wp-image-340" src="http://oonlab.com/wp-content/uploads/2014/07/pemilu-2014.jpg" alt="pemilu-2014" width="504" height="360" />][1]

**9 July 2014** sepertinya hari yang biasa saja bagi saya, tapi kebanyakan masyarakat di Indonesia akan merayakan pesta demokrasi, &#8220;Entahlah&#8221; demokrasi seperti apa itu. Pestanya adalah pemilihan presiden Indonesia untuk periode 2014-2019, kandidat kali ini ada 2 yaitu Prabowo-Hatta &#8220;1&#8243; dan Jokowi-JK &#8220;2&#8243;, lalu apa hubungannya dengan python, ruby, dan Javascript? buat para geeks computer atau Developer atau apalah itu yang kerjaannya mainan keyboard, kalungin flashdisk, pakai kacamata, jarang mandi dan pastinya jarang yang jomblo -__- .

OK! Hubungannya simple, ini bukan soal hubungan antara pria-wanita, siang-malam, utara-selatan, jantan-betina atau apalah tapi soal kecenderungan para penggiat keyboard yang tiap hari hidupnya ditemani oleh keyboard dan siapa sangka dengan keyboard bisa memilih presiden pilihan kita? yeah sedikit aneh tapi biasa aja sih ;)) .

### Python

Pertama Python, bahasa ular yang banyak sekali digunakan oleh developer nih, begini cara memilih presiden dengan bahasa pemrograman python

<pre class="lang:default decode:true ">onto@oonlab ~$ python
Python 2.7.5 (default, Jun 19 2014, 12:16:39) 
[GCC 4.8.2 20131212 (Red Hat 4.8.2-7)] on linux2
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt; import random
&gt;&gt;&gt; random.choice (['Prabowo-Hatta', 'Jokowi-JK'])
'Prabowo-Hatta'
&gt;&gt;&gt; random.choice (['Prabowo-Hatta', 'Jokowi-JK'])
'Jokowi-JK'
&gt;&gt;&gt; 
</pre>

### Ruby

Selanjutnya dengan menggunakan ruby (irb di console), kita bisa menggunakan command &#8220;irb&#8221; di console kita.

<pre class="lang:default decode:true ">onto@oonlab ~$ irb
irb(main):001:0&gt; presiden = ["Prabowo-Hatta","Jokowi-Jk"]
=&gt; ["Prabowo-Hatta", "Jokowi-Jk"]
irb(main):002:0&gt; presiden.sample
=&gt; "Prabowo-Hatta"
irb(main):003:0&gt; presiden.sample
=&gt; "Jokowi-Jk"
irb(main):004:0&gt;</pre>

###  Javascript

Ini adalah bahasa bahasa yang banyak digunakan oleh pengembang web dan desktop (sekarang), saya akan memberikan contoh menggunakan nodejs bagaimana memilih presiden sesuai dengan javascript, ok run the node command

<pre class="lang:default decode:true ">onto@oonlab ~$ node
&gt; var calonPresiden = ["Prabowo-Hatta", "Jokowi-JK"];
undefined
&gt; var pilihPresiden = function () {
... var presiden = calonPresiden[Math.floor(Math.random() * 2)];
... return presiden;
... };
undefined
&gt; pilihPresiden();
'Jokowi-JK'
&gt; pilihPresiden();
'Prabowo-Hatta'</pre>

Ok, cara diatas adalah cara yang simple menentukan pilihan presiden Anda untuk 5 tahun mendatang <img src="https://oonlab.com/wp-includes/images/smilies/icon_biggrin.gif" alt=":D" class="wp-smiley" /> , believe your keyboard hahahah karena doi selalu menemani kita**  
**

<div class="copy-paste-block">
  <span style="color: #ff0000;"><em><span class="bqQuoteLink">&#8220;We have to wonder whether digital technology, rather than making it easier to communicate, is actually doing the opposite. We now sit alone at a keyboard, firing off zeros and ones into the ether. Offices are silent</span></em>.&#8221;</span> &#8211; Tom Hodgkinson
</div>

<div class="copy-paste-block">
</div>

<div class="copy-paste-block">
  <strong>DISCLAIMER</strong> : Semoga pilihannya membuat negara kita maju ya <img src="https://oonlab.com/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
</div>

&nbsp;

&nbsp;

 [1]: http://oonlab.com/wp-content/uploads/2014/07/pemilu-2014.jpg