---
id: 396
title: Quiz Social Media Sederhana Python dengan Modul Random
author: ariestiyansyah
layout: post
guid: http://oonlab.com/?p=396
permalink: /quiz-social-media-sederhana-python-dengan-modul-random
categories:
  - Code
  - Python
tags:
  - PlanPin
  - Python
  - Randint
  - Random
---
Hai hai, kebetulan lagi colak colek planpin &#8220;Planet Python di Indonesia&#8221; lewat twitternya buat ngeadd feed blog ini ke planpinnya, karena mimin kasih info buat updat tulisan yasudah daripada lama kita iseng saja, lalu apa ya dengan python yang akan kita lakukan? hmmm saya kalau pakai python itu modulnya buanyaak banget jadi bingung milih yang mana, tapi ada satu favorit saya yaitu module random, ya senang juga sih kan pakai modul ini bisa buat menyatakan cinta &#8220;eh&#8221; maksudnya mengasah logika &#8220;nah loh&#8221;

Modul random ini di python punya banyak fungsi (red:function) seperti randint, shuffle, randrange, random. Lalu apa? hmm kita buat quiz sederhana yuk! sebut saja namanya Quiz Social Media, kita cukup menggunaan randint saja yah, first cobain randint dulu dong pakai console

{% highlight python %}
>>> import random
>>> print random.randint(0,9)
5
{% endhighlight %}

It works! oke soal belajar randint belajar sendiri saja ya dirumah <img src="https://oonlab.com/wp-includes/images/smilies/icon_razz.gif" alt=":P" class="wp-smiley" /> ini modul paling gampang koq di python, langsung saja ke quiz social media kita, di header seperti biasa kita import modul python kita,

{% highlight python %}
import sys
from random import randint
{% endhighlight %}

lalu kita buat lists untuk soal jawaban dan referensi link kita menggunakan lists (ituloh yang kayak array gitu), lists itu bisa mengandung beberapa variabel yah <img src="https://oonlab.com/wp-includes/images/smilies/icon_biggrin.gif" alt=":D" class="wp-smiley" /> 

{% highlight python %}
Soal = ["Social Media buatan Mark zuck...? ",
     "Social Media yang eksis dengan awake sleep? ",
     "Microblogging yang gambar burung apa hayo? ",
     "Social Media yang populer dengan photo?",
     "Social Media yang logonya hampir sama dengan Path  ",
     "Social Media buat pekerja itu namanya: ",
     "Planet Python di Indonesia itu hanya: "]
Jawab = ["facebook",
     "path",
     "twitter",
     "instagram",
     "pinterest",
     "linkedin",
     "planpin"]
     
link = ["http://www.facebook.com",
            "http://Path.com",
            "http://twitter.com",
            "http://Instagram.com",
            "http://Pinterest.com",
            "http://linkedin.com",
            "http://planet.python.or.id/"]
{% endhighlight %}

Ok kita sudah buat listnya, kalau orang-orang expert untuk quiz seperti ini biasanya database yang besar gitu kayak mongodb atau pakai json juga bisa, tapi ini masih simple ya, selanjutnya kita akan menggunakan loops statement buat menentukan jawaban benar atau salah, kita add code count = 0 dibawah header tadi jadi seperti ini

{% highlight python %}
import sys
from random import randint

count = 0
{% endhighlight %}

Setelah itu tentuka jawaban benar dan salah, dalam hal ini jawabannya sesuai dengan taa urutan pada list kita, dari &#8220;Soal&#8221;, &#8220;Jawab&#8221;, &#8220;link&#8221; ok codenya seperti ini

{% highlight python %}
i = randint(0, 7)
answer = raw_input("Pertanyaan 1 : " + Soal[i])
if answer.lower() == Jawab[i]: #jawaban dengan huruf kecil
    print "Benar" 
    count = count + 1
else: #jawaban salah
    print "Salah \nJawaban Benar : " + Jawab[i]
    print "Pengen Coba? Kunjungi : " + link[i]
{% endhighlight %}

lihat code

{% highlight python %}
i = randint(0, 7)
{% endhighlight %}

ini adalah jumlah pertanyaan yang sudah kita siapkan tadi, jik pertanyaan anda ada 9 ganti menjadi (0, 9) begitu juga selanjutanya,

Lalu untuk menentukan presentasi nilai, kita akan membuat nilai keseluruhan adalah 100, jika dibagi menjadi 7 pertanyaan itu berjadi 14,&#8230;. persen nilai untuk satu pertanyaan, jadi codenya

{% highlight python %}
print "\n %d jawaban benar" % (count)
print "\nNilai : %d persen" % (count / float(7) * 100)
{% endhighlight %}

Oke sudah selesai, kita coba jalankan codenya, ini screenshot di laptop saya

[<img class="aligncenter size-large wp-image-397" src="http://oonlab.com/wp-content/uploads/2014/09/Screenshot-from-2014-09-21-150300-600x360.png" alt="Screenshot from 2014-09-21 15:03:00" width="600" height="360" />][1]

OK, just it, untuk full source codenya digist ya : <a title="https://gist.github.com/ariestiyansyah/4d4152c3e9b447bac74e" href="https://gist.github.com/ariestiyansyah/4d4152c3e9b447bac74e" target="_blank">https://gist.github.com/ariestiyansyah/4d4152c3e9b447bac74e</a>

See ya Planet Python <img src="https://oonlab.com/wp-includes/images/smilies/icon_razz.gif" alt=":P" class="wp-smiley" /> 

&nbsp;

&nbsp;

 [1]: http://oonlab.com/wp-content/uploads/2014/09/Screenshot-from-2014-09-21-150300.png
