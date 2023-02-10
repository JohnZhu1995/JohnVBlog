---
title: Sass使用教程
date: 2022-05-20 14:52:28
tags:
---

### 引言

**Sass(Syntactically Awesome Stylesheets)** 是世界上最好的 css 扩展语言。在正常的编写 css 的基础上，增加了很多变量，函数，循环，判断等类似编程语言的代码模式。极大的提高了编写样式的效率。还有许多的内置函数（如颜色加深，颜色淡化）用于高效的属性设置。使得 css 也可以用类似脚本的方式进行编写。

### 注释和变量 Variables

-   编译的时候不会被编译的注释

```js
// 普通注释在编译的时候就被过滤了
```

-   编译的时候会被编译的注释

```js
/* 在编译的时候会被一起编译过去 */
```

-   强力注释

```js
/*! 强力注释不光编译的时候会被编译过去，将来压缩文件的时候也会存在 */
```

-   在 sass 中用$来定义变量（一般用来定义颜色或者一些常用的像素值）：

```js
$color:red;
$font_size:12px;
.header{
    background-color: $color;
    font-size:$font_size*2;
}
```

### 嵌套规则 Nesting

-   sass 中最常被用到的就是嵌套

> css 编写时权重难以控制，嵌套层级多导致代码编写不方便。sass 的出现就是为了解决 css 的缺点。
> sass 不能直接被浏览器识别，所以需要进行编译成正常的 css 文件才能被浏览器使用。

```css
h1 {
    width: 200px;

    div {
        width: 100px;
        p {
            font-size: 16px;
        }
    }
}

// 编译结果
h1 {
    width: 200px;
}

h1 div {
    width: 100px;
}
h1 div p {
    font-size: 16px;
}
```

-   连接符&

```css
div {
    width: 100px;
    height: 100px;

    &:hover {
        width: 200px;
    }
}

// 编译后
div {
    width: 100px;
    height: 100px;
}
div:hover {
    // 注意不使用&时，经过编译这div和:hover中间有空格，样式不生效
    width: 200px;
}
```

-   群组嵌套

a.群组嵌套就是多个标签同时嵌套：

```css
div {
    width: 100px;

    .box1,
    .box2,
    .box3 {
        color: red;
    }
}

// 编译结果
div {
    width: 100px;
}
div .box1,
div .box2,
div .box3 {
    color: red;
}
```

b.多个标签同时嵌套一个标签

```css
h1,
h2,
h3 {
    width: 100px;

    .box {
        color: red;
    }
}

// 编译结果
h1,
h2,
h3 {
    width: 100px;
}
h1 .box,
h2 .box,
h3 .box {
    color: red;
}
```

-   属性嵌套

```css
div {
    border: {
        style: solid;
        width: 10px;
        color: pink;
    }
}

// 编译结果
div {
    border-style: solid;
    border-width: 10px;
    border-color: pink;
}
```

```css
div {
    border: 1px solid #333 {
        bottom: none;
    }
}

// 编译结果
div {
    border: 1px solid #333;
    border-bottom: none;
}
```

### 混合器 Mixin

-   其实就是定义一个 “函数” 在 scss 文件中使用

> 定义语法：@mixin 函数名{函数代码}

```css
// 定义一个混合器使用  @mixin 关键字
@mixin radius {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
}
```

> 调用语法：@include 函数名;

```css
// 使用混合器使用 @include 关键字
div {
    width: 100px;
    height: 100px;

    @include radius;
}

//编译结果
div {
    width: 100px;
    height: 100px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
}
```

-   混合器传参
    混合器就像一个 “函数” 一样，那么就一定可以像 “函数” 一样传递参数，和 “函数” 的使用方式一样，在定时的时候是 “形参”，在调用的时候是 “实参”。
    > 语法：@mixin 函数名(形参){函数代码中可以使用形参}

```css
// 定义混合器
@mixin my_transition($pro, $dur, $delay, $tim) {
    -webkit-transition: $pro $dur $delay $tim;
    -moz-transition: $pro $dur $delay $tim;
    -ms-transition: $pro $dur $delay $tim;
    -o-transition: $pro $dur $delay $tim;
    transition: $pro $dur $delay $tim;
}
```

> 调用语法：@include 函数名(实参);

```css
div {
    width: 100px;
    height: 100px;

    @include my_transition(all, 1s, 0s, linear);
}

//编译结果
div {
    width: 100px;
    height: 100px;
    -webkit-transition: all 1s 0s linear;
    -moz-transition: all 1s 0s linear;
    -ms-transition: all 1s 0s linear;
    -o-transition: all 1s 0s linear;
    transition: all 1s 0s linear;
}
```

-   参数默认值

我们在定义混合器的时候，也可以给一些参数写一些默认值，这样一来，就可以不传递 “实参” 了，使用的时候，如果你不传递，那么就是使用默认值。

```css
// 设置一些带有默认值的参数
@mixin my_transition($dur: 1s, $pro: all, $delay: 0s, $tim: linear) {
    -webkit-transition: $dur $pro $delay $tim;
    -moz-transition: $dur $pro $delay $tim;
    -ms-transition: $dur $pro $delay $tim;
    -o-transition: $dur $pro $delay $tim;
    transition: $dur $pro $delay $tim;
}
```

### 继承 extend 和导入 import

当下面的选择器中需要使用到上面选择器的样式，就可以使用继承将上面拿下来使用，而省掉再写：

> 继承语法：@extend 被继承的选择器;

```css
.box1 {
    width: 100px;
    height: 100px;
}
.box2 {
    @extend .box1;
    border: 1px solid #000;
}

//编译结果
.box1,
.box2 {
    width: 100px;
    height: 100px;
}

.box2 {
    border: 1px solid #000;
}
```

**_在一个文件中定义变量和混合器，在写 css 的时候文件比较混乱，所以通常会将变量和混合器放在单独的文件中，通过命令导入进来，这样每个文件中的代码都是同一类_**

变量文件：variable.scss

```css
$orange: orange;
$red: red;
```

混合器文件：mixin.scss

```css
@mixin bor($style, $width, $color) {
    border: $style $width $color;
}
@mixin bac($path, $color, $repeat) {
    background: url($path) $color $repeat;
}
```

样式文件：style.css

```css
@import "./variable.scss";
@import "./mixin.scss";

.box {
    @include bor(solid, 1px, $red);
}

//编译结果
.box {
    border: solid 1px red;
}
```

#### Reference

https://blog.csdn.net/qq_45677671/article/details/114579594
