---
title: Easy Way to Generate Open edX Certificate
author: ariestiyansyah
layout: post
categories:
  - edX
tags:
- Open edX
- Certificate
- IndonesiaX
- Ariestiyansyah
description: Easy way to generate certificate in Open edX
---

I wrote simple script to generate Open edX certificate based on our input. Basically if you want to generate certificate in Open edX you need to go to `/edx/app/edxapp/edx-platform` then run this command 

```sudo -u www-data /edx/bin/python.edxapp ./manage.py lms --settings aws ungenerated_certs -c course_id --insecure```

To make it easy we can use bash shell scripting, here's the code:

	
	#!/bin/bash
	# change directory to edx-platform
	cd /edx/app/edxapp/edx-platform
	
	# prompt user, and read command line argument
	read -p 'Enter course ID: ' idcourse
	read -p "edXius, Are you sure you want to generate the certificate (Y/N)? " answer

	# handle the command line argument we were given
	while true
	do
		case $answer in
		[yY]* ) echo "Okay Darth edXius, Start generating $idcourse "
			sudo -u www-data /edx/bin/python.edxapp ./manage.py lms --settings aws ungenerated_certs -c $idcourse --insecure
           		break;;
           	

		[nN]* ) exit;;
		
		* ) 	echo "edXius, just enter Y or N, please."; break ;;
	  esac
	done

Save this code to `cert.sh` and run using `bash cert.sh` command.

This code will ask you which course ID to generate and asking if you are agree to generate the certificate or not.

Done.

Rizky A.
