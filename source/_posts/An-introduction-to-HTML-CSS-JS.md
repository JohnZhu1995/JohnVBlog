---
title: An introduction to HTML-CSS-JS
date: 2022-04-01 09:45:42
tags:
---

## 引言

**Web 前端技术由 html、css 和 javascript 三大部分构成，是一个庞大而复杂的技术体系，其复杂程度不低于任何一门后端语言。** 本文从一个小项目入手，由浅至深，逐步介绍前端系统的一些基础知识，旨在帮助初学前端的小伙伴快速地形成一些基础概念。

## 新建项目

-   打开 shell，使用命令新建项目文件夹：

```shell
mkdir html-css-js //新建项目文件夹，命名html-css-js
cd html-css-js //进入项目
```

-   使用 npm 初始化项目：

```shell
npm init //初始化项目，之后进行简单配置，回车跳过或使用默认值

package name: html-css-js                   //项目名称
version:   (1.0.0)                          //版本号
description: a introduce to html-css-js     //项目描述
entry point: (index.js)                     //项目入口文件
test command:                               //执行命令
git repository:                             //git仓库地址
keywords：                                  //项目关键字
author: john                                //作者名字
license:                                    //发行项目证书
```

下面分别新建 html、css、js 三个文件，它们三者这件的关系可以用下图进行类比：
![01](metaphor.png)

-   使用编辑器打开该项目文件夹，然后新建一个 html 文件（命名 index.html），作为页面的骨架

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
        />
    </head>
    <body>
        <div class="hello">
            hello world!
            <div id="cue">点我变大</div>
        </div>
    </body>
</html>
```

-   新建 css 文件，用来控制 html 中的样式

```css
.hello {
    cursor: pointer;
    font-size: 50px;
    text-align: center;
    color: aquamarine;
}
```

-   新建 js，实现一些页面操作和功能

```js
let hello = document.querySelector(".hello");
hello.addEventListener("click", function () {
    changeSize(hello);
});

function changeSize(obj) {
    let style = window.getComputedStyle(obj, null);
    let cue = document.getElementById("cue");
    if (style.fontSize === "50px") {
        obj.style = "font-size:100px";
        cue.innerHTML = "点我变小";
    } else {
        obj.style = "font-size:50px";
        cue.innerHTML = "点我变大";
    }
}
```

**我们还需要一些额外的中间件将项目运行起来**
首先，安装 express 来启动服务：

```shell
npm i express --save
```

然后，新建 app.js 作为启动文件

```js
var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "")));

