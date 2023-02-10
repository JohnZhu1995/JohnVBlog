---
title: electron02--调用DLL
date: 2022-03-09 10:14:47
tags:
---

# electron 学习--调用 .dll

## 引言

本文使用 node-ffi/ffi-napi 调用 C/C++编写的动态链接库(即 dll)，以实现一些硬件功能。

## ffi

> node-ffi 是一个用于使用纯 JavaScript 加载和调用动态库的 Node.js 插件。它可以用来在不编写任何 C++代码的情况下创建与本地 DLL 库的绑定。同时它负责处理跨 JavaScript 和 C 的类型转换。

-   node-ffi 连接了 C 代码和 JS 代码, 通过内存共享来完成调用, 而内部又通过 ref,ref-array 和 ref-struct 来实现类型转换.

## 安装 ffi

> ffi-napi 是作者(node-ffi-napi)根据 node-ffi 修改而发布到 npm 仓库的, 可以直接通过 npm 安装, 支持 node.js 12 和 electron 高版本.

1. 部署 node.js+electron 环境
   请自行参照相关教程

2. 安装 ffi-napi

    ```
    yarn add ffi-napi
    ```

3. 使用 ffi
   在`main.js`中添加以下代码：

    ```js
    const ffi = require("ffi-napi");
    /**
     * 先定义一个函数, 用来在窗口中显示字符
     * @param {String} text
     * @return {*} none
     */
    function showText(text) {
        return new Buffer(text, "ucs2").toString("binary");
    }
    // 通过ffi加载user32.dll
    const myUser32 = new ffi.Library("user32", {
        // 声明这个dll中的一个函数
        MessageBoxW: [
            "int32",
            ["int32", "string", "string", "int32"], // 用json的格式罗列其返回类型和参数类型
        ],
    });

    // 调用user32.dll中的MessageBoxW()函数, 弹出一个对话框
    const isOk = myUser32.MessageBoxW(
        0,
        showText("I am Node.JS!"),
        showText("Hello, World!"),
        1
    );
    console.log(isOk);
    ```

    启动程序：

    ```
    yarn start
    ```

    启动成功！出现了弹窗：

    ![01](01.png)

## 自己生成一个 dll

0. 开始之前

-   注意：

    > ffi 只接受纯 C 函数, 确切的说, 是按照 C 标准编译的函数

    下面来说说具体的原因:

    在通过 ffi 引入 dll 的时候, 我们是这么声明的:

    ```js
    const myUser32 = new ffi.Library("user32", {
        // 声明这个dll中的一个函数
        MessageBoxW: [
            "int32",
            ["int32", "string", "string", "int32"], // 用json的格式罗列其返回类型和参数类型
        ],
    });
    ```

    在`user32.dll`中, 寻找一个名字叫`MessageBoxW`的函数.

    但是, C 和 C++的函数命名是不同的, 我指的是编译后的函数名字

    对于 C, 函数`int func(int n)`会被编译为类似`_func`这样的名字.

    对于 C++, 函数`int func(int n)`会被编译为类似`?func@@YAHH@Z`这样的名字.

    同样是 C++, 函数`int func(int double)`会被编译为类似`?func@@YAHN@Z`这样的名字(和上一个不同).

    名字中包含了较多信息, 比如:

    > 参数的入栈方式
    > 返回值的类型
    > 参数的类型和数量

    这是因为 C++有`函数重载`特性, 虽然函数命名是`func`, 但`int func(int n)`和`int func(int double)`完全是两个不同的函数, 编译器通过给它们赋予不同的名字来区分它们.ffi 在 dll 中查找函数名字的时候, **是用 C 风格来查找的**.

    -   所以,如果你的函数使用 C++编译的, ffl 在这个 dll 中就找不到这个函数, 会出现错误`LINK 126`!

1.  创建工程

    使用 VS 创建一个 C++ **空项目**即可. 项目名成以 myDLL 为例（当然, 你也可以直接创建动态链接库 DLL）:

    ![02](02.png)

2.  函数声明
    创建一个 myAdd.h 头文件，并声明一个`funAdd`函数：

    ```c++
    extern "C"
    {
        __declspec(dllexport) int funAdd(int a, int b);
    }
    ```

    `extern "C"`的含义:

    > 被 extern "C" 修饰的变量和函数是按照 C 语言方式编译和链接的

    `__declspec(dllexport)`的含义:

    > \_\_declspec(dllexport)用于 Windows 中的动态库中，声明导出函数、类、对象等供外面调用，省略给出.def 文件。即将函数、类等声明为导出函数，供其它程序调用，作为动态库的对外接口函数、类等。

3.  函数定义

    创建一个 myAdd.cpp 源文件，定义一个`funAdd`函数：

    ```c++
    #include "myAdd.h"
    int funAdd(int a, int b)
    {
    return (a + b);
    }
    ```

    创建完 myAdd.h 和 myAdd.cpp 如下图所示：

    ![04](04.png)

