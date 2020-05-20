---
layout: docs
title:  "Standard Types"
category: "Finch IR"
category_index: 2
index: 2
group: docs
---

```cpp
struct FinchString {
  char *ptr;
  uintptr_t len;
};

template<typename T>
struct FinchOption {
  enum class Tag {
    Some,
    None,
  };

  struct Some_Body {
    T _0;
  };

  Tag tag;
  union {
    Some_Body some;
  };
};

template<typename T, typename E>
struct FinchResult {
  enum class Tag {
    Ok,
    Err,
  };

  struct Ok_Body {
    T _0;
  };

  struct Err_Body {
    E _0;
  };

  Tag tag;
  union {
    Ok_Body ok;
    Err_Body err;
  };
};
```