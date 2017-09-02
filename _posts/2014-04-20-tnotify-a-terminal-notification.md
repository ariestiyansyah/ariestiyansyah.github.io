---
id: 267
title: Tnotify, a Terminal Notification
author: ariestiyansyah
layout: post
guid: http://oonlab.com/?p=267
permalink: /tnotify-a-terminal-notification
authorsure_include_css:
  - 
categories:
  - Ide
  - Mozilla
tags:
  - Mac OSX
  - notification
  - terminal
  - tnotify
---
Hello guys, this is short post to tell you about tnotify the easiest, most attractive way to fire off notifications from your terminal. This application is available on ruby gem repository, you know why I write about tnotify? because I like the notification on any apps like notification on Android, Firefox OS, Firefox, Chrome. I don&#8217;t know why? but I love to see a notification it&#8217;s really pretty neat.

Ok let&#8217;s try this gem, first you need to install this gem by running this command

<pre class="lang:bash decode:true">$ gem install tnotify</pre>

Ok, how to use it? simple just run tnotify after another command to send a notification when the command is finished,

<pre class="lang:bash decode:true">$ command; tnotify</pre>

for example

<pre class="lang:bash decode:true">$ ls; tnotify</pre>

The notification windows will appear on top-right of our desktop like this

[<img class="aligncenter size-full wp-image-268" alt="Screenshot from 2014-04-20 10:36:31" src="http://oonlab.com/wp-content/uploads/2014/04/Screenshot-from-2014-04-20-103631.png" width="304" height="60" />][1]

Ok just it <img src="https://oonlab.com/wp-includes/images/smilies/icon_biggrin.gif" alt=":D" class="wp-smiley" /> , simple and let&#8217;s try.

<span style="text-decoration: underline;"><strong>DISCLAIMER</strong></span> : this tnotify gem need terminal-notifier, which terminal-notifier is only supported on Mac OS X 10.8, or higher.

 [1]: http://oonlab.com/wp-content/uploads/2014/04/Screenshot-from-2014-04-20-103631.png