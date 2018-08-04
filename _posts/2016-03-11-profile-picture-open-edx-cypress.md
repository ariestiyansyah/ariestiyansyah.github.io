---
title: Profile image in navigation of Open edX
author: ariestiyansyah
layout: post
thumbnail: /images/logo-edx.png
categories:
  - edX
  - Code
tags:
- edX
- code
- Django
- Devstack
description: Research on Open edX Cypress
image: /images/afterx.png
---

Before:

![](http://oonlab.com/images/afterx.png)

So you want to add profile image in navigation with Cypress installation? here's the simple step.

Go to `/edx/app/edxapp/edx-platform/lms/templates/`

Open `navigation.html` using vim in terminal

Add code below in your header.

```
from openedx.core.djangoapps.user_api.accounts.image_helpers import get_profile_image_urls_for_user
```

The code will look like this

```
from microsite_configuration import microsite
from microsite_configuration.templatetags.microsite import platform_name
from ccx.overrides import get_current_ccx
from openedx.core.djangoapps.user_api.accounts.image_helpers import get_profile_image_urls_for_user
```

Find the `<ol class="user">` section and add code below after `<li class="primary">`

```
<% 
username = user.username
profile_image_url = get_profile_image_urls_for_user(user)['medium']
%>
<img style="max-width:35px;border-radius:5px;" src="${profile_image_url}" alt="${_('Profile image for {username}').format(username=username)}">
```

If you want to enable link in profile image that will direct to learners profile page insert this code

```
<a style="padding:0px;" href="${reverse('learner_profile', kwargs={'username': user.username})}"></a>
```	
 
So the final code will be like this


```
<% 
username = user.username
profile_image_url = get_profile_image_urls_for_user(user)['medium']
%>
<a style="padding:0px;" href="${reverse('learner_profile', kwargs={'username': user.username})}"><img style="max-width:35px;border-radius:5px;" src="${profile_image_url}" alt="${_('Profile image for {username}').format(username=username)}"></a>
```

Result:

![](http://oonlab.com/images/beforex.png)


Done.