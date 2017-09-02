---
id: 307
title: Fix gem install mysql2 (Conflict MariaDB) on Fedora
author: ariestiyansyah
layout: post
guid: http://oonlab.com/?p=307
permalink: /fix-gem-install-mysql2-conflict-mariadb-on-fedora
authorsure_include_css:
  - 
ssb_post_sites:
  - 'a:6:{s:2:"fb";s:0:"";s:5:"gplus";N;s:7:"twitter";N;s:8:"linkedin";i:1;s:9:"pineterst";N;s:6:"reddit";N;}'
categories:
  - Code
  - Mozilla
tags:
  - 20
  - Fedora
  - MariaDB
  - MySQL
  - Rizky Ariestiyansyah
---
Bulan Juni ini saya sedang mempelajari bahasa baru (bagi saya) yaitu Ruby, yah lebih tepatnya saya menggunakan framework ruby on rails untuk belajar kali ini. Saya tidak akan menjelaskan bagaimana membuat aplikasi ruby on rails karena <a title="http://guides.rubyonrails.org" href="http://guides.rubyonrails.org" target="_blank">disini</a> tutorial railsnya sudah sangat baik dan bagus sekali plus mudah dipahamo penjelasannya. Saat ingin mencoba aplikasi yang sedang saya kembangkan bersama partner saya yaitu aplikasi &#8220;anakpajak&#8221; di Fedora 20 saya ada sedikit problem dimana ketika menjalankan perintah `bundle install` mysqlnya error, seperti ini errornya

<pre data-lang="ruby">Building native extensions with: '--with-mysql-dir=/etc/mysql/'
This could take a while...
ERROR: Error installing mysql2:
ERROR: Failed to build gem native extension.

/usr/bin/ruby extconf.rb --with-mysql-dir=/etc/mysql/
checking for ruby/thread.h... yes
checking for rb_thread_call_without_gvl() in ruby/thread.h... yes
checking for rb_thread_blocking_region()... yes
checking for rb_wait_for_single_fd()... yes
checking for rb_hash_dup()... yes
checking for rb_intern3()... yes
-----
Cannot find include dir(s) /etc/mysql//include
-----
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers. Check the mkmf.log file for more details. You may
need configuration options.

Provided configuration options:
--with-opt-dir
--without-opt-dir
--with-opt-include
--without-opt-include=${opt-dir}/include
--with-opt-lib
--without-opt-lib=${opt-dir}/lib
--with-make-prog
--without-make-prog
--srcdir=.
--curdir
--ruby=/usr/bin/ruby
--with-mysql-dir
--with-mysql-include
--without-mysql-include=${mysql-dir}/include
--with-mysql-lib
--without-mysql-lib=${mysql-dir}/
--with-mysql-dir
--with-mysql-include
--without-mysql-include=${mysql-dir}/include
--with-mysql-lib
--without-mysql-lib=${mysql-dir}/lib

Gem files will remain installed in /usr/local/share/gems/gems/mysql2-0.3.16 for inspection.
Results logged to /usr/local/share/gems/gems/mysql2-0.3.16/ext/mysql2/gem_make.out</pre>

<code class="javascript"> Note : Sama halnya jika menggunakan perintah $ gem install mysql2 errornya seperti itu juga</code>

Nah apa yang terjadi? ok alasannya adalah ketika kita melakukan instalasi mysql pada fedora 20 kita yang terinstall adalah mariaDB yang merupakan versi free dari MySQL sekarang, tentu saja komplikasi yah dengan gem mysql2 punya ruby, Ok fix error seperti ini simple tinggal menggunakan versi komunitas dari MySQLnya. OK let&#8217;s fix it

<pre class="lang:bash decode:true">onto@oonlab anakpajak$ sudo yum install community-mysql community-mysql-server community-mysql-libs community-mysql-devel</pre>

Coba running lagi perintah

<pre class="lang:bash decode:true">onto@oonlab anakpajak$ gem install mysql2
</pre>

pasti sudah fix mysqlnya <img src="https://oonlab.com/wp-includes/images/smilies/icon_biggrin.gif" alt=":D" class="wp-smiley" /> udah simple gitu aja.

**DISCLAIMER : Tested on Fedora 20**