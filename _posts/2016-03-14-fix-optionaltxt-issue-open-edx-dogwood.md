---
title: Fix optional.txt issue on Open edX dogwood installation
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
- Devstack
description: Fix no such file optional.txt  on dogwood installation
---


Well, last week dogwood version of Open edX have broken installation due to Google removing an asset we were using during installation, but Open edX team has been fixed this issue which is available in `named-release/dogwood.1`. If you try new installation and get error like this

	TASK: [edx_notes_api | install application requirements] ********************** 
	ok: [localhost] => (item=base.txt)
	failed: [localhost] => (item=optional.txt) => {"cmd": "/edx/app/edx_notes_api/venvs/	edx_notes_api/bin/pip install --exists-action w -r /edx/app/edx_notes_api/edx_notes_api/	requirements/optional.txt", "failed": true, "item": "optional.txt"}
	msg: 
	:stderr: Could not open requirements file: [Errno 2] No such file or directory: '/edx/app/	edx_notes_api/edx_notes_api/requirements/optional.txt'
	You are using pip version 7.1.2, however version 8.1.0 is available.
	You should consider upgrading via the 'pip install --upgrade pip' command. 
	
It means the `option.txt` file has been removed on top configuration app but not updated on `edx-notes-api` repository so the problem is that `edx-notes-api` is not versioned to dogwood, so we are getting master of `edx-notes-api `rather than the version of the code that worked with Dogwood.

To fix this issue is simple by using cherry-pick from git to this commit `https://github.com/edx/configuration/commit/de9dab63381ae036304bb25c04a65f3a689902eb`. Cherry-pick is designed to apply some commit from one branch into another branch. It can be done if you eg. made a mistake and committed a change into wrong branch, but do not want to merge the whole branch. You can just eg. revert the commit and cherry-pick it on another branch.

Go to `/var/tmp/configuration` and make sure you are working on dogwood.1 branch then run command

	git cherry-pick de9dab6

or if you use automatic installation using sandbox.sh download the file first by using wget and add `git cherry-pick` under `git checkout $CONFIG_VER` line, the code will look like this.

	cd /var/tmp
	git clone https://github.com/edx/configuration
	cd configuration
	git checkout $CONFIG_VER
	git cherry-pick de9dab6


Run your installation again, Done.