---
id: 442
title: Create RPM Package for Nitrogen
author: ariestiyansyah
layout: post
permalink: /create-rpm-package-for-nitrogen
categories:
  - Code
  - Fedora
tags:
- nitrogen
- rpms
description: Creae RPM Package for Nitrogen
---


When I am off for work I love to read my weekly news email because there are more great tools I can find and explore. Today I got an email from go weekly news, inisde of the news there is tools make me interested, it's called "nitrogen" you can check out the [github project](https://github.com/lucachr/nitrogen)  for this tools (it's simple bash script).

Here's my simple stuff with this tools, I am [creating RPM package](https://fedoraproject.org/wiki/How_to_create_an_RPM_package#Spec_file_pieces_explained)  for nitrogen project :D hehehe cause i love RPM and I love fedora berrrrroooo.

I'll not tell you how to set the Fedora-Packager and development tools, google it :P. 

Download file from 

	https://github.com/lucachr/nitrogen/archive/v1.0.0.zip
Extract the file and rename the folder to nitrogen-1.0.0 after that compress the file using tar by running this command.

	$ tar -cvzf nitrogen-1.0.0.tar.gz nitrogen-1.0.0 
move the file to rpmbuild/SOURCES directory.

Create file called nitrogen.spec in rpmbuild/SPECS directory and insert the code below

	%define __debug_package %{nil}
	Name:           nitrogen
	Version:        1.0.0
	Release:        1%{?dist}
	Summary:        Depedency manager for Go 
	Group:		Applications/Internet
	License:        MIT License
	URL:            https://github.com/lucachr/nitrogen
	Source0:        nitrogen-%{version}.tar.gz
	BuildArch:	noarch
	Requires:	bash
	BuildRoot:	%{tmppath}/%{name}-root
	  
	
	%description
	A simple dependency manager for Go
	
	%prep
	%setup -q
	
	
	%build
	
	
	%install
	rm -rf ${RPM_BUILD_ROOT}
	mkdir -p ${RPM_BUILD_ROOT}/usr/bin
	install -m 755 nitrogen ${RPM_BUILD_ROOT}%{_bindir}
	
	%files
	%attr(755,root,root) %{_bindir}/nitrogen
	
	%clean
	rm -rf ${RPM_BUILD_ROOT}
	
	
	%changelog
	* Thu Feb  5 2015 Rizky Ariestiyansyah
	- 

Save this spec on rpmbuild/SPECS folder and run this command 

	$ rpmbuild -ba nitrogen.spec

Done, you'll get your the RPMs on the rpmbuild/RPMS directory. Try install using this command 

	$ sudo rpm -Uvh <RPM file location>

Terret, finsih :P
