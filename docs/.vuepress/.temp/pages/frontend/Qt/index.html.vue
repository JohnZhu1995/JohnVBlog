<template><h1 id="introduction-to-qt" tabindex="-1"><a class="header-anchor" href="#introduction-to-qt" aria-hidden="true">#</a> Introduction to QT</h1>
<h2 id="qt-简介" tabindex="-1"><a class="header-anchor" href="#qt-简介" aria-hidden="true">#</a> QT 简介</h2>
<h3 id="什么是-qt" tabindex="-1"><a class="header-anchor" href="#什么是-qt" aria-hidden="true">#</a> 什么是 QT</h3>
<ul>
<li>Qt（官方发音 [kju:t]，音同 cute）是一个跨平台的 C++ 开发 库，主要用来开发图形用户界面（Graphical User Interface， GUI）程序，当然也可以开发不带界面的命令行（Command User Interface，CUI）程序。</li>
<li>Qt 是纯 C++ 开发的，所以学好 C++ 非常有必要，对于不了 解 C++ 的读者，我建议先阅读《C 语言教程》，再阅读《C++ 教程》。C++ 是在 C 语言的基础上发展起来的，学完 C 语言就 学了 C++ 的一半了。</li>
<li>Qt 还存在 Python、Ruby、Perl 等脚本语言的绑定， 也就是 说可以使用脚本语言开发基于 Qt 的程序。开源社区就是这样， 好东西就会被派生扩展，到处使用， 越来越壮大。</li>
<li>Qt 支持的操作系统有很多，例如通用操作系统 Windows、 Linux、Unix，智能手机系统 Android、iOS、WinPhone， 嵌入 式系统 QNX、VxWorks 等等。</li>
</ul>
<h3 id="qt-可以做什么" tabindex="-1"><a class="header-anchor" href="#qt-可以做什么" aria-hidden="true">#</a> QT 可以做什么</h3>
<ul>
<li>Qt 虽然经常被当做一个 GUI 库，用来开发图形界面应用程序，但 这并不是 Qt 的全部；Qt 除了可以绘制漂亮的界面（包括控件、布 局、交互），还包含很多其它功能，比如多线程、访问数据库、图像 处理、音频视频处理、网络通信、文件操作等，这些 Qt 都已经内置了。</li>
<li>Qt 是应用程序开发的一站式解决方案，有了 Qt，你就可以高枕无 忧了！Qt 本身包含的模块也日益丰富， 一直有新模块和第三方模 块加入进来。 大部分应用程序都可以使用 Qt 实现，除了与计算机底层结合特别 紧密的，例如驱动开发，它直接使用硬件提供的编程接口，而不能使 用操作系统自带的函数库。</li>
<li>1997 年，Qt 被用来开发 Linux 桌面环境 KDE，大获成功，使 Qt 成 为 Linux 环境下开发 C++ GUI 程序的事实标准。</li>
<li>下面的程序都使用 Qt 开发：WPS、YY 语音、Skype、豆瓣电台、 虾米音乐、淘宝助理、千牛、暴雪的战网客户端、VirtualBox、Opera、 咪咕音乐、Google 地图、Adobe Photoshop Album 等。</li>
<li>Linux 也是嵌入式的主力军，广泛应用于消费类电子、工业控制、军 工电子、电信/网络/通讯、航空航天、汽车电子、医疗设备、仪器仪 表等相关行业。</li>
<li>Qt 虽然也支持手机操作系统，但是由于 Android 本身已经有 Java 和 Kotlin，iOS 本身已经有 Objective-C 和 Swift，所以 Qt 在移动端的市场份额几乎可以忽略。</li>
<li>总起来说，Qt 主要用于桌面程序开发和嵌入式开发。</li>
</ul>
<h3 id="qt-和其他-gui-库的对比" tabindex="-1"><a class="header-anchor" href="#qt-和其他-gui-库的对比" aria-hidden="true">#</a> QT 和其他 GUI 库的对比</h3>
<ul>
<li>Windows 下的 GUI 库
<ul>
<li>基于 C++ 的有 Qt、MFC、WTL、wxWidgets、DirectUI、 Htmlayout；</li>
<li>基于 C# 的有 WinForm、WPF；  基于 Java 的有 AWT、Swing；</li>
<li>基于 Pascal 的 有 Delphi；</li>
<li>基于 Go 语言的有 walk 和 electron；  还有国内初露头角的 aardio；</li>
<li>Visual Basic 曾经很流行，现在逐渐失去了色彩；</li>
<li>如果你有 Web 开发经验，也可以基于 Webkit 或 Chromium 将网页转换为桌面程序。</li>
</ul>
</li>
<li>用 Qt 来开发 Windows 桌面程序有以下优点：
<ul>
<li>简单易学：Qt 封装的很好，几行代码就可以开发出一个简单 的客户端，不需要了解 Windows API。</li>
<li>资料丰富：资料丰富能够成倍降低学习成本，否则你只能去看 源码，关于 DirectUI、Htmlayout、aardio 的资料就很少。</li>
<li>漂亮的界面：Qt 很容易做出漂亮的界面和炫酷的动画，而 MFC、WTL、wxWidgets 比较麻烦。</li>
<li>独立安装：Qt 程序最终会编译为本地代码，不需要其他库的 支撑，而 Java 要安装虚拟机，C# 要安装 .NET Framework。</li>
<li>跨平台：如果你的程序需要运行在多个平台下，同时又希望降 低开发成本，Qt 几乎是必备的。</li>
</ul>
</li>
<li>Linux 下的 GUI 库
Linux 下 常 用 的 GUI 库 有 基 于 C++ 的 Qt 、 GTK+ 、 wxWidgets，以及基于 Java 的 AWT 和 Swing。其中最著名的就是 Qt 和 GTK+：KDE 桌面系统已经将 Qt 作为默认的 GUI 库，Gnome 桌面系统也将 GTK+ 作为默认的 GUI 库。</li>
</ul>
</template>
