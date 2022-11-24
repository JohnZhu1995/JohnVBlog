# 对象解构

在 js 中，如果我们需要把一个*对象*里面的*属性*提取出来放到自定义的*变量*上，在不使用对象解构的情况下可能会写出这样的代码：

```js
// 示例对象
let person = {
    name: "ec50n9",
    age: 19,
    job: "student",
};

// 挨个赋值
let personName = person.name,
    personAge = person.age,
    personJob = person.job;
```

这样写是没什么问题的，但是对比使用*对象解构*的写法，上面这种写法就略显复杂了

## 对象解构的基本用法

来看看使用了对象解构的写法：

```js
// 上面的赋值代码变成了这样👇
let { name: personName, age: personAge, job: personJob } = person;

console.log(personName); // "ec50n9"
console.log(personAge); // 19
```

可以看到在对象解构的写法中，等号左边的写法就*类似于一个对象*，只不过属性名对应的不是值，而是*将要赋值的变量名*，下面这代码可能更直观些：

```js
// 左边是解构，右边是对象
let { name: personName, age: personAge } = { name: "ec50n9", age: 19 };
```

我觉得可以把左边的对象解构语句理解成是一个填空的模板，js 只是在帮我们做填空题，这样一来，👇 下面的这些对象解构的特性就好理解些了。

## 忽略部分属性

如果只想赋值 `personName` 和 `personAge` 变量的话，不写 `job` 就可以了：

```js
let { name: personName, age: personAge } = person;
```

## 简写语法

如果想让变量*直接使用属性的名称*，可以使用简写语法 ⬇️

```js
let { name, age } = person;
console.log(name); // "ec50n9"
console.log(age); // 19
```

## 定义默认值

有时候，可能被解构的对象中*没有被引用的属性*，可以通过下面这种方法来定义*默认值*，也就是如果对象中没有对应属性，就使用默认值：

```js
let { name = "no Name", sex = "男", height } = person;

console.log(name); // "ec50n9"  对象中有 name 属性✅，所以使用对象中的值
console.log(sex); // "男"      对象中没有 sex 属性❌，使用默认值
console.log(height); // undefined 对象中没有 height 属性❌，也没有默认值
```

## 对原始值进行解构

> 解构在内部使用函数 `ToObject()` 来把源数据结构转换为对象。

这意味着，你可以对 `"str"`、`123` 这种原始值进行解构：

```js
// 解构字符串
let { length } = "foobar";
console.log(length); // 6

// 解构并取得对象的构造器
let { constructor: c } = 4;
console.log(c === Number); // true
```

> 实际上，原始值本身并非对象，只是在对象解构的时候，在对象解构的上下文中临时生成了一个*包装对象*来被解构（也就是 `ToObject()` 所做的事情），在对象解构完成之后就会被销毁。具体可以搜索*“原始值包装类型”*。

因为*数组也是对象*，所以自然也可以对它进行解构, 只是*属性名是下标*，看起来比较奇怪：

```js
let name_list = ["ec50n9", "xiao"];

let { 0: my_name, 1: her_name } = name_list;

console.log(my_name, her_name); // ec50n9 xiao
```

假如数组里面装的是对象，也可以利用*嵌套解构*（下面有介绍）来对数组中的对象进行解构：

```js
let array = [
    { name: "ec50n9", age: 19 },
    { name: "xiao", age: 18 },
];

let {
    0: { name: name_A, age: age_A },
    1: { name: name_B, age: age_B },
} = array;

console.log(name_A, age_A); // ec50n9 19
console.log(name_B, age_B); // xiao 18
10;
```

## `null` 和 `undefined` 不能被解构

根据 `ToObject()` 的定义，`null` 和 `undefined` 不能被解构，否则会抛出错误：

```js
let { _ } = null; // TypeError
let { _ } = undefined; // TypeError
```

> 这里的 `_` 只是用于测试而已，实际上对象里面并没有 `_` 这个属性。因为在尝试解构 `null` 的时候就已经报错了，不管前面解构的属性名是什么都是同样的结果。

## 给事先声明的变量赋值

解构并不要求变量必须在解构表达式中声明。不过，如果是事先声明的变量赋值，则赋值表达式必须包含在一对括号中：

```js
let personName, personAge;

let person = {
    name: "ec50n9",
    age: 19,
};

({ name: personName, age: personAge } = person);

console.log(personName, personAge); // ec50n9 19
10;
```

先模拟一下对象内嵌套对象的情况（观察 `person.job`）：

```js
let person = {
    name: "ec50n9",
    age: 19,
    job: {
        title: "Student",
    },
};

let personCopy = {};

// 把 person 的属性复制到 personCopy
({ name: personCopy.name, age: personCopy.age, job: personCopy.job } = person);

console.log(person); // { name: "ec50n9", age: 19, job: { title: "Student" } }
console.log(personCopy); // { name: "ec50n9", age: 19, job: { title: "Student" } }
10111213141516171819;
```

在 👆 上面这个例子中，`person.job` 存放的是一个对象，准确来说，它存放的是对一个*对象的引用*，后面解构的时候 `job: personCopy.job` 所做的其实是把对象的引用复制过去了。

也就是说，现在 `person.job` 和 `personCopy.job` 指向的其实是同一个对象，尝试修改一下就可以发现：

```js
person.job.title = "Teacher";

console.log(person.job.title); // "Teacher"
console.log(personCopy.job.title); // "Teacher"
```

那么，如果想把 `job` 里面的属性也解构出来存放在一个新的对象中，就需要用到*嵌套解构*了，把上面的解构语句改写一下：

```js
// 提前把 personCopy.job 初始化为一个对象，否则会 TypeError
personCopy.job = {};

({
    name: personCopy.name,
    age: personCopy.age,
    job: { title: personCopy.job.title },
} = person);

console.log(person); // { name: "ec50n9", age: 19, job: { title: "Teacher" } }
console.log(personCopy); // { name: "ec50n9", age: 19, job: { title: "Teacher" } }
110111213;
```

如果觉得上面的例子有些复杂，看看这个简单版的 👇：

```js
let person = {
    name: "ec50n9",
    job: {
        title: "Student",
    },
};

// 解构
let {
    name: personName,
    job: { title: jobTitle },
} = person;

console.log(personName); // "ec50n9"
console.log(jobTitle); // "Student"
101112;
```

## 部分解构（解构出错）

如果一个解构表达式涉及多个赋值，开始的赋值成功而后面的赋值出错，则整个解构赋值*只会完成一部分*：

```js
let person = {
    name: "ec50n9",
    age: 19,
};

let personName, personBar, personAge;

try {
    ({
        name: personName,
        foo: { bar: personBar },
        age: personAge,
    } = person);
} catch (e) {}

console.log(personName, personBar, personAge);
// ec50n9, undefined, undefined
10111213;
```

## 参数上下文匹配

我们还可以对函数的参数进行解构，对参数解构不会影响 `arguments` 对象。

也就是说，`arguments` 里面仍存放着作为参数传入函数的对象，只是在*函数内部*会有解构出来的变量。

还是通过例子来说明吧：

```js
function printPerson(foo, { name: personName }, bar) {
    console.log(arguments);
    console.log(personName);
}

let person = {
    name: "ec50n9",
    age: 19,
};

printPerson("1st", person, "2nd");
// ["1st", { name: "ec50n9", age: 19 }, "2nd"]
// "ec50n9"
10111213;
```

## Reference

[https://blog.csdn.net/qq_37774466/article/details/124066552](https://blog.csdn.net/qq_37774466/article/details/124066552)
