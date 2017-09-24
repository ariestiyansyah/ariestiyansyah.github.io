---
title: "Rust Indonesia Meetup"
author: ariestiyansyah
layout: post
categories:
- dev
tags:
- rust
- handout
- level-up
---

`WORK IN PROGRESS`

Location: Padepokan ASA Werdomartani

## Acara Rust

Komunitas Rust Indonesia mengadakan meetup keduanya dibulan September 2017, pada acara kali ini akan ada 6 speaker yang akan mengisi dengan topik yang beragam dari introduction to rust hingga Internet of things.

### Rizky Ariestiyansyah
Mozilla <3 Rust: Future of System Programming

Membuka acara dengan beberapa bug yang pernah kita lewati seperti heartbleed dan shellsock bash bug.

Control dan safe dari rust

Rizky menjelaskan beberapa hal basic tentang rust seperti fungsi, variable, structs, vector, ownership and borrowing.

Mengajak peserta untuk kontribusi ke komunitas rust Indonesia


### Aldo Ridhoni
Mendalami tipe data rust primitif. Representasi internal dan contoh penggunaan

Agenda, tipe tipe data primitive yang ada di rust, tabel konversi antar tipe data

Tipe data scalar = boolean, integer, floating-point, character
Tipe data compund = menyimpan nilai lebih dari satu = tuples, arrays, slices, string

Boolean = tipe data dengan nilai true atau false, biasanya digunakan if statement

Integer = Bilangan bulat atau tidak ada decimal
Dijelaskan juga sign dan unsigned 

Kelemahan f32 

### Wijaya Adhisurya
Think different with Rust: Penanganan error C++ ke Rust dan OOP Rust

Compiler rust pertama kali ditulis menggunakan 

Error handline yang biasa yaitu menggunakan sentinel values
Int return values


C Way:
- Programmer can pretend or ignore there is no error / Programmer bisa menghindari bahwa no error
-  Error type is just an int, it isn't meaningful
-  Handline errors will disrupt the flow of program / Handline error akan mengganggu flow program

C++ Way:
- Catching runtime exception is hard / runtime exception susah
- Nested calls makes it more complicated  nested call terlalu rumit


Rust memiliki 4 cara untuk error handling
- Original way: match expression // 
- The skip other errors way
- Functional way: cobinatorial error handling
- The convenient way*: Try trait

Wijaya memperkenalkan panic, result dan option


### Yuri Setiantoko
Apa yang bisa anda lakukan dengan Rust dalam waktu X menit

Project based talk: 

Project central ini seperti redis/consul = portinh ke rust



### Ibun Yahya
Rust untuk IoT: Mendalami Internet of Thing dengan Rust

Internet of things di Indonesia, perangkat Iot
Rust untuk Internet of things

Tessel


Q: Mensiasati keamanan di IoT.
A: Salah satu yang krusial disemua perangkat IoT itu adalah kemaanan, misalanya saja teansfer data

Teknik pengamanan: IoT menggunakan protokol umum, data di encrypt sebelum dikirim ke server, beberapa perangkat menggunakan protokol khusus (sampai sekarang masih dipertanyakan keamanannya) belum ada perusahaan yang menyatakan bahwa komunikasi Iot yang mengaku aman.

Q: IoT ingin aman harus ada maskernya

power consumtion = security

get in touch rust Indonesia:

github.com/rustid
facebook.com/rustindo
telegram: t.me/rustindonesia
youtube: youtube.com/rustid