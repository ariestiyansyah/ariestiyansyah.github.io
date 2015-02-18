---
title:    Lowercase file in fedora
author:   ariestiyansyah
description: Change filename to lowercase in fedora
tags:
    - fedora
    - lowercase
    - terminal
    - bash
categories:
    - Fedora
    - Code
permalink: /lowercase-file-in-fedora.onto
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
