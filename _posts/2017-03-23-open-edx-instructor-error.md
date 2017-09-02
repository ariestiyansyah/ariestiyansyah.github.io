---
title: Open edX Instructor Page Error on Ficus
author: ariestiyansyah
layout: post
categories:
- edX
tags:
- Open edX
- Instructor
- MOOC
- Ficus
description: This article will provide how to fix instructor page error on Open edX learning management system
---

This is what I found on edx.log

```
OperationalError: (1045, "Access denied for user 'edxapp_replica001'@'localhost' (using password: YES)")
Mar 23 05:39:18 ip-172-31-6-181 [service_variant=lms][request_cache][env:sandbox] WARNING [ip-172-31-6-181  30422] [__init__.py:66] - Could not retrieve the current request. A stub request will be created instead using settings.SITE_NA
ME
```

I can't access instructor tab on Open edX Learning Management System, the problem is user `edxapp_replica001` doesn't exist. Here's list of MySQL use on ficus installation

```
mysql> SELECT User FROM mysql.user;
+------------------+
| User             |
+------------------+
| root             |
| root             |
| root             |
|                  |
| admin            |
| api001           |
| debian-sys-maint |
| ecomm001         |
| edxapp001        |
| edxapp_cmsh001   |
| migrate          |
| programs001      |
| read_only        |
| reports001       |
| root             |
| xqueue001        |
+------------------+
16 rows in set (0.00 sec)
```

What's the main problem? if you familiar with the new Open edX ficus [installation](https://openedx.atlassian.net/wiki/display/OpenOPS/Native+Open+edX+Ubuntu+16.04+64+bit+Installation) and choose to randomized password by running command below, the script will set default `EDXAPP_MYSQL_REPLICA_USER` on asible to `edxapp_replica001` which will cause an error on MySQL 5.7.8 because it’s greater than 16 character

```
wget https://raw.githubusercontent.com/edx/configuration/$OPENEDX_RELEASE/util/install/generate-passwords.sh -O - | bash
```

Simple! to fix this problem after installation of ficus is to change `lms.auth.json` and `cms.auth.json` database configuration. We can use `edxapp001` user for `read_replica` database instead instead of `edxapp_replica001`.

```
DATABASES": {
        "default": {
            "ATOMIC_REQUESTS": true,
            "ENGINE": "django.db.backends.mysql",
            "HOST": "localhost",
            "NAME": "edxapp",
            "PASSWORD": "yourpassword",
            "PORT": "3306",
            "USER": "edxapp001"
        },
        "read_replica": {
            "ENGINE": "django.db.backends.mysql",
            "HOST": "localhost",
            "NAME": "edxapp",
            "PASSWORD": "yourpassword",
            "PORT": "3306",
            "USER": "edxapp001"
        },
        "student_module_history": {
            "ENGINE": "django.db.backends.mysql",
            "HOST": "localhost",
            "NAME": "edxapp_csmh",
            "PASSWORD": "randomhash",
            "PORT": "3306",
            "USER": "edxapp_cmsh001"
        }
    },
```
Now restart your lms and cms! it should be work
```
$ sudo /edx/bin/supervisorctl restart edxapp:
```