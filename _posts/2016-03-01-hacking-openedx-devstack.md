---
title: Hacking Open edX Devstack
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
description: Research Open edX Devstack
---

Required tools to run Open edX Devstack:

- [Vagrant](https://www.vagrantup.com/downloads.html)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- NFS Client, if not Devstack will uses VirtualBox Guest Editions.

Preparing:

Download and Install Required tools before.

Create working directory

```
mkdir devstack
cd devstack
```

Download devstack

```
curl -L https://raw.github.com/edx/configuration/master/vagrant/release/devstack/Vagrantfile > Vagrantfile
```
sets value of OPENEDX_RELEASE environment

```
export OPENEDX_RELEASE="named-release/dogwood"
```

Run instalation

```
vagrant up
```


### Play with Devstack

Login to devstack:

```
vagrant ssh
```

To use devstack and perform any of the tasks described in this section, connect as the user edxapp.

```
sudo su edxapp
```


### Run the LMS on Devstack

To run the LMS on devstack, follow these steps.

1. Login to Devstack machine

        vagrant ssh
        sudo su edxapp

2. Run the following command
	
        paver devstack lms

    Or, to start the LMS without updating requirements and compiling assets, use
   the `fast` option.
   
        paver devstack lms --fast


    The LMS starts.

3. Open the LMS in your browser at ``http://localhost:8000/``.

    Vagrant forwards port 8000 to the LMS server running in the virtual machine.


### Run Studio on Devstack


To run Studio on devstack, follow these steps.

1. Login to Devstack machine

        vagrant ssh
        sudo su edxapp

2. Run the following command.

        paver devstack studio

    Or, to start Studio without updating requirements and compiling assets, use
   the ``fast`` option.

        paver devstack studio --fast


    Studio starts.

3. Open Studio in your browser at `http://localhost:8001/`.

    Vagrant forwards port 8001 to the Studio server running in the virtual
   machine.


### View Available Studio Commands


To view all available commands for Studio, enter the following command.

```
./manage.py cms -h --settings=devstack
```


### Run Discussion Forums on Devstack


To run discussion forums on devstack, follow these steps.

1. Login to Devstack machine

        vagrant ssh
        sudo su edxapp


2. Switch to the discussion forum account by entering the following command.

        sudo su forum


3. Update Ruby requirements.

        bundle install

4. Start the discussion forums server.

        ruby app.rb -p 18080


    The discussions forum server starts. You can access the discussion forums API
at `http://localhost:18080/`.