4.  修改配置类型为动态库.dll
    在项目配置中, 选择生成动态库.dll(确保你配置了 Debug 和 Release, 同时确保你在 x64 环境下生成):

    ![03](03.png)

5.  生成 dll
    右键项目选择生成即可, 生成的 myDLL.dll 位于项目目录下的 x64/Debug 中(根据你项目的配置去找, x64 或 x86, Debug 或 Release)。

6.  测试 dll
    将 myDLL.dll 拷贝至你的 electron 项目的根目录下的 dll 文件夹内
    在`main.js`中添加如下代码:

    ```js
    const ffi = require("ffi-napi"); // 如果前面已经定义过ffi, 就注释掉这一行
    // myDLL.dll
    const myDLL = new ffi.Library("/myDLL", {
        // 声明这个dll中的一个函数
        funAdd: [
            "int",
            ["int", "int"], // 用json的格式罗列其返回类型和参数类型
        ],
    });

    // 调用函数, 参数1和2, 将返回值直接打印出来, 预计为3
    const result = myDLL.funAdd(1, 2);
    console.log(`the result of 1 + 2 is: ` + result);
    ```

    启动程序：

    ```
    yarn start
    ```

    启动成功！shell 里打印出了相应的结果：

    ![05](05.png)

-   上面代码中，`ffi.Library`里第二个参数是一个 Json 结构，key 为方法名，value 为一个数组，数组的第一个参数是**返回值类型**，第二个参数是包含所有**传参类型**的子数组，如：如果返回值是空的话，那数组第一个参数应该是 void。如果返回值或者参数类型不知道是什么类型就写 void\*。要使用 ffi 中的类型表示 C/C++语言中的类型，对照表如下：

    > 基本类型
    > int8--Signed 8-bit Integer
    > uint8--Unsigned 8-bit Integer
    > int16--Signed 16-bit Integer
    > uint16--Unsigned 16-bit Integer
    > int32--Signed 32-bit Integer
    > uint32--Unsigned 32-bit Integer
    > int64--Signed 64-bit Integer
    > uint64--Unsigned 64-bit Integer
    > float--Single Precision Floating Point Number (float)
    > double--Double Precision Floating Point Number (double)
    > pointer--Pointer Type
    > string--Null-Terminated String (char \*)
    > 常见的 C 语言类型
    > byte--unsigned char
    > char--char
    > uchar--unsigned char
    > short--short
    > ushort--unsigned short
    > int--int
    > uint--unsigned int
    > long--long
    > ulong--unsigned long
    > longlong--long
    > ulonglong--unsigned long long
    > size_t--platform-dependent, usually pointer size

    如果是指针类型，可以引入`ref-napi`和`ref-array`模块来表示

    ```js
    var ref = require("ref-napi");
    var refArray = require("ref-array");

    var intPtr = ref.refType("int"); //int*类型
    var charPtr = "hello"; //char*可以用string表示

    //如果是个字符数组
    var refArray = require("ref-array");
    var charPtrPtr = refArray(ref.types.char, 50); //50个大小的数组
    ```

    假如参数或者返回值是一个结构体，那就需要借助`ref-struct`模块来表示

    ```js
    var ref = require("ref-napi");
    var FFI = require("ffi-napi");
    var Struct = require("ref-struct");

    var TimeVal = Struct({
        tv_sec: "long",
        tv_usec: "long",
    });
    var TimeValPtr = ref.refType(TimeVal);
    var lib = new FFI.Library(null, {
        gettimeofday: ["int", [TimeValPtr, "pointer"]],
    });
    var tv = new TimeVal();
    lib.gettimeofday(tv.ref(), null);
    console.log("Seconds since epoch: " + tv.tv_sec);
    ```

    **注：更多 ref 插件的方法详见 ref 文档： https://tootallnate.github.io/ref/**

    ## 可能出现的错误

    > 错误 1：LINK 126

    这个错误, 意味者 electron 无法使用你的 dll.

    ```js
    const myDLL = new ffi.Library('/myDLL', {
    ```

    在上面这行代码中，`ffi.Library`的第一个参数, 不光指定了 dll 的名字, 还指定了 dll 的路径.
    出现 LINK 126 有两个常见原因:

    1. 没有这个**目录**, 或这个目录下没有 `myDLL.dll`
    2. `myDLL.dll` 还**依赖了其他**的一些 dll, 但是 electron 无法找到这个 dll.

    > 错误 2：LINK 127

    出现 LINK 127 的可能原因:

    1. electron 找到了你的 dll, 但是在 dll 中**找不到**你声名的函数(funAdd)。这通常是由于**函数名字错误**, 或者是**返回值类型**/**参数的个数**及**类型**不一致导致的.

## References

1. https://www.cnblogs.com/silenzio/p/11606389.html
2. https://segmentfault.com/a/1190000019402908?utm_source=tag-newest