var server = app.listen(8081, "127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
```

其中最主要的部分是 app.use(express.static(path.join(\_\_dirname, ''))) ，该行代码是在 express 添加中间件，设置静态资源路径为根目录，所有的 HTML、CSS、JS 等文件都放在**根目录**下即可

最后，使用 node 运行

```shell
node app.js //项目最终运行在127.0.0.1:8081
```

## HTML 知识点

### 1、BOM

BOM 是 Browser Object Model 的缩写，即浏览器对象模型，当一个浏览器页面初始化时，会在内存创建一个全局的对象，用以描述当前窗口的属性和状态，这个全局对象被称为浏览器对象模型，即 BOM。BOM 的核心对象就是 window，window 对象也是 BOM 的顶级对象，其中包含了浏览器的 6 个核心模块：

-   document -即文档对象，渲染引擎在解析 HTML 代码时，会为每一个元素生成对应的 DOM 对象，由于元素之间有层级关系，因此整个 HTML 代码解析完以后，会生成一个由不同节点组成的树形结构，俗称 DOM 树，document 用于描述 DOM 树的状态和属性，并提供了很多操作 DOM 的 API。

-   frames - HTML 子框架，即在浏览器里嵌入另一个窗口，父框架和子框架拥有独立的作用域和上下文。

-   history - 以栈(FIFO)的形式保存着页面被访问的历史记录，页面前进即入栈，页面返回即出栈。

-   location - 提供了当前窗口中加载的文档相关信息以及一些导航功能。

-   navigator - 用来描述浏览器本身，包括浏览器的名称、版本、语言、系统平台、用户特性字符串等信息。

-   screen - 提供了浏览器显示屏幕的相关属性，比如显示屏幕的宽度和高度，可用宽度和高度。

### 2、DOM 系统

DOM 是 Document Object Model 的缩写，即 文档对象模型，是所有浏览器公共遵守的标准，DOM 将 HTML 和 XML 文档映射成一个由不同节点组成的树型结构，俗称 DOM 树。其核心对象是 document，用于描述 DOM 树的状态和属性，并提供对应的 DOM 操作 API。随着历史的发展，DOM 被划分为 1 级、2 级、3 级，共 3 个级别：

-   1 级 DOM - 在 1998 年 10 月份成为 W3C 的提议，由 DOM 核心与 DOM HTML 两个模块组成。DOM 核心能映射以 XML 为基础的文档结构，允许获取和操作文档的任意部分。DOM HTML 通过添加 HTML 专用的对象与函数对 DOM 核心进行了扩展。

-   2 级 DOM - 鉴于 1 级 DOM 仅以映射文档结构为目标，DOM 2 级面向更为宽广。通过对原有 DOM 的扩展，2 级 DOM 通过对象接口增加了对鼠标和用户界面事件(DHTML 长期支持鼠标与用户界面事件)、范围、遍历(重复执行 DOM 文档)和层叠样式表(CSS)的支持。同时也对 DOM 1 的核心进行了扩展，从而可支持 XML 命名空间。

-   3 级 DOM -通过引入统一方式载入和保存文档和文档验证方法对 DOM 进行进一步扩展，DOM3 包含一个名为“DOM 载入与保存”的新模块，DOM 核心扩展后可支持 XML1.0 的所有内容，包括 XMLInfoset、 XPath、和 XML Base。

![02](DOM.png)

从图中可以看出，移动端常用的 webkit 内核浏览器目前只支持 DOM2，而不支持 DOM3 。

### 3、事件系统

事件是用户与页面交互的基础，到目前为止，DOM 事件从 PC 端的 鼠标事件(mouse) 发展到了 移动端的 触摸事件(touch) 和手势事件(guesture)，touch 事件描述了手指在屏幕操作的每一个细节，guesture 则是描述多手指操作时更为复杂的情况。

DOM2.0 模型将事件处理流程分为三个阶段，即 事件捕获阶段 、 事件处理阶段 、 事件冒泡阶段， 如图所示：

-   事件捕获 ：当用户触发点击事件后，顶层对象 document 就会发出一个事件流，从最外层的 DOM 节点向目标元素节点传递，最终到达目标元素。

-   事件处理 ：当到达目标元素之后，执行目标元素绑定的处理函数。如果没有绑定监听函数，则不做任何处理。

-   事件冒泡 ：事件流从目标元素开始，向最外层 DOM 节点传递，途中如果有节点绑定了事件处理函数，这些函数就会被执行。

利用事件冒泡原理可以实现 事件委托，所谓事件委托，就是在父元素上添加事件监听器，用以监听和处理子元素的事件，避免重复为子元素绑定相同的事件。当目标元素的事件被触发以后，这个事件就从目标元素开始，向最外层元素传递，最终冒泡到父元素上，父元素再通过 event.target 获取到这个目标元素，这样做的好处是，父元素只需绑定一个事件监听，就可以对所有子元素的事件进行处理了，从而减少了不必要的事件绑定，对页面性能有一定的提升。

### 4、HTML 解析过程

渲染引擎一开始会从网络层获取请求文档的内容，内容的大小一般限制在 8000 个块以内。

然后进行如下所示的基本流程：
![03](render.png)

-   HTML Parser 解析 HTML 文档，并将各标记逐个转化为 DOM 节点，生成 **DOM 树**。
-   CSS Parser 解析外部 CSS 文件以及样式元素中的样式数据，生成 **CSSOM 树**。
-   **DOM 树** 和 **CSSOM 树** 通过 “附着” 将创建另一个树结构：**渲染树**。
-   **渲染树** 包含多个带有视觉属性（如颜色和尺寸）的矩形，这些矩形的排列顺序就是它们将在屏幕上显示的顺序。
-   渲染树构建完毕之后，进入 **布局** 处理阶段，也就是为每个节点分配一个应出现在屏幕上的确切坐标。
-   下一个阶段是 **绘制**，渲染引擎会遍历渲染树，由用户界面后端层将每个节点绘制出来。

需要注意的是：

> 这是一个渐进的过程。为达到更好的用户体验，呈现引擎会力求尽快将内容显示在屏幕上。它不必等到整个 HTML 文档解析完毕之后，就会开始构建呈现树和设置布局。在不断接收和处理来自网络的其余内容的同时，呈现引擎会将部分内容解析并显示出来。

## CSS 知识点

### 1、CSS 选择器

CSS 选择器即通过某种规则来匹配相应的标签，并为其设置 CSS 样式，常用的有：

-   类选择器(.a)
-   标签选择器(div)
-   ID 选择器(#a)
-   后代选择器(h1 .a)
-   子元素选择器(h1 > a)
-   群组选择器(h1,h2,h3)
-   伪类选择器(::before/::after)
-   相邻兄弟选择器(h1 + p)
-   属性选择器(a[href][title])

### 2、CSS Reset

HTML 标签在不设置任何样式的情况下，也会有一个默认的 CSS 样式，而不同内核浏览器对于这个默认值的设置则不尽相同，这样可能会导致同一套代码在不同浏览器上的显示效果不一致，而出现兼容性问题。因此，在初始化时，需要对常用标签的样式进行初始化，使其默认样式统一，这就是 CSSReset ，即 CSS 样式重置，比如：\*{margin:0,padding:0} 就是最简单 CSS Reset。

### 3、盒子布局

盒子模型是 CSS 比较重要的一个概念，也是 CSS 布局的基石。

常见的盒子模型有块级盒子(block)和行内盒子(inline-block)，与盒子相关的几个属性有：margin、border、padding 和 content 等，这些属性的作用是设置盒子与盒子之间的关系以及盒子与内容之间的关系。其中，只有普通文档流中块级盒子的垂直外边距才会发生合并，而行内盒子、浮动盒子或绝对定位之间的外边距不会合并。另外，box-sizing 属性的设置会影响盒子 width 和 height 的计算。

### 4、浮动布局

设置元素的 float 属性值为 left 或 right，就能使该元素脱离普通文档流，向左或向右浮动。一般在做宫格布局时会用到，如果子元素全部设置为浮动，则父元素是塌陷的，这时就需要清除浮动，清除浮动的方法也很多，常用的方法是在元素末尾加空元素设置 clear:both，更高级一点的就给父容器设置 before/after 来模拟一个空元素，还可以直接设置 overflow 属性为 auto/hidden 来清除浮动。除浮动可以实现宫格布局，行内盒子(inline-block)和 table 也可以实现同样的效果。

### 5、定位布局

设置元素的 position 属性值为 relative/absolute/fixed，就可以使该元素脱离文档流，并以某种参照坐标进行偏移。其中，releave 是相对定位，它以自己原来的位置进行偏移，偏移后，原来的空间不会被其他元素占用;absolute 是绝对定位，它以离自己最近的定位父容器作为参照进行偏移;为了对某个元素进行定位，常用的方式就是设置父容器的 poistion:relative，因为相对定位元素在不设置 top 和 left 值时，不会对元素位置产生影响;fixed 即固定定位，它则以浏览器窗口为参照物，PC 网页底部悬停的 banner 一般都可以通过 fixed 定位来实现，但 fixed 属性在移动端有兼容性问题，因此不推荐使用，可替代的方案是：绝对定位+内部滚动。

### 6、弹性布局

弹性布局即 Flex 布局，定义了 flex 的容器一个可伸缩容器，首先容器本身会根据容器中的元素动态设置自身大小;然后当 Flex 容器被应用一个大小时(width 和 height)，将会自动调整容器中的元素适应新大小。Flex 容器也可以设置伸缩比例和固定宽度，还可以设置容器中元素的排列方向(横向和纵向)和是否支持元素的自动换行。有了这个神器，做页面布局的可以方便很多了。注意，设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。

## JS 知识点

### 1、基础语法

JavaScript 基础语法包括：变量声明、数据类型、函数、控制语句、内置对象等。

-   在 ES5 中，变量声明有两种方式，分别是 var 和 function ，var 用于声明普通的变量，接收任意类型，function 用于声明函数。另外，ES6 新增了 let、const、import 和 class 等四个命令，分别用以声明 普通变量、静态变量、模块 和 类 。

-   JS 数据类型共有六种，分别是 String、Number、Boolean、Null、Undefined 和 Object 等， 另外，ES6 新增了 Symbol 类型。其中，Object 是引用类型，其他的都是原始类型(Primitive Type)。

-   原始类型也称为基本类型或简单类型，因为其占据空间固定，是简单的数据段，为了便于提升变量查询速度，将其存储在栈(stack)中(按值访问)。为了便于操作这类数据，ECMAScript 提供了 3 个 基本包装类型 ：Boolean、Number 和 String。基本包装类型是一种特殊的引用类型，每当读取一个基本类型值的时候，JS 内部就会创建一个对应的包装对象，从而可以调用一些方法来操作这些数据。

引用类型由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度，因此其存储在堆(heap)中，存储在变量处的值是一个指针，指向存储对象的内存处(按址访问)，对于引用类型的值，可以为其添加属性和方法，也可以改变和删除其属性和方法;但基本类型不可以添加属性和方法。

JavaScript 可以通过 typeof 来判断原始数据类型，但不能判断引用类型，要知道引用类型的具体类型，需要通过 Object 原型上的 toString 方法来判断。

JS 中的函数存在着三种角色：普通函数、构造函数、对象方法。同一个函数，调用方式不同，函数的作用不一样，所扮演的角色也不一样。直接调用时就是普通函数，通过 new 创建对象时就是构造函数，通过对象调用时就是方法。

-   JS 常用的内置对象有 window、Date、Array、JSON、RegExp 等，window 是浏览器在执行脚本时创建的一个全局对象，主要描述浏览器窗口相关的属性和状态，这个后面会讲到，Date 和 Array 使用场景最多，JSON 主要用于对象的序列化和反序列化，还有一个作用就是实现对象的深拷贝。RegExp 即正则表达式，是处理字符串的利器。

### 2、函数原型链

JS 是一种基于对象的语言，但在 ES6 之前是不支持继承的，为了具备继承的能力，JavaScript 在 函数对象上建立了原型对象 prototype，并以函数对象为主线，从上至下，在 JS 内部构建了一条 原型链 。原型链把一个个独立的对象联系在一起，Object 则是所有对象的祖宗， 任何对象所建立的原型链最终都指向了 Object，并以 Object 终结。

简单来说就是建立了变量查找机制，当访问一个对象的属性时，先查找对象本身是否存在，如果不存在就去该对象所在的原型连上去找，直到 Object 对象为止，如果都没有找到该属性才会返回 undefined。因此，我们可以通过原型链来实现 JS 继承。

### 3、函数作用域

函数作用域就是变量在声明它们的函数体以及这个函数体嵌套的任意函数体内都是有定义的。因此， JS 中没有块级作用域，只有函数作用域，这种设计导致 JS 中出现了 变量提升 的问题。简单来说就是，将变量声明提升到它所在作用域的最开始的部分，为了解决变量提升带来的副作用，ES6 新增了 let 命令来声明变量，let 所声明的变量只在 let 命令所在的代码块内有效，所以不存在变量提升问题。

### 4、this 指针

this 指针存在于函数中，用以标识函数运行时所处的上下文。函数的类型不同，this 指向规则也不一样：对于普通函数，this 始终指向全局对象 window;对于构造函数，this 则指向新创建的对象;对于方法，this 指向调用该方法的对象。另外，Function 对象也提供了 call、apply 和 bind 等方法来改变函数的 this 指向，其中，call 和 apply 主动执行函数，bind 一般在事件回调中使用，而 call 和 apply 的区别只是参数的传递方式不同。

如果往深的去理解，无论什么函数，this 是否被改变， 本质上，this 均指向触发函数运行时的那个对象。而在函数运行时，this 的值是不能被改变的。

### 5、new 操作符

函数的创建有三种方式，即 显式声明、匿名定义 和 new Function()。前面提到，JS 中的函数即可以是函数，也可以是方法，还可以是构造函数。当使用 new 来创建对象时，该函数就是构造函数，JS 将新对象的原型链指向了构造函数的原型对象，于是就在新对象和函数对象之间建立了一条原型链，通过新对象可以访问到函数对象原型 prototype 中的方法和属性。

## Reference

https://www.cnblogs.com/onepixel/p/7021506.html
