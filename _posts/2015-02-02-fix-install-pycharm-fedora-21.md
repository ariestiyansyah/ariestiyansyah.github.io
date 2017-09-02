---
id: 442
title: Fix Install PyCharm on Fedora 21
author: ariestiyansyah
layout: post
guid: http://oonlab.com/?p=442
permalink: /fix-install-pycharm-fedora-21
categories:
  - Code
  - Python
---
Hey there, i&#8217;ve found the error when tried to install PyCharm Profesional by Jetbrains on my Fedora 21, when we run the pycharm.sh in our terminal we&#8217;ll get the error like this :

<pre class="lang:sh decode:true ">OpenJDK Server VM warning: ignoring option MaxPermSize=250m; support was removed in 8.0
[   1653]  ERROR - nse.impl.GeneralLicenseManager - No valid license found 
java.lang.Throwable
	at com.intellij.openapi.diagnostic.Logger.error(Logger.java:115)
	at com.intellij.ide.a.g.bb.a(bb.java:107)
	at com.intellij.idea.MainImpl$1.start(MainImpl.java:47)
	at com.intellij.idea.StartupUtil.prepareAndStart(StartupUtil.java:105)
	at com.intellij.idea.MainImpl.start(MainImpl.java:42)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:483)
	at com.intellij.ide.plugins.PluginManager$2.run(PluginManager.java:91)
	at java.lang.Thread.run(Thread.java:745)
[   1674]  ERROR - nse.impl.GeneralLicenseManager - PyCharm 4.0.4  Build #PY-139.1001 
[   1675]  ERROR - nse.impl.GeneralLicenseManager - JDK: 1.8.0_31 
[   1676]  ERROR - nse.impl.GeneralLicenseManager - VM: OpenJDK Server VM 
[   1676]  ERROR - nse.impl.GeneralLicenseManager - Vendor: Oracle Corporation 
[   1677]  ERROR - nse.impl.GeneralLicenseManager - OS: Linux 
</pre>

To fix this problem just install the OpenJDK 1.8 on our Fedora 21 by runnign this command

<pre class="lang:default decode:true ">$ sudo dnf install java-1.8.0-openjdk</pre>

Run the pycharm.sh again  and you&#8217;ll see the splash screen of the pycharm.

&nbsp;

[<img class="aligncenter size-large wp-image-443" src="http://oonlab.com/wp-content/uploads/2015/02/Screenshot-from-2015-02-02-085746-600x337.png" alt="Screenshot from 2015-02-02 08:57:46" width="600" height="337" />][1]

See ya!

 [1]: http://oonlab.com/wp-content/uploads/2015/02/Screenshot-from-2015-02-02-085746.png
