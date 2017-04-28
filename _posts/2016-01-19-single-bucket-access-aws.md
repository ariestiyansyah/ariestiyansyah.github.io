---
title: Single Bucket Access Amazon Web Services
author: ariestiyansyah
layout: post
thumbnail: /images/logo-edx.png
categories:
  - AWS
  - Code
tags:
- aws
- code
-  s3
- bucket
- policy
description: Policy for single access AWS
---

Single bucket access policy for Amazon Web Services S3

    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "s3:ListAllMyBuckets",
                "Resource": "arn:aws:s3:::*"
            },
            {
                "Effect": "Allow",
                "Action": [
                    "s3:ListBucket",
                    "s3:GetBucketLocation"
                ],
                "Resource": [
                    "arn:aws:s3:::bucketname"
                ]
            },
            {
                "Effect": "Allow",
                "Action": [
                    "s3:PutObject",
                    "s3:GetObject",
                    "s3:DeleteObject"
                ],
                "Resource": [
                    "arn:aws:s3:::bucketname/*"
                ]
            }
        ]
    }
    
UPDATE:

New Policy:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1454315768000",
            "Effect": "Allow",
            "Action": [
                "s3:*"
            ],
            "Resource": [
                "arn:aws:s3:::indonesiax/*"
            ]
        }
    ]
}
```