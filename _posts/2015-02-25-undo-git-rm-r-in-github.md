---
title: Undo git rm -r command in github
layout: post
description: Step by step to undo git rm -r in github repo
categories:
- code
- mozilla
tags:
- mozilla
- code
- github
author: ariestiyansyah
permalink: /undo-git-rm-r-command-in-github
---
Well, when I tried to delete remote folder on my github repository the command
that I used 100% is wrong, I am using `git rm -r folder/` command ;( it also
delete the folder in local repo.

Here is the trick to undo and correct `git rm` command

<pre>
$ git reset -- folder/
$ git checkout -- folder/
</pre>

The correct `git rm` is ;

<pre>
$ git rm -r --cached folder/
</pre>

simple ;) let's code.

Please note : This post based on my experience :D
