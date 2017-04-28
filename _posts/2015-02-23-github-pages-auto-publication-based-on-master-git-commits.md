---
title: Github Pages Auto Publication Based on Master Git Commits
layout: post
description: Github Pages Auto Publication Based on Master Git Commits
categories:
- code
- mozilla
tags:
- mozilla
- code
author: ariestiyansyah
permalink: /github-pages-auto-publication-based-on-master-git-commits
---

A simple configuration to auto publish the git commits on master to
gh-pages,just add few line code (git command) in `.git/config` file. Here is
the code to mirrored the master branch to gh-pages 

<pre>
[remote "origin"]
   	url = git@github.com:ariestiyansyah/naringu.git
   	fetch = +refs/heads/*:refs/remotes/origin/*
   	push = +refs/heads/master:refs/heads/gh-pages
   	push = +refs/heads/master:refs/heads/master
</pre>

simple ;) let's code
