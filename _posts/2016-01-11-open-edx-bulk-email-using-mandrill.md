---
title: Open edX bulk email using mandrill
author: ariestiyansyah
layout: post
thumbnail: /images/logo-edx.png
categories:
  - edX
  - Code
tags:
- edX
- code
- Django
- MandrillApp
description: Enable bulk email in Open edX using Mandrill
---

In my previous article, I explained how to [solve celery error in Open edX instance](http://oonlab.com/edx/code/2015/10/21/solve-celery-error-saat-migrasi-open-edx/). In this article we will be talking about one of the important feature in Open edX called bulk email, this feature will allow staff or teaching assistant to send email directly to student, staff even yourself.

# Mandrill

Go to https://mandrillapp.com to register mandrill account, then access https://mandrillapp.com/settings/index to get SMTP & API Credential.

<center>
![SMTP & API Credentials](http://oonlab.com/images/mandrill.png)</center>

We will use the credential from image above

	Host: smtp.mandrillapp.com
	Port : 587
	SMTP Username : edx@oonlab.com
	SMTP Password : wwesKLAXxIvsHQfHrxsdnw


Note: To get SMTP Password you need to create New API Key.

# Open edX

Now go ahead to Open edX instance then add the credentials to `lms.env.json` and `cms.env.json`


    "EMAIL_HOST": "smtp.mandrillapp.com", 
    "EMAIL_PORT": 587, 
    "EMAIL_USE_TLS": true,  

credentials for `lms.auth.json` and `cms.auth.json`

    "EMAIL_HOST_PASSWORD": "wwesKLAXxIvsHQfHrxsdnw", 
    "EMAIL_HOST_USER": "edx@oonlab.com",

Set  `ENABLE_INSTRUCTOR_EMAIL` to true by add this code below to `lms.env.json`

	"ENABLE_INSTRUCTOR_EMAIL": true,
	
# Email Template

Open up Django admin then go to course email templates (link: https://yourdomain.com/admin/bulk_email/courseemailtemplate/) and add course email template.

In course email template add string `message_body`  in html and plain template.
	
	Html Template : message_body string
	Plain Template : message_body string
	Name: leave blank	
Save!

Boom! now you can send Bulk email directly from LMS.


If you need help for planning, implementation, hosting, theming, support, training, and custom development for Open edX you can email me [here](mailto:onto@valutac.com)