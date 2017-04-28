---
title: Get Glassdoor Data from their API using Python
author: ariestiyansyah
layout: post
permalink: /get-glassdoor-data-from-their-api-using-python
categories:
  - Python
  - Code
tags:
- python
- code
- csv
description: Code to generate data from glassdoor API
---
This post contain simple code to get data from Glassdoor API using python.

Module using in this code:

1. Urllib2
2. BeautifulSoup

		import urllib2, sys
		from BeautifulSoup import BeautifulSoup

		url = "http://api.glassdoor.com/api/api.htm?t.p=25738&t.k=iRCtcWJQamE&format=json&v=1&action=employers&q="
		hdr = {'User-Agent': 'Mozilla/5.0'}
		req = urllib2.Request(url,headers=hdr)
		response = urllib2.urlopen(req)
		soup = BeautifulSoup(response)

Save with name `glassdoor.py` then run `$ python glassdoor.py`

Done.
