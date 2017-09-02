---
title: Store Open edX Profile Image to AWS S3
author: ariestiyansyah
layout: post
categories:
- edX
tags:
- Openedx
- Amazon
- S3
- Ariestiyansyah
description: Setting up Open edX to store profile image to AWS S3
---

Add the following configuration to `lms.env.json` file:

    "PROFILE_IMAGE_BACKEND": {
        "class": "storages.backends.s3boto.S3BotoStorage",
        "options": {
            "location": "/dirpath",
            "bucket": "bucketname",
       	    "custom_domain": "custom-domain",
       		"headers": {"Cache-Control": "max-age=31536000"}
        }
    },
    
Example of my configuration

    "PROFILE_IMAGE_BACKEND": {
        "class": "storages.backends.s3boto.S3BotoStorage",
        "options": {
            "location": "/profile",
            "bucket": "oonlab",
       	    "custom_domain": "s3-ap-southeast-1.amazonaws.com/oonlab",
       		"headers": {"Cache-Control": "max-age=31536000"}
        }
    },
    
Don't forget to add AWS ACCESS KEY and AWS SECRET KEY in your `lms.auth.json`, here's the example configuration

    "AWS_ACCESS_KEY_ID": "xxxxxxx",
    "AWS_SECRET_ACCESS_KEY": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    
All set now you can upload image profile and store it to Amazon S3.

Cheers.