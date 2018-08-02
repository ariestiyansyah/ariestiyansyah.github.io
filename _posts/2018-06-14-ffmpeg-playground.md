---
title: "Convert list to markdown link"
author: ariestiyansyah
layout: post
categories:
- code
tags:
- golang
- journey
- development
---

This is snippet to convert multiple list to markdown link using golang. In this example we have file called `file.txt` with the following content

```
- valutac.com
- oonlab.com
- mozilla.org
- google.com
- microsoft.com
```

We want to convert all the list to markdown link and put the result into `newfile.txt` file, the content should be like this:

```
- [oonlab.com](http://oonlab.com)
- [valutac.com](http://valutac.com)
- [mozilla.org](http://mozilla.org)
- [google.com](http://google.com)
- [microsoft.com](http://microsoft.com)
```

Here's the snippet using go with io/ioutil, fmt and string lib.

```go
package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func main() {
	b, _ := ioutil.ReadFile("file.txt")
	split := strings.Split(string(b), "\n")
	var rows string
	for _, row := range split {
		if len(row) < 3 {
			continue
		}
		s := row[2:len(row)]
		rows += fmt.Sprintf("- [%s](http://%s)\n", s, s)
	}
	ioutil.WriteFile("newfile,txt", []byte(rows), 0600)
}
```

Want More? follow our [github](https://github.com/valutac)
