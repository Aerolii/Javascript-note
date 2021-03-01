/*
 * @Author: wenyu_zxb
 * @Date: 2021-03-01 14:54:29
 * @LastEditTime: 2021-03-01 16:35:23
 * @LastEditors: wenyu_zxb
 * @Description:接口
 * @FilePath: /TypeScript/ts/interface.ts
 */
function printLabel(labelObj) {
    console.log('labelObj :>> ', labelObj);
}
// LabelledValue接口就好比一个名字，用来描述上面例子里的要求。
// 它代表了有一个 label属性且类型为string的对象。
// 需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。
// 我们只会去关注值的外形。
// 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
var obj = { size: 10, label: '123' };
printLabel(obj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var square1 = createSquare({});
console.log('square1 :>> ', square1);
var square2 = createSquare({ color: 'red' });
console.log('square2 :>> ', square2);
var square3 = createSquare({ color: 'green', width: 20 });
console.log('square3 :>> ', square3);
// let func: SearchFunc
// func = function (src: string, sub: string): boolean {
//   let res = src.search(sub)
//   return res > -1
// }
// func = function (src, sub) {
//   return src.search(sub) > -1
// }
var fn1 = function (src, sub) { return src.search(sub) > -1; };
var sfn1 = fn1('hello', 'o');
console.log('sfn1 :>> ', sfn1);
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
        this.h = h;
        this.m = m;
    }
    DigitalClock.prototype.tick = function () {
        // console.log('beep beep')
        console.log('this.h :>> ', this.h + ':' + this.m);
    };
    return DigitalClock;
}());
var AnlogClock = /** @class */ (function () {
    function AnlogClock(h, m) {
    }
    AnlogClock.prototype.tick = function () {
        console.log('tick tock');
    };
    return AnlogClock;
}());
var c1 = createClock(DigitalClock, 17, 19);
var c2 = createClock(AnlogClock, 14, 14);
console.log('c1 :>> ', c1);
console.log('c2 :>> ', c2);
