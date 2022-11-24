<template><h1 id="对象解构" tabindex="-1"><a class="header-anchor" href="#对象解构" aria-hidden="true">#</a> 对象解构</h1>
<p>在 js 中，如果我们需要把一个<em>对象</em>里面的<em>属性</em>提取出来放到自定义的<em>变量</em>上，在不使用对象解构的情况下可能会写出这样的代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 示例对象</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ec50n9"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token string">"student"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 挨个赋值</span>
<span class="token keyword">let</span> personName <span class="token operator">=</span> person<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    personAge <span class="token operator">=</span> person<span class="token punctuation">.</span>age<span class="token punctuation">,</span>
    personJob <span class="token operator">=</span> person<span class="token punctuation">.</span>job<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>这样写是没什么问题的，但是对比使用<em>对象解构</em>的写法，上面这种写法就略显复杂了</p>
<h2 id="对象解构的基本用法" tabindex="-1"><a class="header-anchor" href="#对象解构的基本用法" aria-hidden="true">#</a> 对象解构的基本用法</h2>
<p>来看看使用了对象解构的写法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 上面的赋值代码变成了这样👇</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> personName<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> personAge<span class="token punctuation">,</span> <span class="token literal-property property">job</span><span class="token operator">:</span> personJob <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "ec50n9"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personAge<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 19</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>可以看到在对象解构的写法中，等号左边的写法就<em>类似于一个对象</em>，只不过属性名对应的不是值，而是<em>将要赋值的变量名</em>，下面这代码可能更直观些：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 左边是解构，右边是对象</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> personName<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> personAge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ec50n9"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>我觉得可以把左边的对象解构语句理解成是一个填空的模板，js 只是在帮我们做填空题，这样一来，👇 下面的这些对象解构的特性就好理解些了。</p>
<h2 id="忽略部分属性" tabindex="-1"><a class="header-anchor" href="#忽略部分属性" aria-hidden="true">#</a> 忽略部分属性</h2>
<p>如果只想赋值 <code>personName</code> 和 <code>personAge</code> 变量的话，不写 <code>job</code> 就可以了：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> personName<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> personAge <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="简写语法" tabindex="-1"><a class="header-anchor" href="#简写语法" aria-hidden="true">#</a> 简写语法</h2>
<p>如果想让变量<em>直接使用属性的名称</em>，可以使用简写语法 ⬇️</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "ec50n9"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 19</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="定义默认值" tabindex="-1"><a class="header-anchor" href="#定义默认值" aria-hidden="true">#</a> 定义默认值</h2>
<p>有时候，可能被解构的对象中<em>没有被引用的属性</em>，可以通过下面这种方法来定义<em>默认值</em>，也就是如果对象中没有对应属性，就使用默认值：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> name <span class="token operator">=</span> <span class="token string">"no Name"</span><span class="token punctuation">,</span> sex <span class="token operator">=</span> <span class="token string">"男"</span><span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "ec50n9"  对象中有 name 属性✅，所以使用对象中的值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "男"      对象中没有 sex 属性❌，使用默认值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined 对象中没有 height 属性❌，也没有默认值</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="对原始值进行解构" tabindex="-1"><a class="header-anchor" href="#对原始值进行解构" aria-hidden="true">#</a> 对原始值进行解构</h2>
<blockquote>
<p>解构在内部使用函数 <code>ToObject()</code> 来把源数据结构转换为对象。</p>
</blockquote>
<p>这意味着，你可以对 <code>&quot;str&quot;</code>、<code>123</code> 这种原始值进行解构：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 解构字符串</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> length <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">"foobar"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>

