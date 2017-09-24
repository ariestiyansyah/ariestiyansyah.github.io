---
title: "Handout: Level up your rust knowledge"
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

## Rust

- All primitive types will naturally always directly go on the stack

& itu reference


### Variable

- variable dalam rust secara default merupakan immutable yang artinya jika data sudah di initiate maka object tersebut tidak dapat dirubah.

Contoh variable
```
let nama = "Meetup Rust Indonesia";
let tahun = 2017;
let hello = format!("{} {}", nama, tahun);
println!("{:?}, hello)
```
Value in rust immutable

```
let tahun = 2017;
tahun = 2017 // error!

let mut tahun = 2017;
tahun = 2018 // work
```

Mutability is also part of the type of borrowed pointer 

```
fn inc(i: &int) {
    *i += 1; //error
}

fn inc(i: &mut int) {
    *i += 1; // ok
}
```

Fungsi di rust menggunakan `fn` diikuti dengan nama fungsi, argumen, tipe return dan block kode.

Contohnya

```
fn namaFungsi(argumen: i32, argumen2: i32) -> bool {
    // Fungsi
}
```

Bisa kita lihat fungsi diatas bernama `namaFungsi` dengan dua argumen bertipe i32 dan returnnya adalah boolean. Perlu diketahui tipe return digunakan setelah operator `->`

Contoh fungsi berikutnya tanpa return value dan argumen:

```
fn namaFungsiDua() {
    // 
}
```

Contoh menulis loop didalam sebuah fungsi

```
fn bagi_tiga(min: i32, max_exclusive: i32) {
    for x in min..max_exclusive {
        if x % 3 == 0 {
            println!("{} is divisible by 3", x);
        }
    }
}
```

Fungsi diatas melakaukan pengecekan dari `min` dan `max_exclusive` dengan dua 32 bit ineteger Lalu menggunakan for - in loop dengan dua input dan melakukan pengecekan dari range data yang dibuat apakah bisa dibagi tiga atau tidak lalu menggunakan statement `println`

### Struct

- data structure memiliki key-value entities
- setiap key-value bisa menggunakan tipe data berbeda

```
struct Rust {
    nama: String
    bulan: i32,
    tahun: i32,
}
let meetup = Rust {name: "Rust Indonesia".to_string(), bulan: 09, tahun: 2017 };
```

#### Struct with function

```
fn next_meetup(nama_: &str, bulan_: i32, tahun_: i32) -> Rust {
    let new_meetup = Rust {name: nama_.to_string(), bulan: bulan_, tahun: tahun_};
    new_meetup
}

let november = next_meetup("Rust Indonesia X", 11, 2017);
```

### Vector

- resizable array
- Bisa memmuat integers, floats, Strings, hingga Structs 

```
let deret = vec![1,2,3];
let mut himpunana = vec::new();
himpunan.push(5);
himpunan.push(6)
```

#### Vector of Structs

```
fn next_year() ->Vec(Rust) {
    let january = new_meetup("Rust Indonesia January", 1, 2018);
    let march = new_meetup("Rust Indonesia March", 3, 2018);
    let may = new_meetup("Rust Indonesia May", 5, 2018);
    let july = new_meetup("Rust Indonesia July", 7. 2018);

    let mut featured_meetup = Vec::new();
    featured_meetup.push(january);
    featured_meetup.push(march);
    featured_meetup.push(may);
    featured_meetup.push(july);

    featured_meetup
}

let awesome_meetup = next_year();
```

Ownership

- Saferty dan Concurrency Rust


Cargo Doc - Documentation generator 


GC

non determistic destyction

Video GB

GC membutuhkan memori yang banyak agar lebih efisien

System Programming build libraries your application will use

Can't have two bindings to the same vector in rust

Zero cost abstractions

Ownership: C allocate memory on a heap you need to have free statement at the end right to clear the heap memoery