---
author: ariestiyansyah
layout: post
permalink: /welcome-fedora-22
categories:
  - Fedora
tags:
- Fedora
- Linux
- Development
description: Fedora 22 released
---

![]({{site.baseurl}}images/F22-editions.png)

Fedora Community are proud to announce the official release of Fedora 22, the
community-driven and community-built operating system now available in Cloud,
Server, and Workstation editions.

## Highlights in the Fedora 22 release

Every Fedora release has its own character. If this release had a human
analogue, it’d be Fedora 21 after it’d been to college, landed a good job, and
kept its New Year’s Resolution to go to the gym on a regular basis. What we’re
saying is that Fedora 22 has built on the foundation we laid with Fedora 21 and
the work to create distinct editions of Fedora focused on the desktop, server,
and cloud (respectively). It’s not radically different, but there are a fair
amount of new features coupled with features we’ve already introduced but have
improved for Fedora 22.

### Fedora Cloud


* Updated [Docker Images](https://getfedora.org/en/cloud/download/docker.html) – The Fedora 22 release includes updated Docker
images that you can use as the base of your containerized applications
* [Vagrant Boxes](https://getfedora.org/en/cloud/download/index.html#vagrant) – One of the oft-requested features for Fedora is an
“official” Vagrant box that developers can use to spin up images using the
popular Vagrant tool for building development environments. With the Fedora 22
release we now offer Vagrant Boxes for libvirt and VirtualBox, so developers on
Linux, Mac OS X, and Windows can spin up Fedora-based development environments
with ease. Users can choose a Vagrant box for Fedora 22 Atomic Host and Fedora
22 Cloud base edition.
* Atomic Improvements – Fedora 22 Atomic Host includes a number of
interesting improvements, including the Atomic command, updated Docker,
Kubernetes, Flannel, and rpm-ostree packages.
* Dockerfiles – Fedora 22 also includes a [fedora-dockerfiles
  package](https://apps.fedoraproject.org/packages/fedora-dockerfiles) (and
up-to-date git repository) for building applications with the base Fedora 22
Dockerfile and additional packages.

###  Fedora Server


* [Database Server
  Role](https://fedoraproject.org/wiki/Changes/DatabaseServerRole). The Fedora Server edition focuses on easy of
different server roles. Fedora 21 debuted with an Domain Controller Role
featuring FreeIPA. For this release, we’ve added a Database Server role, built
around PostgreSQL.
* Default to [XFS
  filesystem](https://fedoraproject.org/wiki/Server/Technical_Specification#File_system). The default file system type for Fedora Server
installs will be XFS running atop LVM for all partitions except /boot. The
/boot partition will remain a non-LVM, ext4 partition due to technological
limitations of the bootloader.
* [Cockpit](https://fedoraproject.org/wiki/Changes/CockpitManagementConsole) will be compatible between OS releases. Cockpit is a server manager
that makes it easy to administer your GNU/Linux servers via a web browser.
       - Easy to use. Cockpit is perfect for new sysadmins, allowing them to
easily perform simple tasks such as storage administration, inspecting journals
and starting and stopping services.
       - No interference. Jumping between the terminal and the web tool is no
problem. A service started via Cockpit can be stopped via the terminal.
Likewise, if an error occurs in the terminal, it can be seen in the Cockpit
journal interface.
       - Multi-server. You can monitor and administer several servers at the
same time.

### Fedora Workstation


* Better notifications. Thanks both to work done in GNOME 3.16 and other
projects like the Automatic Bug Reporting Tool (ABRT), notifications keep you
better informed, but interfere less with your work. They now appear anchored to
the center of the top bar, and no longer cover up the bottom of the screen
where you are often reading a terminal or browser. An unobtrusive marker
appears in the calendar to let you know you have unread notifications. If ABRT
detects a serious bug, a friendly notification appears and allows you to report
the bug information, but doesn’t overload you with details. And if you’re a
serious Terminal user, longer background jobs now notify you when they’re done,
so you can get on with other work and pick up the results when you’re ready.
* Refined themes. The GNOME Shell and other themes and design are refined and
improved. Now you can more easily identify information on the screen, adjust
window size and placement, and navigate your files and folders. Improved
bridging between desktop environment themes allows apps from other environments
like KDE to look and feel more like native apps as they’re updated to take
advantage of this feature. Standard scrollbars have been replaced by a minimal,
overlaid indicator, while a scrollbar trough is shown when needed. This create
a cleaner, less distracting view which helps you focus on window content. These
“overlay scrollbars” are also better suited to mouse scroll wheels and touchpad
scrolling.
* Application improvements
       - Software. The Software app has more and better data than ever before,
and makes it easy for you to find a wide variety of useful free software. It
also makes keeping your system up to date a snap. The Software app also can
install all sorts of extras such as fonts or media helpers.
       - Files. The updated layout in Files gives a better view of your files
and folders, and a new view popover makes it easy to change the zoom level and
sort order from a single place. You can also now move files and folders to the
trash intuitively using the Delete key, rather than the Ctrl+Delete keyboard
combination.
       - Image Viewer. The Image Viewer has been redesigned to reduce the amount
of window chrome and give more space to images.
        Boxes. The user interface for Boxes, the application for virtual and
remote machines, has a large number of improvements, including new preferences
dialogs, a revamped box creation assistant, a feature to send keyboard
shortcuts to a box, and display scaling by default.
       - Vagrant. Developers will appreciate the addition of software
development environment software Vagrant into Fedora — it’ll work using our
included virtualization technology, with no need to install third-party
virtualization (like VirtualBox). Use this to work on top of the Cloud images
mentioned above, or launch your own Vagrant boxes.

Find out more about the new release on [Fedora Official
Announcement](http://fedoramagazine.org/fedora-22-released/)

Let's Download :D
