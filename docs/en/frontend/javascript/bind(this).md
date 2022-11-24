# bind(this)写法

## this

-   JavaScript 函数中的 this 不是在函数声明的时候定义的，而是在函数调用（即运行）的时候定义的
-   谁调用这个函数，this 就指向谁

## bind

bind 方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind 方法的第一个参数作为 this,传入 bind 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.
关键词：

-   bind 是创建了一个新的函数。

## 丢失上下文

```js
var obj = {
    f: function () {
        console.log(this);
    },
};

function foo(f) {
    f();
}
foo(obj.f);
```

foo 运行时接收到的参数 f 时，foo 是并不知道 f 是 obj 的属性的，也就是常说的丢失了上下文。

## react 的例子

```js
const STR = "被调用，this指向：";

class IndexPage extends React.Component {
    //测试函数
    handler() {
        console.log(`handler ${STR}`, this);
    }
    render() {
        console.log(`render ${STR}`, this);
        return (
            <div>
                <h1>hello World</h1>
                <label htmlFor="btn">单击打印函数handler中this的指向</label>
                <input
                    id="btn"
                    type="button"
                    value="单击"
                    onClick={this.handler}
                />
            </div>
        );
    }
}
```

```js
# 刷新页面
render 被调用，this指向： IndexPage {props: {…}, context: {…}, refs: {…}, updater: {…}, _reactInternalFiber: FiberNode, …}
# 点击按钮
handler 被调用，this指向： undefined

```

这里也是一样的，你只是把这个函数传给了 button 组件，并没有把函数的上下文传给 button，button 组件并没有收到这个上下文（即组件实例），当然也就不知道该把 handleClick 函数里的 this 设置为你期望的组件实例了。

## 怎么改

### 写法一

直接在事件里面绑定，这样不好，因为每次执行都会绑定，有损性能

```js
_handleClick(e){
  console.log(this);
}
render(){
  return (
     <h1 onClick={this._handleClick.bind(this)}>点击<h1>
	// 或者这个，是es新语法
	<h1 onClick={::this._handleClick}>点击<h1>
 )
}
```

### 写法二

```js
constructor(props){
    super(props);
    this._handleClick=this._handleClick.bind(this)
}
_handleClick(e){
     console.log(this);
}
render(){
   return(
      <div><h1 onClick={this._handleClick}>点击</h1></div>
  )
}
```

### 写法三

箭头函数不需要绑定，箭头函数的 this 是继承父级的 this

```js
_handleClick=(e)=>{
        //使用箭头函数
       console.log(this);
 }
render(){
   return (
      <div><h1 onClick={this._handleClick}>点击</h1></div>
  )
}
```

## 所以 map 方法要传第二个参数

```js
var obj = {
    value: 1,
    mapper: function () {
        return this.value;
    },
}[(1, 2, 3)].map(obj.mapper); // [undefined, undefined, undefined]
[1, 2, 3].map(obj.mapper, obj); // [1, 1, 1]
```

## 例一

```js
<body>
    <button type="button" id="button">按钮</button>
</body>
<script type="text/javascript">
var logger = {
    x: 0,
    updateCount: function () {
        this.x++;
        console.log(this);
        console.log(this.x);
    },
};
// 下面两段代码的实现是一样的

// document.getElementById('button').addEventListener('click', function(){
//     logger.updateCount();
// });

document.getElementById("button").addEventListener("click", logger.updateCount);
</script>
```

本来通常情况下处理函数都要用一层匿名函数包裹一下，才能维持处理函数本身的 this.这里直接通过.bind(logger)人为的将其执行时的 this 指向 logger 对象。

## 例二

```js
function ReplaceProcessor() {
    this._dom = {
        btnReplace: $("#ro_btnReplace"),
        btnComplete: $("#ro_btnComplete"),
    };
    // Bind events
    this._dom.btnReplace.on("click", this._onReplace.bind(this));
    this._dom.btnComplete.on("click", this._onComplete.bind(this));
}

ReplaceProcessor.prototype._onReplace = function () {
    // code
    this._dom.btnComplete.html("OK");
};
```

