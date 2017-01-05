---
layout: default
title: Archive
permalink: /archive/
tags: [Categories]
description: "An archive of posts sorted by categories."
---

<ul class="posts">
{% for post in site.posts %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
</div>
