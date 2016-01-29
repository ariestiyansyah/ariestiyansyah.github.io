---
title: EBS Snapshot Automatic Backup
author: ariestiyansyah
layout: post
thumbnail: /images/logo-edx.png
categories:
  - AWS
  - Code
tags:
- aws
- code
-  EBS
- EC2
- Backup
description: Automatic backup of EBS 
---

Remote EBS Snapshot Automatic Backup 

```
#!/bin/bash

ACTION=$1
AGE=$2

if [ -z $ACTION ];
then
    echo "Usage $1: Define ACTION of backup or delete"
    exit 1
fi 

if [ "$ACTION" = "delete" ] && [ -z $AGE ];
then
    echo "Please enter the age of backups you would like to delete"
    exit 1
fi

function backup_ebs () {
   for volume in $(aws ec2 describe-volumes | jq .Volumes[].VolumeId | sed 's/\"//g')
   do 
       echo Creating snapshot for $volume $(aws ec2 create-snapshot --volume-id $volume --description "backup-script")
   done
}

function delete_snapshots () {
    for snapshot in $(aws ec2 describe-snapshots --filters Name=description,Values=backup-script | jq .Snapshots[].SnapshotId | sed 's/\"//g')
    do
        SNAPSHOTDATE=$(aws ec2 describe-snapshots --filters Name=snapshot,Values=$snapshot | jq .Snapshots[].StartTime | cut -d T -f1 | sed 's/\"//g')
        STARTDATE=$(date +%s)
        ENDDATE=$(date -d $SNAPSHOTDATE +%s)
        INTERVAL=$[ (STARTDATE - ENDDATE) / (60*60*24) ]
        if (( $INTERVAL >= $AGE ));
        then
            aws ec2 delete-snapshot --snapshot-id $snapshot
        fi
    done
}

case $ACTION in 
    "backup")
        backup_ebs
        ;;
    "delete")
        delete_snapshots
        ;;
esac
```