---
id: 326
title: Fixing Slow Touchpad Speed on Fedora 20
author: ariestiyansyah
layout: post
guid: http://oonlab.com/?p=326
permalink: /fixing-slow-touchpad-speed-on-fedora-20
authorsure_include_css:
  - 
ssb_post_sites:
  - 'a:6:{s:2:"fb";i:1;s:5:"gplus";i:1;s:7:"twitter";i:2;s:8:"linkedin";i:1;s:9:"pineterst";N;s:6:"reddit";i:1;}'
categories:
  - Code
  - Mozilla
tags:
  - ASK Fedora
  - Fedora
  - idea
  - Rizky Ariestiyansyah
  - SynClient
---
Last night I was updated my fedora 20 on my Dell Vostro 1014 system, there&#8217;s something not right after rebooting my laptop, touchpad on my system run very-very slow after the update (*FYI : It happen on update 66 of Fedora 20*). When I use external USB optical  mouse (Lenovo) it running fine, I was wondering what should I do because the touchpad is really important for me to work, it mean i don&#8217;t like bring external USB mouse wherever I go&#8230; :sick:

I also found this *<a title="bug 1114130" href="https://bugzilla.redhat.com/show_bug.cgi?id=1114130" target="_blank">bug 1114130</a>* on redhat bugzilla, oh damn is bad news hahaha. But I&#8217;ve good news to fix this issue, we will using *synclient* to config our touchpad (<a href="https://ask.fedoraproject.org/en/question/49396/how-do-i-now-change-the-touchpad-pointer-speed/" target="_blank">read this) </a>

Let me explain how easy it is, Ok open your console to use synclient to see our touchpad configuration

<pre class="lang:default decode:true" title="synclient list">[root@oonlab ~]# synclient -l
Parameter settings:
    LeftEdge                = 153
    RightEdge               = 870
    TopEdge                 = 115
    BottomEdge              = 652
    FingerLow               = 12
    FingerHigh              = 15
    MaxTapTime              = 180
    MaxTapMove              = 56
    MaxDoubleTapTime        = 180
    SingleTapTimeout        = 180
    ClickTime               = 100
    EmulateMidButtonTime    = 75
    EmulateTwoFingerMinZ    = 141
    EmulateTwoFingerMinW    = 7
    VertScrollDelta         = -25
    HorizScrollDelta        = -25
    VertEdgeScroll          = 1
    HorizEdgeScroll         = 1
    CornerCoasting          = 0
    VertTwoFingerScroll     = 0
    HorizTwoFingerScroll    = 0
    MinSpeed                = 1
    MaxSpeed                = 1.75
    AccelFactor             = 0.156495
    TouchpadOff             = 2
    LockedDrags             = 0
    LockedDragTimeout       = 5000
    RTCornerButton          = 0
    RBCornerButton          = 0
    LTCornerButton          = 0
    LBCornerButton          = 0
    TapButton1              = 1
    TapButton2              = 3
    TapButton3              = 2
    ClickFinger1            = 1
    ClickFinger2            = 1
    ClickFinger3            = 1
    CircularScrolling       = 0
    CircScrollDelta         = 0.1
    CircScrollTrigger       = 0
    CircularPad             = 0
    PalmDetect              = 0
    PalmMinWidth            = 10
    PalmMinZ                = 100
    CoastingSpeed           = 20
    CoastingFriction        = 50
    PressureMotionMinZ      = 15
    PressureMotionMaxZ      = 80
    PressureMotionMinFactor = 1
    PressureMotionMaxFactor = 1
    GrabEventDevice         = 1
    TapAndDragGesture       = 1
    AreaLeftEdge            = 0
    AreaRightEdge           = 0
    AreaTopEdge             = 0
    AreaBottomEdge          = 0
    HorizHysteresis         = 6
    VertHysteresis          = 6
    ClickPad                = 0
</pre>

OK look at the word &#8220;*MinSpeed=1*&#8220;, this is the setting that requires a change. We ned to change the speed to 6,7,8 or whatever you need, remember the speed of your toucpad depends on your setup, here is the step how to change the configuration.

<pre class="lang:default decode:true">[root@oonlab ~]# synclient variable=value 

ex : 

[root@oonlab ~]# synclient MinSpeed=7</pre>

If the configuration always changes after reboot you need to add some configuration in your Xorg configuration, enter the following code in a new file named &#8220;*01-synaptics.conf*&#8221; in* /etc/X11/xorg.conf.d/* folder

<pre class="lang:default decode:true">Section "InputClass"
  Identifier "touchpad catchall"
  Driver "synaptics"
  MatchIsTouchpad "on"
  MatchDevicePath "/dev/input/event*"

  Option "MinSpeed" "7"

EndSection</pre>

All Done <img src="https://oonlab.com/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" /> . see ya next post

**DISLAIMER** : go to <a href="https://ask.fedoraproject.org" target="_blank">ASK FEDORA</a> for more Q/A

#### <span style="color: #ff0000;"><strong><span style="text-decoration: underline;">[UPDATE]</span>  :</strong> New update from FEDORA fixed this bug, just enter the &#8220;yum update&#8221; command in your console</span>