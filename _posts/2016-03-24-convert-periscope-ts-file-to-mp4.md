---
title: Convert Periscope TS file to MP4
author: ariestiyansyah
layout: post
categories:
  - hacking
tags:
- Periscope
- TS
- Mp4
- Youtube
description: Convert TS file to MP4 before uploading to Yotube
---

This article is based on my experience using periscope and upload the video to youtube. Basically you can save recorded periscope file to our phone storage by enable `Autosave broadcast` in periscope settings, but in this case i forgot to toggle this feature so I need to download the periscope steam manually.

There's web services that allow us to download video from periscope (google it), the problem is the file we donwload will be .TS file which TS is  stands for Transport Stream. TS files can also store audio and data information. TS files are specified for MPEG-2 part 1 systems, which compresses the video data. TS files hold multiple pieces of data in a container-format.

I need mp4 file to uploaded to youtube so we need ffmpeg application to convert the TS file.

Start installing ffmpeg in your mac by running brew command

	brew install ffmpeg

Now, let's action! run this command.

	ffmpeg -i input.ts -vcodec copy -vcodec copy output.mp4
	
done, your video is available in mp4 format now.

Cheers!

This is the video that I use:

<amp-youtube data-videoid="La6OjHdRgOE" layout="responsive" width="480" height="270"></amp-youtube>