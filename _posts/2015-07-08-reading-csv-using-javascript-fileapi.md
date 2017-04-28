---
title: Read CSV Using Javascript FileAPI
author: ariestiyansyah
layout: post
permalink: /reading-csv-using-javascript-fileapi
categories:
  - Mozilla
  - Code
tags:
- mozilla
- code
- csv
description: Sample code demonstrate how fileapi work
---
This post explain how to use Javascript FileAPI to read .csv file, first create the file handler

    function handleFiles(files) {
    	if (window.FileReader) {
    		getAsText(files[0]);
    	} else {
    		alert('Browser not supported')
    	}
    }

    function getAsText(fileToRead) {
    	var reader = new FileReader();
    	reader.onload = loadHandler;
    	reader.onerror = errorHandler;
    	reader.readAsText(fileToRead);
    }

    function loadHandler(event) {
    	var csv = event.target.result;
    	processData(csv);
    }


then create function called processData() to process the file

    function processData(csv) {
	var allTextLines = csv.split(/\r\n|\n/);
	var lines = [];
	while (allTextLines.length) {
		lines.push(allTextLines.shift().split(','));
	}
	console.log(lines);
	drawOutput(lines);
	}

create errorHandler() to show an error when file can't be read

    function errorHandler(evt) {
    	if(evt.target.error.name == "NotReadableError") {
    		alert("Can't read file !");
    	}
    }

To show the result in page create function drawOutpu() which generate .csv table and set getElementByID("result") so we can call using id in HTML

    function drawOutput(lines){
    	document.getElementById("result").innerHTML = "";
    	var table = document.createElement("table");
    	for (var i = 0; i < lines.length; i++) {
    		var row = table.insertRow(-1);
    		for (var j = 0; j < lines[i].length; j++) {
    			var firstNameCell = row.insertCell(-1);
    			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
    		}
    	}
    	document.getElementById("result").appendChild(table);
    }
In this sample I use [MaterializeCSS](http://materializecss.com) for User Interface.

The preview of this code can be check [here](http://oonlab.com/CSV-reader) and source code is on [github](http://github.com/ariestiyansyah/CSV-Reader)

Thanks
