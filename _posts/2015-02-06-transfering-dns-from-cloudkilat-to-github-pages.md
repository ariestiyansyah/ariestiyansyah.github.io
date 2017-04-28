---
title: Transfering DNS from CloudKilat to Github Pages
author: ariestiyansyah
layout: post
permalink: /transfering-dns-from-cloudkilat-to-github-pages
categories:
  - Code
  - Idea
tags:
  - Cloudkilat
  - DNS
description: Transer DNS from Cloudkilat to Github Pages
---
Well, today I am totally move my hosting from CloudKilat to Github pages (Jekyll), when I use cloudkilat as my hosting provider the cms I used is wordpress. After do research I choose to use github pages. I'll not share my research now maybe next time bro.

If you want to know how to migrate from wordpress to jekyll there are good tutorial on google :P hahahaha, I am following [this step](http://www.girliemac.com/blog/2013/12/27/wordpress-to-jekyll/) from girliemac, simple and fast and hope you are cozy with her tutorial.

Ok back to the topic, cloudkilat is not support for custom apex domain, it just support by adding subdomain in our DNS setting, the trick is simple... let me show you dude :P

![Cloudkilat domain](http://oonlab.com/wp-content/uploads/images/cloudkilat-domain.png) 

- Create two A record with hostname "@" and add address 192.30.252.154 and 192.30.252.153
- Create CNAME record and point the address to "yourusername.github.io"
- Create CNAME file on root directory of your github repo or web and add your domain address, for example "oonlab.com"

Done,









