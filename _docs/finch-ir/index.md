---
layout: docs
title:  "Supported Types"
category: "Finch IR"
category_index: 2
index: 1
group: docs
permalink: /docs/finch-ir
---

# Primitives

| Rust | C |
|---|---|
| `bool` | `bool` |
| `char` | `char` |
| `u8` | `uint8_t` |
| `u16` | `uint16_t` |
| `u32` | `uint32_t` |
| `u64` | `uint64_t` |
| `usize` | `size_t` |
| `i8` | `int8_t` |
| `i16` | `int16_t` |
| `i32` | `int32_t` |
| `i64` | `int64_t` |
| `isize` | `ssize_t` |
| `f32` | `float` |
| `f64` | `double` |
| `c_void` | `void` |
| `c_char` | `char` |
| `c_schar` | `signed char` |
| `c_uchar` | `unsigned char` |
| `c_float` | `float` |
| `c_double` | `double` |
| `c_short` | `short` |
| `c_int` | `int` |
| `c_long` | `long` |
| `c_longlong` | `long long` |
| `c_ushort` | `unsigned short` |
| `c_uint` | `unsigned int` |
| `c_ulong` | `unsigned long` |
| `c_ulonglong` | `unsigned long long` |
| `uint8_t` | `uint8_t` |
| `uint16_t` | `uint16_t` |
| `uint32_t` | `uint32_t` |
| `uint64_t` | `uint64_t` |
| `uintptr_t` | `uintptr_t` |
| `size_t` | `size_t` |
| `int8_t` | `int8_t` |
| `int16_t` | `int16_t` |
| `int32_t` | `int32_t` |
| `int64_t` | `int64_t` |
| `intptr_t` | `intptr_t` |
| `ssize_t` | `ssize_t` |
| `ptrdiff_t` | `ptrdiff_t` |

# [Finch Standard Types][std-types]

| Rust | C |
|---|---|
| `String` | [`FinchString`][std-types] |
| `Option<T>` | [`FinchOption<T>`][std-types] |
| `Result<T, E>` | [`FinchResult<T, E>`][std-types] |

[std-types]: /docs/finch-ir/std-types