bind 主要是为了改变函数内部的 this 指向

## 例三

```js
function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
    window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
    console.log("I am a beautiful flower with " + this.petalCount + " petals!");
};
```

看一下这里 this.dclare.bind(this)，相当于将 LateBloomer 的实例对象传递到 declare 中，是不是 setTimeout 简洁了很多，同时不会破坏其他执行函数的结构。

## 例四

```js
$.ajax({
    url: url,
    type: "post",
    dataType: "json",
    data: { info: info },
}).done(
    function (data) {
        if (data.status) {
            // 这里this指向的是外层bind进来的this
            this._data.process_type = info.process_type;
        } else {
            uUnique.noticeBox.showWarning(data.message);
        }
    }.bind(this)
);
```

## 看不太懂

```js
//设立一个简单地对象作为“上下文”
var context = { foo: "bar" };

//一个在this上下文中指向foo变量的函数
function returnFoo() {
    return this.foo;
}

// 变量在作用域中不存在，因此显示undefined
returnFoo(); // => undefined

// 如果我们把它绑定在context上下文中
var bound = returnFoo.bind(context);

// 现在的作用域中有这个变量了
bound(); // => "bar"

//
// 这就是Function.prototype.bind的作用.
//由于returnFoo也是函数，因此它继承了function的原型
//
// 如果你觉得享受，接着往下读，下面更精彩
//

// 有许多方法将函数绑定在一个上下文中
// Call和Apply让你能在上下文中调用函数
returnFoo.call(context); // => bar
returnFoo.apply(context); // => bar

// 将函数添加到对象中
context.returnFoo = returnFoo;
context.returnFoo(); // => bar

//
// 现在我们来玩一点诡异的东西
//

// Array.prototype 中有一个叫做slice的方法
// 对一个数组调用slice，可以返回一个从start index到end index的数组
[1, 2, 3].slice(0, 1); // => [1]

// 因此我们把Array.slice赋值给一个本地变量slice
var slice = Array.prototype.slice;

//现在的slice是"自由的"，由于Array.prototype中的slice一般指定了上下文
//或者默认为this,此时slice将不起作用
slice(0, 1); // => TypeError: can't convert undefined to object
slice([1, 2, 3], 0, 1); // => TypeError: ...

// 但是如果我们使用call或者apply，slice又将在一个上下文中执行
slice.call([1, 2, 3], 0, 1); // => [1]

// Apply和Call差不多，知识参数要放在一个数组中
slice.apply([1, 2, 3], [0, 1]); // => [1]

// 使用call没错了，那么能不呢使用bind呢？
// 没错，我们来把"call"绑定在slice上
slice = Function.prototype.call.bind(Array.prototype.slice);

// 现在slice可以把第一个参数作为上下文了
slice([1, 2, 3], 0, 1); // => [1]

//
// 很酷，对吧。现在再来完成一件事
//

// 现在我们对bind本身做一件刚才对silce做的事
var bind = Function.prototype.call.bind(Function.prototype.bind);

// 在这里总结一下，好好想想
// 发生了什么事? 我们改变了call，
// 返回一个接收一个函数和一个上下文作为ic桉树的函数
//并且返回了一个完全绑定的函数

// 回到最初的例子
var context = { foo: "bar" };
function returnFoo() {
    return this.foo;
}

// 现在来使用神奇的"bind"函数
var amazing = bind(returnFoo, context);
amazing(); // => bar
```

## 暴力办法

如果实在弄不清，写 react 有个简单暴力的方法，即：

在所有生命周期函数上都用普通函数，即绑定 this 的函数，其他所有函数全部用箭头函数。

因为实际上 react 主动调用的是生命周期函数，然后再在里面调用自定义函数，这些可以自动绑定到 this。

## Reference

[https://blog.csdn.net/weixin_43972437/article/details/105436443](https://blog.csdn.net/weixin_43972437/article/details/105436443)
