<template>
  <div id="app">
    <h1 class="h1">hello world</h1>
  </div>
</template>

<script lang="ts">
import { cloneVNode, defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    /**
     * 基本数据类型
     */
    // Boolean
    const isDone: Boolean = false
    // String
    const isString: String = '123'
    // Number
    const isNum: Number = 123
    /**
     * 引用类型
     */
    // 数组
    const isArr: number[] = [1, 2, 3, 4]
    console.log('isArr :>> ', isArr)
    const isArr2: Array<number> = [12, 13, 14]
    console.log('isArr2 :>> ', isArr2)
    // 元组
    // 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
    let tuple: [string, number]
    tuple = ['123', 123]
    // 枚举
    // enum类型是对JavaScript标准数据类型的一个补充 使用枚举类型可以为一组数值赋予友好的名字。
    enum Color {
      Red = 1,
      Green,
      Blue
    }
    const c: Color = Color.Red
    console.log('c :>> ', c)
    const cName: String = Color[2]
    console.log('cName :>> ', cName)
    /**
     * 类型断言
     */
    const someString: any = '123456'
    const len: number = (<string>someString).length
    const len1: number = (someString as string).length
    console.log('len :>> ', len)
    console.log('len1 :>> ', len1)
    /**
     * 接口只会去关注值的外形
     * 用来描述例子里的要求
     * 只要传入的对象满足上面提到的必要条件，那么它就是被允许的
     */
    interface Person {
      name: string
      age: number
      gender: string
    }
    const fn1 = (person: Person): void => {
      console.log('person.name :>> ', person.name)
      console.log('person.age :>> ', person.age)
      console.log('person.gender :>> ', person.gender)
    }
    fn1({ name: 'weenie', age: 31, gender: '男' })
    /**
     * 可选属性
     */
    interface Animal {
      name?: string
      color: string
    }
    const fn2 = (animal: Animal): { color: string } => {
      return { color: animal.color }
    }
    const pf2 = fn2({ color: 'red' })
    console.log('pf2 :>> ', pf2)
    /**
     * 只读属性
     * readonly来指定只读属性:
     */
    interface Point {
      readonly x: number
      readonly y: number
    }
    const p1: Point = { x: 10, y: 20 }
    console.log('p1 :>> ', p1)
    // ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
    const a: Array<number> = [1, 2, 3, 4]
    const rArr: ReadonlyArray<number> = a
    /**
     * 函数类型
     * 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
     */
    interface SearchFunc {
      (source: string, subString: string): boolean
    }
    const fn3: SearchFunc = (src: string, sub: string) => src.search(sub) > -1
    const s = fn3('123', '1')
    console.log('s :>> ', s)
    /**
     * 可索引的类型
     */
    interface StringArray {
      [index: number]: number
    }
    let sArr: StringArray = [1, 2]

    /**
     * 类静态部分与实例部分的区别
     */
    interface ClockConstructor {
      new (hour: number, minute: number): ClockInterface
    }
    interface ClockInterface {
      tick(): void
    }
    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
      return new ctor(hour, minute)
    }
    class DigitalClock implements ClockInterface {
      // 构造函数属于静态部分
      constructor(h: number, m: number) {}
      tick() {
        console.log('1 :>> ', 1)
      }
    }
    class AnalogClock implements ClockInterface {
      constructor(h: number, m: number) {}
      tick() {
        console.log('2 :>> ', 2)
      }
    }
    const c1 = createClock(DigitalClock, 12, 10)
    const c2 = createClock(AnalogClock, 10, 22)
    console.log('c1,c2 :>> ', c1, c2)
    c1.tick()
    c2.tick()
    /**
     * 继承接口
     */
    interface Shape {
      color: string
    }
    interface Square extends Shape {
      sideLength: number
    }
    const sq1 = <Square>{}
    sq1.color = 'red'
    sq1.sideLength = 10
    console.log('sq1 :>> ', sq1)

    // 一个接口可以继承多个接口，创建出多个接口的合成接口。
    interface PenStroke {
      penWidth: number
    }
    interface Draw extends Shape, PenStroke {
      slideLen: number
    }
    const d1 = <Draw>{}
    d1.slideLen = 10
    d1.color = 'red'
    d1.penWidth = 20
    console.log('d1 :>> ', d1)

    /**
     * 类
     */
    class AnimalClass {
      name: string
      constructor(tName: string) {
        this.name = tName
      }
      move(dis: number) {
        console.log('this.name :>> ', `${this.name}跑了${dis}m`)
      }
    }
    class Snake extends AnimalClass {
      constructor(name: string) {
        super(name)
      }
      move(dis: number) {
        super.move(dis)
      }
    }
    class Horse extends AnimalClass {
      constructor(name: string) {
        super(name)
      }
      move(dis: number) {
        super.move(dis)
      }
    }
    const snake = new Snake('snake')
    const horse = new Horse('horse')
    snake.move(10)
    horse.move(100)
    class Demo {
      private name: string
      constructor(name: string) {
        this.name = name
      }
    }
    class Test extends Demo {
      protected department: string
      constructor(name: string, department: string) {
        super(name)
        this.department = department
      }
      /**
       * name
       */
      public getPitch() {
        return `hello, this is a ${this.name} and i work in ${this.department}`
      }
    }
  }
})
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .h1 {
    font-size: 20px;
  }
}
</style>
