/**
 * @author Lin
 * @date 2019/11/21 16:27
 */

//jQuery提供的方法
/*
* 一、操作网页元素的方法
* 封装在jQuery.prototype
* */
/*
* 二、工具方法
*jQuery的属性方法，封装在构造函数中
* */
//工具方法是怎么实现，不需要实例就可调用？？？


//构造函数实现继承
function Animal(){
    this.species = "animal";
}
function Cat(name,color){

    this.name = name;
    this.color = color;
}
/*
* 1、call、apply绑定父类构造函数
* */
function Cat(name,color){

    Animal.apply(this, arguments);

    this.name = name;
    this.color = color;
}
/*
* 2、prototype模式
* */
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

/*
* 3、直接继承prototype
* */
function Animal(){ }
Animal.prototype.species = "animal";

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;

/*
* 4、利用空对象作为prototype中介
* */
function extend(Child, Parent) {

    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.uber = Parent.prototype;
}

/*
* 5、拷贝继承
* */
function extend2(Child, Parent) {

    var p = Parent.prototype;
    var c = Child.prototype;

    for (var i in p) {
        c[i] = p[i];
    }

    c.uber = p;

}

//非构造函数继承
var Chinese = {
    nation:'Chinese'
};
var Doctor ={
    career:'Doctor'
};
/*
* 1、object(o)
* */
function object(o) {

    function F() {}
    F.prototype = o;
    return new F();
}

/*
* 2、浅拷贝
* */
function extendCopy(p) {

    var c = {};

    for (var i in p) {
        c[i] = p[i];
    }

    c.uber = p;

    return c;
}

/*
* 3、深拷贝 ------jQuery的继承方式
* */
function deepCopy(p, c) {

    var c = c || {};

    for (var i in p) {

        if (typeof p[i] === 'object') {

            c[i] = (p[i].constructor === Array) ? [] : {};

            deepCopy(p[i], c[i]);

        } else {

            c[i] = p[i];

        }
    }

    return c;
}