---
title: Atom Package for Fedora 32-bit
author: ariestiyansyah
description: This simple step to create atom package for fedora 32bit
layout: post
permalink: /atom-package-for-fedora-32-bit
categories:
 - fedora
 - code
tags:
 - fedora
 - atom editor
 - 32bit
 - code
---

Today I do some research about atom in Fedora 32-bit, as we know the atom editor
for linux is only available in 64-bit architecture, but the atom editor team provide step how to compile
the atom  editor in github (yeah sounds good).

- [Atom build instructions in linux](https://github.com/atom/atom/blob/master/docs/build-instructions/linux.md)
- [Another Way to install atom](https://gist.github.com/mojavelinux/225d01e621f467db1c75)

And Here is my way and what I've done when tried to create RPM for atom editor.

# Install Development tools, Fedora Packager and compiler requirement for development

Run this command
<pre>
$ sudo yum -y install @development-tools
$ sudo yum -y install fedora-packager
$ sudo yum -y install make gcc gcc-c++ glibc-devel libgnome-keyring-devel
</pre>

don't forget to add current user to group `mock` by running usermod command
<pre>
$ sudo usermod -a -G mock yourusername
</pre>

# Install Node and Node Package Manager (NPM)

Simply run the 
<pre>
$ sudo yum -y install nodejs npm
</pre>

__UPDATE__ :
In my system I can't run any npm package using sudo, so we need to create the
link, here is the command
<pre>
$ sudo ln -s /usr/local/bin/node /usr/bin/node
$ sudo ln -s /usr/local/lib/node /usr/lib/node
$ sudo ln -s /usr/local/bin/npm /usr/bin/npm
</pre>

# Clone the atom  repository on github
<pre>
$ git clone git@github.com:atom/atom.git
$ cd atom
</pre>

It will clone up to 100MB total file from github.

After done the clone remove the gyp cause it'll conflict with node-gyp , don't
worry you can instal it later ;).

# Run the build

Now you can build the atom package by running `script/rpmbuild` command in atom
root directory, the process will create the directory `/tmp/atom-build` contain
folder called `Atom`,`icons` and `rpm` and also will create `atom.desktop` and
`atom.spec` file.

The installation done and RPM package has been creaed, it stored at
`/tmp/atom-build/rpm` folder, you can install the package now.

We have another step to install atom without creating the rpm package by runing this command from the root directory of atom
<pre>
$ script/build
$ script/grunt install
</pre>

If you don't neet waste your time to compile the app you can download the atom
rpm for fedora 21 (32-bit)
[here](https://github.com/ariestiyansyah/atom/raw/master/rpms/atom-0.182.0-0.1.fc21.i686.rpm).

Happy coding :D
