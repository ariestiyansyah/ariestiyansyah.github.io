---
title:    Lowercase or uppercase file in fedora
author:   ariestiyansyah
description: Change filename to lowercase or uppercase in fedora
tags:
    - fedora
    - lowercase
    - terminal
    - bash
categories:
    - Fedora
    - Code
permalink: /lowercase-or-uppercase-file-in-fedora
layout: post
---

This is the simple code using bash to change uppercase to lowercase easily in
Fedora, simply add this function to .bashrc 

{% highlight bash %}
lower() {
  for file ; do
    filename=${file##*/}
    case "$filename" in
    */* ) dirname==${file%/*} ;;
      * ) dirname=.;;
    esac
    nf=$(echo $filename | tr A-Z a-z)
    newname="${dirname}/${nf}"
    if [[ "$nf" != "$filename" ]]; then
      mv "$file" "$newname"
      echo "lowercase: $file --> $newname"
    else
      echo "lowercase: $file not changed."
    fi
  done
}
{% endhighlight %}

done, now try run command `lower $yourfilename` in console.

for vice-versa (lower to uppercase) just change the value `A-Z a-z` to `a-z A-Z`

{% highlight bash %}
upper() {
  for file ; do
    filename=${file##*/}
    case "$filename" in
    */* ) dirname==${file%/*} ;;
      * ) dirname=.;;
    esac
    nf=$(echo $filename | tr a-z A-Z)
    newname="${dirname}/${nf}"
    if [[ "$nf" != "$filename" ]]; then
      mv "$file" "$newname"
      echo "uppercase: $file --> $newname"
    else
      echo "uppercase: $file not changed."
    fi
  done
}
{% endhighlight %}

now we can use `upper $filename` command to change the file from lowercase to uppercase
