---
id: 18
title: Build simple Steganography machine
author: ariestiyansyah
layout: post
guid: http://code-tax.rhcloud.com/?p=18
permalink: /build-simple-steganography-machine
crisp_persona_post_view_count:
  - 2
categories:
  - Code
  - News
tags:
  - javascript
  - steganography
---
Last time i was published my first post about Hello Openshift, and this is my second post. I will try to build a steganography machine using the javascript library named steganography.js.

**What is steganography ?**

Steganography is the art and science of hiding messages or other secret information in a bunch of carrier information.

**Lets BUILD**

<!--more-->

First you need to download the steganography.js <a title="Download" href="https://github.com/petereigenschink/steganography.js/archive/master.zip" target="_blank">here</a> , once you download the file you can exract the file wherever you need and you will see tree directory like this

> - src  
> &#8212;  steganography.js  
> &#8212;  README.md

and the directory we will create is like this

> - index.html  
> &#8211; src/  
> &#8212;&#8212; steganography.js  
> &#8212;&#8212; style.css  
> &#8211; image/  
> &#8212;&#8212; secret.jpg

next is to create the HTML index for the machine, here is the code :

<pre class="lang:default decode:true">&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;link href="src/style.css" rel="stylesheet" type="text/css" /&gt;
    &lt;title&gt;Steganography Machine&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id="wrapper"&gt;
      &lt;div id="tabContainer"&gt;
        &lt;div id="tabs"&gt;
          &lt;ul&gt;
            &lt;li id="tabHeader_1"&gt;~ Steganography Machine ~
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div id="tabscontent"&gt;
          &lt;div id="tabpage_1"&gt;
            &lt;input id="file" type="file" /&gt;&lt;br /&gt;
            &lt;textarea id="text"&gt;
Input your text here...
&lt;/textarea&gt;
            &lt;div&gt;
              &lt;span id="hide"&gt;Hide&lt;/span&gt; &lt;span id=
              "read"&gt;Read&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div id="result"&gt;
            &lt;div id="original"&gt;
              &lt;h2&gt;
                Target Image:
              &lt;/h2&gt;&lt;img id="img" src="image/secret.jpg" /&gt;
            &lt;/div&gt;
            &lt;div id="stego"&gt;
              &lt;h2&gt;
                Encoded Image:
              &lt;/h2&gt;&lt;img id="cover" src="" /&gt;
              &lt;div&gt;Right-click to download&lt;/div&gt;
            &lt;/div&gt;
            &lt;div id="messageArea"&gt;
              &lt;h2&gt;&lt;/br&gt;
                Code:
              &lt;/h2&gt;
              &lt;div id="message"&gt;&lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;center&gt;
      Demo Only
    &lt;/center&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>

next create the cascading style sheet for the machine, i am using CSS prefixer to fix my CSS code cause i think there are some error in my CSS <img src="https://oonlab.com/wp-includes/images/smilies/icon_biggrin.gif" alt=":D" class="wp-smiley" /> .

<pre class="lang:css decode:true">* {
    margin: 0;
    padding: 0
    }

body, html {
    margin: 0;
    padding: 0;
    font-family: Cursive;
    color: #717171
    }

h1 {
    color: black;
    margin-bottom: 10px
    }

#main {
    position: relative;
    width: 940px;
    padding: 20px;
    margin: auto
    }

#result {
    position: relative;
    float: left;
    margin: 32px;
    width: 650px;
    vertical-align: top
    }

.half {
    position: relative;
    display: inline-block;
    width: 49%
    }

#original {
    vertical-align: top
    }

#messageArea {
    width: 100%
    }

#img {
    width: 290px
    }

.btns {
    margin-top: 1px;
    margin-bottom: 10px;
    padding: 0 4px
    }

