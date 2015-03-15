---
title: Manifest.webapp in Flask Application
author: ariestiyansyah
layout: post
permalink: /manifest-webapp-flask-application
categories:
  - Mozilla
tags:
- mozilla
- flask
- firefox os
description: Create manifest.webapp in flask application
---

Tired of problem with manifest.webapp failed submission in firefox marketplace? ah if you have experiences with this problem let me show you simple step to create manfest.webapp in flask application.

The Firefox marketplace need a valid type of our manifest file, so we can use response in flask to give a valid type of manifest,webapp, you can create routing in flask application.

first import Response class

	from flask import Response

then create route() decorator to tell Flask what URL should trigger our function.

	@app.route('/manifest.webapp') 
	def manifest():
    		data = json.dumps({
        		"name": "Flask Application",
        		"version": "1.0",
        		"description": "Example of manifest.webapp",
        		"launch_path": "/",
        		"icons": {
            			"256": "/img/256.png",
            			"128": "/img/128.png",
            			"120": "/img/120.png",
            			"90": "/img/90.png",
            			"60": "/img/60.png",
            			"32": "/img/32.png"
        			},
        		"developer": {
        		"name": "Rizky Ariestiyansyah",
        		"url": "http://oonlab.com"
        		},
        		"orientation": ["portrait"],
        		"default_locale": "en"
    		})
    		return Response(data, mimetype='application/x-web-app-manifest+json')

You are done creating manifest.webapp.

See ya

