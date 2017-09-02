---
title: Generate SECRET KEY Django
author: ariestiyansyah
layout: post
categories:
  - edX
  - Django
  - Python
tags:
- Open edX
- Python
- Django
- Ariestiyansyah
description: Generate SECRET KEY in django using Python 3 and Python 2
---

We can use code below to generate SECRET KEY in Django.

	#!/usr/bin/env python

	from sys import version_info
	from django.utils.crypto import get_random_string

	chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'
	SECRET_KEY = get_random_string(50, chars)

	python3 = version_info[0] > 2
	if python3:
    	print (SECRET_KEY)
	else:
    	print SECRET_KEY
    		
or simply install using `pip install django-secret-key` then run `django-secret-key`

