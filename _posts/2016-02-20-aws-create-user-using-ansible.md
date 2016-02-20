---
title: AWS: Create user using ansible
author: ariestiyansyah
layout: post
thumbnail: /images/logo-edx.png
categories:
  - AWS
  - Code
tags:
- aws
- code
-  IAM
description: Manage Identity and Access Management using ansible
---

Below is my IAM module to create user in AWS using Ansible

```
--- # AWS IAM MODULE
- hosts: localhost
 connection: local
 remote_user: test
 become: yes
 gather_facts: no
 var_files:
 - files/awscredentials.yml
 tasks:
 - name: Create IAM Users
   iam:
     aws_access_key: "{{ aws_id }}"
     aws_secret_key: "{{ aws_key }}"
     region: "{{ aws_region }}"
     iam_type: user
     name: " {{ item }}"
     state: present
     password: "password"
     access_key_state: create
   with_items:
   - user1
   - user2
   register: output
   name: show JSON Results
 - debug: var=output
```

Note: Research purpose.