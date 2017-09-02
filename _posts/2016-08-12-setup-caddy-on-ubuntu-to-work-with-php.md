---
title: Setup Caddy with PHP on Ubuntu 
author: ariestiyansyah
layout: post
categories:
- Code
tags:
- Caddy
- Ubuntu
- PHP
- Ariestiyansyah
description: Setting up caddy on ubuntu to work with PHP
---

#### Introduction

Caddy is a very promising webserver (written in Go) that allows HTTP/2. It is a full-featured web server that includes the ability to enable HTTPS automatically. This allows for web server creation with high flexibility and low overhead. Creator claims caddy to be designed for human and it is probably the only of its kind. The purpose of Caddy is to streamline an authentic web development, deployment, and hosting workflow so that anyone can host their own web sites without requiring special technical knowledge. If you are designer, blogger and developer prefer to have a simple yet webserver with HTTP/2 support by default, Caddy is definitely worth checking out.

#### Installation

You can run auto Caddy installation instead of download the file archive by running the following code in your terminal.

	curl https://getcaddy.com | bash

The command above will install caddy to `/usr/local/bin/caddy`

#### System Setup

Allow caddy to use standard internal network post

	sudo setcap cap_net_bind_service=+ep /usr/local/bin/caddy

#### PHP Setup

Install PHP-fpm by running the following command:


PHP5

	sudo apt-get install php5-fpm php5-cli curl

PHP7

	sudo apt-get install php7.0-fpm php7.0-cli curl

##### Site Configuration

Create web server root directory to store all of your webpages like .php, .html, ect.

	sudo mkdir -p /opt/www
	sudo chown -R www-data:www-data

#### Caddy Configuration

Create the directory we’ll be using to store Caddyfile and ssl, give user perms to write to it:

	sudo mkdir /etc/caddy
	sudo chown -R root:www-data /etc/caddy
	sudo mkdir /etc/ssl/caddy
	sudo chown -R www-data:root /etc/ssl/caddy
	chmod 0770 /etc/ssl/caddy

Create `Caddyfile` which the main configuration file of Caddy.

	sudo vim /etc/caddy/Caddyfile

Put the following code:

	yourdomain.com {
	root /opt/www
	tls your@yourdomain.com.com
	}

* **root /opt/www** : point the web server root directory to /opt/www
* **tls your@yourdomain.com** : configures HTTPS connections

To configure php settings with more granularity, you can use the fastcgi directive.

	fastcgi / /var/run/php/php7.0-fpm.sock {
		ext 	.php
		split	.php
		index	index.php
	}

* **ext** : if requested file has the .php extension use fastcgi proxy
* **split** : To store anything after .php in the PATH_INFO CGI variable
* **index**: To check for index.php if no file is specified in the URL

Note:
Use the following socket path for PHP5

	/var/run/php5-fpm.sock


#### Server Configuration


Now we create a systemd configuration file `/etc/systemd/system/caddy.service`, which looks like this:

    [Unit]
    Description=Caddy HTTP/2 web server
    Documentation=https://caddyserver.com/docs
    After=network-online.target
    Wants=network-online.target systemd-networkd-wait-online.service
    
    [Service]
    Restart=on-failure
    
    User=www-data
    Group=www-data
    
    Environment=HOME=/etc/ssl/caddy
    
    ExecStart=/usr/local/bin/caddy -log stdout -agree=true -conf=/etc/caddy/Caddyfile -root=/var/tmp
    ExecReload=/bin/kill -USR1 $MAINPID
    
    LimitNOFILE=4096
    LimitNPROC=64
    
    PrivateTmp=true
    PrivateDevices=true
    ProtectHome=true
    ProtectSystem=full
    ReadWriteDirectories=/etc/ssl/caddy
    
    CapabilityBoundingSet=CAP_NET_BIND_SERVICE
    AmbientCapabilities=CAP_NET_BIND_SERVICE
    NoNewPrivileges=true
    
    [Install]
    WantedBy=multi-user.target

#### Testing PHP

With a Caddy web server configured and the PHP packages installed, we should be able to verify that PHP is up and running. Begin by checking the installed version of PHP at the command line:

	$ php -v
	PHP 7.0.8-0ubuntu0.16.04.2 (cli) ( NTS )
	Copyright (c) 1997-2016 The PHP Group
	Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies
    	with Zend OPcache v7.0.8-0ubuntu0.16.04.2, Copyright (c) 1999-2016, by Zend Technologies

You can also create a test file in the web server root directory, which is /opt/www

Using Vim, create the file called into.php  in the web server root directory

	sudo vim /opt/www/tes.php


Paste the following code into `tes.php`

	<?php
	phpinfo();
	?>

Exit and save tes.php from your editor. Now, load the following address in your browser:

	https://yourdomain.com/tes.php

You should see PHP version and configuration info for PHP. Once you've double-checked this, it's safest to to delete testing file.

	sudo rm -r /opt/www/tes.php

#### CONCLUSION

Now, you have working Caddy web server with PHP feature.