<span class="token comment">// 解构并取得对象的构造器</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">constructor</span><span class="token operator">:</span> c <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c <span class="token operator">===</span> Number<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote>
<p>实际上，原始值本身并非对象，只是在对象解构的时候，在对象解构的上下文中临时生成了一个<em>包装对象</em>来被解构（也就是 <code>ToObject()</code> 所做的事情），在对象解构完成之后就会被销毁。具体可以搜索*“原始值包装类型”*。</p>
</blockquote>
<p>因为<em>数组也是对象</em>，所以自然也可以对它进行解构, 只是<em>属性名是下标</em>，看起来比较奇怪：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"ec50n9"</span><span class="token punctuation">,</span> <span class="token string">"xiao"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> my_name<span class="token punctuation">,</span> <span class="token number">1</span><span class="token operator">:</span> her_name <span class="token punctuation">}</span> <span class="token operator">=</span> name_list<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>my_name<span class="token punctuation">,</span> her_name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ec50n9 xiao</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>假如数组里面装的是对象，也可以利用<em>嵌套解构</em>（下面有介绍）来对数组中的对象进行解构：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ec50n9"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"xiao"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> name_A<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> age_A <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">1</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> name_B<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> age_B <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> array<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name_A<span class="token punctuation">,</span> age_A<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ec50n9 19</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name_B<span class="token punctuation">,</span> age_B<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// xiao 18</span>
<span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="null-和-undefined-不能被解构" tabindex="-1"><a class="header-anchor" href="#null-和-undefined-不能被解构" aria-hidden="true">#</a> <code>null</code> 和 <code>undefined</code> 不能被解构</h2>
<p>根据 <code>ToObject()</code> 的定义，<code>null</code> 和 <code>undefined</code> 不能被解构，否则会抛出错误：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> _ <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// TypeError</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> _ <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// TypeError</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>这里的 <code>_</code> 只是用于测试而已，实际上对象里面并没有 <code>_</code> 这个属性。因为在尝试解构 <code>null</code> 的时候就已经报错了，不管前面解构的属性名是什么都是同样的结果。</p>
</blockquote>
<h2 id="给事先声明的变量赋值" tabindex="-1"><a class="header-anchor" href="#给事先声明的变量赋值" aria-hidden="true">#</a> 给事先声明的变量赋值</h2>
<p>解构并不要求变量必须在解构表达式中声明。不过，如果是事先声明的变量赋值，则赋值表达式必须包含在一对括号中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> personName<span class="token punctuation">,</span> personAge<span class="token punctuation">;</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ec50n9"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> personName<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> personAge <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personName<span class="token punctuation">,</span> personAge<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ec50n9 19</span>
<span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>先模拟一下对象内嵌套对象的情况（观察 <code>person.job</code>）：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ec50n9"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Student"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> personCopy <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 把 person 的属性复制到 personCopy</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> personCopy<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> personCopy<span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token literal-property property">job</span><span class="token operator">:</span> personCopy<span class="token punctuation">.</span>job <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: "ec50n9", age: 19, job: { title: "Student" } }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personCopy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: "ec50n9", age: 19, job: { title: "Student" } }</span>
<span class="token number">10111213141516171819</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在 👆 上面这个例子中，<code>person.job</code> 存放的是一个对象，准确来说，它存放的是对一个<em>对象的引用</em>，后面解构的时候 <code>job: personCopy.job</code> 所做的其实是把对象的引用复制过去了。</p>
<p>也就是说，现在 <code>person.job</code> 和 <code>personCopy.job</code> 指向的其实是同一个对象，尝试修改一下就可以发现：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>person<span class="token punctuation">.</span>job<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">"Teacher"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>job<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Teacher"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personCopy<span class="token punctuation">.</span>job<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Teacher"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>那么，如果想把 <code>job</code> 里面的属性也解构出来存放在一个新的对象中，就需要用到<em>嵌套解构</em>了，把上面的解构语句改写一下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 提前把 personCopy.job 初始化为一个对象，否则会 TypeError</span>
personCopy<span class="token punctuation">.</span>job <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> personCopy<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> personCopy<span class="token punctuation">.</span>age<span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> personCopy<span class="token punctuation">.</span>job<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: "ec50n9", age: 19, job: { title: "Teacher" } }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personCopy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: "ec50n9", age: 19, job: { title: "Teacher" } }</span>
<span class="token number">110111213</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>如果觉得上面的例子有些复杂，看看这个简单版的 👇：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ec50n9"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Student"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 解构</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> personName<span class="token punctuation">,</span>
    <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> jobTitle <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "ec50n9"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>jobTitle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Student"</span>
<span class="token number">101112</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="部分解构-解构出错" tabindex="-1"><a class="header-anchor" href="#部分解构-解构出错" aria-hidden="true">#</a> 部分解构（解构出错）</h2>
<p>如果一个解构表达式涉及多个赋值，开始的赋值成功而后面的赋值出错，则整个解构赋值<em>只会完成一部分</em>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ec50n9"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> personName<span class="token punctuation">,</span> personBar<span class="token punctuation">,</span> personAge<span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> personName<span class="token punctuation">,</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> personBar <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> personAge<span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personName<span class="token punctuation">,</span> personBar<span class="token punctuation">,</span> personAge<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ec50n9, undefined, undefined</span>
<span class="token number">10111213</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="参数上下文匹配" tabindex="-1"><a class="header-anchor" href="#参数上下文匹配" aria-hidden="true">#</a> 参数上下文匹配</h2>
<p>我们还可以对函数的参数进行解构，对参数解构不会影响 <code>arguments</code> 对象。</p>
<p>也就是说，<code>arguments</code> 里面仍存放着作为参数传入函数的对象，只是在<em>函数内部</em>会有解构出来的变量。</p>
<p>还是通过例子来说明吧：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printPerson</span><span class="token punctuation">(</span><span class="token parameter">foo<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> personName <span class="token punctuation">}</span><span class="token punctuation">,</span> bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>personName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ec50n9"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">printPerson</span><span class="token punctuation">(</span><span class="token string">"1st"</span><span class="token punctuation">,</span> person<span class="token punctuation">,</span> <span class="token string">"2nd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ["1st", { name: "ec50n9", age: 19 }, "2nd"]</span>
<span class="token comment">// "ec50n9"</span>
<span class="token number">10111213</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>
<p><a href="https://blog.csdn.net/qq_37774466/article/details/124066552" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_37774466/article/details/124066552<OutboundLink/></a></p>
</template>
