// import { sayGoodbye as bye, hello } from "./module1.js"
import * as say from "./module1.js"
import helloJS from "./module2.js"
function sayHi () {
    console.log('Hello Modles')
}

sayHi()

say.sayGoodbye()
say.hello()
helloJS()