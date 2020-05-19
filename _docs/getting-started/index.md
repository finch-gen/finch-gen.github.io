---
layout: docs
title:  "Test"
category: "Getting Started"
category_index: 1
index: 1
group: docs
permalink: /docs/getting-started
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight rust %}
use finch_macro::*;

#[finch_bindgen]
pub struct Foo {
  pub x: i32,
  y: i32,
}

#[finch_bindgen]
impl Foo {
  pub fn new(y: i32) -> Self {
    Self {
      x: 1,
      y,
    }
  }

  pub fn print_y(&self) {
    println!("The value of y is: {}", self.y);
  }

  pub fn print_int(value: i32) {
    println!("The integer is: {}", value);
  }
}
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