.btn {
    -moz-box-shadow: inset 0 1px 0 0 #0c92ec;
    -webkit-box-shadow: inset 0 1px 0 0 #0c92ec;
    box-shadow: inset 0 1px 0 0 #0c92ec;
    background: -moz-linear-gradient(#0c92ec, #0c92ec);
    background: -o-linear-gradient(#0c92ec, #0c92ec);
    background: -webkit-linear-gradient(#0c92ec, #0c92ec);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0c92ec), color-stop(1, #0c92ec));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0c92ec, EndColorStr=#0c92ec)";
    background: linear-gradient(#0c92ec, #0c92ec);
    background: -moz-linear-gradient(center top, #0c92ec 5%, #0c92ec 100%);
    background: -o-linear-gradient(center top, #0c92ec 5%, #0c92ec 100%);
    background: -webkit-linear-gradient(center top, #0c92ec 5%, #0c92ec 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0c92ec 5%), color-stop(1, #0c92ec 100%));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0c92ec 5%, EndColorStr=#0c92ec 100%)";
    background: linear-gradient(center top, #0c92ec 5%, #0c92ec 100%);
    background-color: #0c92ec;
    -webkit-border-top-left-radius: 0;
    -moz-border-radius-topleft: 0;
    border-top-left-radius: 0;
    -moz-border-radius-topleft: 0;
    -webkit-border-top-right-radius: 0;
    -moz-border-radius-topright: 0;
    border-top-right-radius: 0;
    -moz-border-radius-topright: 0;
    -webkit-border-bottom-right-radius: 0;
    -moz-border-radius-bottomright: 0;
    border-bottom-right-radius: 0;
    -moz-border-radius-bottomright: 0;
    -webkit-border-bottom-left-radius: 0;
    -moz-border-radius-bottomleft: 0;
    border-bottom-left-radius: 0;
    -moz-border-radius-bottomleft: 0;
    text-indent: 0;
    border: 1px solid #747678;
    display: inline-block;
    color: #f3f3f3;
    font-family: Impact;
    font-size: 19px;
    font-weight: normal;
    font-style: normal;
    height: 31px;
    line-height: 31px;
    width: 88px;
    text-decoration: none;
    text-align: center;
    text-shadow: 1px 1px 0 #0c92ec
    }

.btn:hover {
    background: -moz-linear-gradient(#0c92ec, #0c92ec);
    background: -o-linear-gradient(#0c92ec, #0c92ec);
    background: -webkit-linear-gradient(#0c92ec, #0c92ec);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0c92ec), color-stop(1, #0c92ec));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0c92ec, EndColorStr=#0c92ec)";
    background: linear-gradient(#0c92ec, #0c92ec);
    background: -moz-linear-gradient(center top, #0c92ec 5%, #0c92ec 100%);
    background: -o-linear-gradient(center top, #0c92ec 5%, #0c92ec 100%);
    background: -webkit-linear-gradient(center top, #0c92ec 5%, #0c92ec 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0c92ec 5%), color-stop(1, #0c92ec 100%));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0c92ec 5%, EndColorStr=#0c92ec 100%)";
    background: linear-gradient(center top, #0c92ec 5%, #0c92ec 100%);
    background-color: #0c92ec
    }

.btn:active {
    position: relative;
    top: 1px
    }

#download {
    position: absolute;
    top: 47px;
    left: 4px;
    padding: 10px 5px 5px 3px;
    width: 10px;
    border-top: 1px solid black;
    -moz-border-radius: 0 0 15px 15px;
    -webkit-border-radius: 0 0 15px 15px;
    border-radius: 0 0 15px 15px;
    text-decoration: none
    }

#download:hover {
    width: 70px
    }

#download:hover:after {
    content: "ownload"
    }

.note {
    font-size: 9px;
    text-align: center;
    color: black;
    font-family: Cursive;
    }

.invisible {
    visibility: hidden
    }

.clear {
    clear: both
    }

textarea {
    width: 650px;
    padding: 10px;
    height: 40px;
    resize: none
    }

h2 {
    margin-top: 0
    }

#wrapper {
    width: 720px;
    margin: 40px auto 0
    }

#wrapper h1 {
    color: #FFF;
    text-align: center;
    margin-bottom: 1px
    }

#wrapper a {
    display: block;
    font-size: 1.2em;
    padding-top: 20px;
    color: #FFF;
    text-decoration: none;
    text-align: center
    }

#tabContainer {
    width: 700px;
    padding: 15px;
    background-color: #2e2e2e;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px
    }

#tabs {
    height: 30px;
    overflow: hidden
    }

#tabs &gt; ul {
    font: 1em;
    list-style: none
    }

#tabs &gt; ul &gt; li {
    margin: 0 0 0 0;
    padding: 5px 240px;
    float: center;
    color: #FFF;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    -moz-border-radius-topleft: 4px;
    -moz-border-radius-topright: 4px;
    -moz-border-radius-bottomright: 0;
    -moz-border-radius-bottomleft: 0;
    -webkit-border-top-left-radius: 4px;
    -moz-border-radius-topleft: 4px;
    border-top-left-radius: 4px;
    -webkit-border-top-right-radius: 4px;
    -moz-border-radius-topright: 4px;
    border-top-right-radius: 4px;
    -webkit-border-bottom-right-radius: 0;
    -moz-border-radius-bottomright: 0;
    border-bottom-right-radius: 0;
    -webkit-border-bottom-left-radius: 0;
    -moz-border-radius-bottomleft: 0;
    border-bottom-left-radius: 0;
    background: #C9C9C9;
    /* old browsers */
    background: -moz-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -o-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -webkit-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f24537 0%), color-stop(1, #f24537 100%));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#f24537 0%, EndColorStr=#f24537 100%)";
    background: linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -moz-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -o-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -webkit-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f24537 0%), color-stop(1, #f24537 100%));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#f24537 0%, EndColorStr=#f24537 100%)";
    background: linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -moz-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -o-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -webkit-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f24537 0%), color-stop(1, #f24537 100%));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#f24537 0%, EndColorStr=#f24537 100%)";
    background: linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -moz-linear-gradient(#f24537 0%, #f24537 100%);
    background: -o-linear-gradient(#f24537 0%, #f24537 100%);
    background: -webkit-linear-gradient(#f24537 0%, #f24537 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f24537 0%), color-stop(1, #f24537 100%));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#f24537 0%, EndColorStr=#f24537 100%)";
    background: linear-gradient(#f24537 0%, #f24537 100%);
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#f24537 0%, EndColorStr=#f24537 100%)";
    background: -moz-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -o-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -webkit-linear-gradient(top, #f24537 0%, #f24537 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f24537 0%), color-stop(1, #f24537 100%));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#f24537 0%, EndColorStr=#f24537 100%)";
    background: linear-gradient(top, #f24537 0%, #f24537 100%);
    /* firefox */
    background: -moz-linear-gradient(#0C91EC, #257AB6);
    background: -o-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0C91EC), color-stop(1, #257AB6));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0C91EC, EndColorStr=#257AB6)";
    background: linear-gradient(#0C91EC, #257AB6);
    background: -moz-linear-gradient(#0C91EC, #257AB6);
    background: -o-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0C91EC), color-stop(1, #257AB6));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0C91EC, EndColorStr=#257AB6)";
    background: linear-gradient(#0C91EC, #257AB6);
    background: -moz-linear-gradient(#0C91EC, #257AB6);
    background: -o-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0C91EC), color-stop(1, #257AB6));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0C91EC, EndColorStr=#257AB6)";
    background: linear-gradient(#0C91EC, #257AB6);
    background: -moz-linear-gradient(#0C91EC, #257AB6);
    background: -o-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0C91EC), color-stop(1, #257AB6));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0C91EC, EndColorStr=#257AB6)";
    background: linear-gradient(#0C91EC, #257AB6);
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0C91EC, EndColorStr=#257AB6)";
    background: -moz-linear-gradient(#0C91EC, #257AB6);
    background: -o-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-linear-gradient(#0C91EC, #257AB6);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0C91EC), color-stop(1, #257AB6));
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorStr=#0C91EC, EndColorStr=#257AB6)";
    background: linear-gradient(#0C91EC, #257AB6);
    /* webkit */
    }

#tabs &gt; ul &gt; li:hover {
    background: #FFF;
    /* old browsers */
    background: -moz-linear-gradient(top, #FFF 0%, #F3F3F3 10%, #F3F3F3 50%, #FFF 100%);
    /* firefox */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #F3F3F3), color-stop(10%, #F3F3F3), color-stop(50%, #F3F3F3), color-stop(100%, #F3F3F3));
    /* webkit */
    cursor: pointer;
    color: #f24537
    }

#tabs &gt; ul &gt; li.tabActiveHeader {
    background: #FFF;
    /* old browsers */
    background: -moz-linear-gradient(top, #FFF 0%, #F3F3F3 10%, #F3F3F3 50%, #FFF 100%);
    /* firefox */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #FFF), color-stop(10%, #F3F3F3), color-stop(50%, #F3F3F3), color-stop(100%, #FFF));
    /* webkit */
    cursor: pointer;
    color: #333
    }

#tabscontent {
    -moz-border-radius-topleft: 0;
    -moz-border-radius-topright: 4px;
    -moz-border-radius-bottomright: 4px;
    -moz-border-radius-bottomleft: 4px;
    -webkit-border-top-left-radius: 0;
    -moz-border-radius-topleft: 0;
    border-top-left-radius: 0;
    -webkit-border-top-right-radius: 0;
    -moz-border-radius-topright: 0;
    border-top-right-radius: 0;
    -webkit-border-bottom-right-radius: 4px;
    -moz-border-radius-bottomright: 4px;
    border-bottom-right-radius: 4px;
    -webkit-border-bottom-left-radius: 4px;
    -moz-border-radius-bottomleft: 4px;
    border-bottom-left-radius: 4px;
    padding: 10px 10px 25px;
    background: #FFF;
    /* old browsers */
    background: -moz-linear-gradient(top, #FFF 0%, #FFF 90%, #e4e9ed 100%);
    /* firefox */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #FFF), color-stop(90%, #FFF), color-stop(100%, #e4e9ed));
    /* webkit */
    margin: 0;
    color: #333
    }</pre>

last  add javascript in our index.html, please insert the javscript code below to your index.html

<pre class="lang:js decode:true">function handleFileSelect(evt) {
                        var original = document.getElementById("original"),
                                stego = document.getElementById("stego"),
                                img = document.getElementById("img"),
                                cover = document.getElementById("cover"),
                                message = document.getElementById("message");
                        if(!original || !stego) return;

                        var files = evt.target.files; // FileList object

                        // Loop through the FileList and render image files as thumbnails.
                        for (var i = 0, f; f = files[i]; i++) {

                                // Only process image files.
                                if (!f.type.match('image.*')) {
                                        continue;
                                }

                                var reader = new FileReader();

                                // Closure to capture the file information.
                                reader.onload = (function(theFile) {
                                        return function(e) {
                                                img.src = e.target.result;
                                                img.title = escape(theFile.name);
                                                stego.className = "half invisible";
                                                cover.src = "";
                                                message.innerHTML="";
                                                message.parentNode.className="invisible";
                                                updateCapacity();
                                        };
                                })(f);

                                // Read in the image file as a data URL.
                                reader.readAsDataURL(f);
                        }
                }

                function hide() {
                        var stego = document.getElementById("stego"),
                                img = document.getElementById("img"),
                                cover = document.getElementById("cover"),
                                message = document.getElementById("message"),
                                textarea = document.getElementById("text"),
                                download = document.getElementById("download");
                        if(img && textarea) {
                                cover.src = steg.encode(textarea.value, img, {"width": img.width, "height": img.height});
                                stego.className = "half";
                                message.innerHTML="";
                                message.parentNode.className="invisible";
                                download.href=cover.src.replace("image/png", "image/octet-stream");
                        }
                }

                function read() {
                        var img = document.getElementById("img"),
                                cover = document.getElementById("cover"),
                                message = document.getElementById("message"),
                                textarea = document.getElementById("text");
                        if(img && textarea) {
                                message.innerHTML = steg.decode(img);
                                if(message.innerHTML !== "") {
                                        message.parentNode.className="";
                                        textarea.value = message.innerHTML;
                                        updateCapacity();
                                }
                        }
                }

                function updateCapacity() {
                        var img = document.getElementById('img'),
                                textarea = document.getElementById('text');
                        if(img && text)
                                document.getElementById('capacity').innerHTML='('+textarea.value.length + '/' + steg.getHidingCapacity(img) +' chars)';
                }

                window.onload = function(){
                        document.getElementById('file').addEventListener('change', handleFileSelect, false);
                        document.getElementById('hide').addEventListener('click', hide, false);
                        document.getElementById('read').addEventListener('click', read, false);
                        document.getElementById('text').addEventListener('keyup', updateCapacity, false);
                        hide();
                        updateCapacity();
                };</pre>

here is the result > <a title="Demo" href="https://developer.mozilla.org/en-US/demos/detail/steganography-machine/launch" target="_blank">DEMO</a>