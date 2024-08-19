//Lab01 Class ---------------------------------------------------------------------
// ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// value คือค่าตัวเลขปัจจุบัน(เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
// add() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// subtract() ให้รับค่าตัวเลขและหักออกจาก value
// multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// divide() ให้รับค่าตัวเลขและนำไปหาร value
// show() ให้ console.log ค่า value

// class Calculator {
//   constructor(value = 0) {
//     this.value = value;
//   }
//   add (num) {
//     this.value += num;
//     return this
//   }
//   subtract(num) {
//     this.value -= num;
//     return this
//   }
//   multiply(num) {
//     this.value *= num;
//     return this
//   }
//   divide(number) {
//     if (number === 0) {
//       console.log("Error: Cannot divide by zero");
//     } else {
//       this.value /= number;
//     }
//     return this;
//   }
//   show() {
//     console.log(this.value);
//     return this;
//   }
// }
// const calc = new Calculator(10);
// calc.add(5).subtract(3).multiply(2).divide(4).show();

//Lab02 Class ---------------------------------------------------------------------
// ให้สร้าง Class ชื่อ Sale
// มี property ชื่อ name, amount, price
// มี method calcPrice()
// ให้เขียน code คำนวณราคาไว้ที่ method นี้
// ให้สร้าง Class ชื่อ Beverage สืบทอดมาจาก Sale
// มี property ชื่อ amount, และ price
// ให้สร้าง object ชื่อ beverage จาก Beverage โดย
// name = “Pepsi”, amount = 3, price = 19
// ให้ beverage เรียก method calcPrice() และแสดงผลของ calcPrice() ที่ได้


// class Sale {
//   constructor(...name, ...amount, ...price) {
//     this.name = ...name;
//     this.amount = ...amount;
//     this.price = ...price;
//   }
//   calcPrice() {
//     return this.amount * this.price;
//   }
// }
// class Beverage extends Sale {
//   constructor(name, amount, price) {
//     super(name, amount, price);
//   }
// }

// const beverage = new Beverage('Pepsi', 3, 19);

// console.log(`Total price of ${beverage.name} is: ${beverage.calcPrice()} THB`);

//Lab01 Static Method--------------------------------------------------------------------
//จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่ 
// let check1 = [1, 2, 2, 3]
// let check2 = {
//   name: 'John'
// };

//   function isArray(input) {
//     return console.log(Array.isArray(input))
//   };

//   isArray(check1)
//   isArray(check2)


//Lab01 Object keys, values, entries--------------------------------------------------------------------
//ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;

//   for (let value of Object.values(salaries)) {
//     sum += value;
//   }

// console.log(sum)

//Lab02 Object keys, values, entries--------------------------------------------------------------------
//ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่

// let check1 = [1, 2, 2, 3];
// let check2 = {
//   name: 'John'
// };
// let check3 = [];
// let check4 = {};

// function checkEmptyObj(obj) {
//     if (Object.entries(obj).length == 0) {
//       console.log(`This object is empty`)
//     } else {
//       console.log(`This object is 'Not' empty`)
//     };
//   };

//   checkEmptyObj(check1)
//   checkEmptyObj(check2)
//   checkEmptyObj(check3)
//   checkEmptyObj(check4)

//lab01 Rest and Spread operator --------------------------------------------------------------------
// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

// function mul(...number) {
//   let result = 1;
//   for (let num of number) result *= num;
//   return result
// }

// console.log(mul(3))
// console.log(mul(5,2))
// console.log(mul(10,25,25))
// console.log(mul(3,5,6,8,20))
// console.log(mul(1,2,3,4,5,6,7,8,9,10))
// console.log(mul(50,60))

//lab02 Rest and Spread operator --------------------------------------------------------------------
// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

// function filterOutOdds(...numbers) {
//   let evenNumbers = []
//   let oddNumbers = []
//     for (let num of numbers) {
//       num % 2 === 0  ? evenNumbers.push(num) : oddNumbers.push(num);
//     }
//     return evenNumbers
// }

// console.log(filterOutOdds(1,2,3,4,5,6,7,8,9,10))
// console.log(filterOutOdds(101, 102, 103, 104,105,106,107,108,109,110))

//lab03 Rest and Spread operator --------------------------------------------------------------------
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// function mergeObjects(...objs) {
//   let result = {};
//   for (let obj of objs) {
//     result = {...result,...obj}
//   }
//   return result
// }

// const obj1 = { nickname: 'Apple', fname: 'Sasita' };
// const obj2 = { lname: "Srisura", ages: 23 };
// const obj3 = { city: 'Nakorn Rachasima' };

// console.log(mergeObjects(obj1, obj2, obj3));

//lab04 Rest and Spread operator --------------------------------------------------------------------
// จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม - 6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// let newNums = [5, ...nums1, - 6, -1,...nums2]
// console.log(newNums)
// let result = 0;
// for (let num of newNums) {
//   result += num
// }

// console.log(result);

//lab05 Rest and Spread operator --------------------------------------------------------------------
// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// const array1 = [1,2,3,4,5,6]
// function newArray (...arrs) {
//   let newArrs = [...arrs[0]];
//   newArrs.length > 3 
//   ? newArrs[3] = newArrs[3] **2
//   :'Error'
//   return newArrs;
// }

// console.log(newArray(array1)); 

//lab06 Rest and Spread operator --------------------------------------------------------------------
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter

// function resume(name, lname, ...hobbies) {
//   const result = {
//     name: name,
//     lname: lname,
//     hobbies: hobbies,
//     numberOfHobbies: hobbies.length
//   };

//   return result;
// }

// console.log(resume('apple', 'Srisura', 'play game', 'Sleep'));

//lab07 Rest and Spread operator --------------------------------------------------------------------
// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

// function doubleAndReturnArgs(arr, ...numbers) {
//   let result = [...arr];

//   for (let num of numbers) {
//     result.push(num * 2);
//   }
//   return result;
// }

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4));

//lab09 Rest and Spread operator --------------------------------------------------------------------
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
//จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// let check1 = [1, 2, 3, 5, 4]
// function cloneArray (arr) {
//   return [...arr];
// }
// let clonedCheck1 = cloneArray(check1)
// console.log(check1);
// console.log(cloneArray(check1));

// console.log(check1 === cloneArray(check1));

//lab10 Rest and Spread operator --------------------------------------------------------------------

// let check1 = {
//   name: 'Boeing',
//   city: 'Chiang Rai'
// }
// function cloneObject(obj) {
//   return { ...obj };
// }

// let clonedCheck1 = cloneObject(check1);

// console.log(check1);
// console.log(cloneObject (check1));

// console.log(check1 === cloneObject(check1));

//lab11 Destructuring --------------------------------------------------------------------

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // *​Maya
// console.log(second); // **​Marisa
// console.log(third); // ***Chi


//lab12 Destructuring --------------------------------------------------------------------

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];

// console.log(raindrops); // *​Raindrops on roses
// console.log(whiskers); // **​whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // ***(2)['Bright copper kettles','warm woolen mittens']

//lab13 Destructuring --------------------------------------------------------------------

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// console.log(numbers); // *[ 10,30,20 ]

//lab14 Destructuring --------------------------------------------------------------------

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // *​8
// console.log(yearNeptuneDiscovered); // **1846

//lab15 Destructuring --------------------------------------------------------------------

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *{ yearMarsDiscovered: 1659,yearNeptuneDiscovered: 1846}

//lab16 Destructuring --------------------------------------------------------------------

// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *​"Your name is Alejandro and you like purple"
// getUserData({ firstName: 'Melissa' }); // **​"Your name is Melissa and you like green"
// getUserData({}); // ***"Your name is undefined and you like green"

//lab17 Destructuring --------------------------------------------------------------------
//ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin
// let guest = 'Jane';
// let admin = 'Pete';

// [guest, admin] = [admin, guest];

// console.log(guest); 
// console.log(admin);

//lab18 Destructuring --------------------------------------------------------------------
//จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)

// function checkAge(user = { firstName: 'Unknown', lastName: 'Unknown', age: 0 }) {
//   const { firstName, lastName, age } = user;
//   if (age > 18) {
//     return `Hello ${firstName} ${lastName}`;
//   } else {
//     return `You don't have permission for this website`;
//   }
// }

// console.log(checkAge({ firstName: 'Jane', lastName: 'Doe', age: 20 })); // "Hello Jane Doe"
// console.log(checkAge({ firstName: 'John', lastName: 'Smith', age: 17 })); // "You don't have permission for this website"
// console.log(checkAge());

//lab19 Destructuring --------------------------------------------------------------------
//จงเขียน Object destructuring โดยกำหนดให้​
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

// let user = {name: 'John',years: 27};

// const {name,years: age,isAdmin = false} = user;

// console.log(name);   
// console.log(age);    
// console.log(isAdmin);

//lab21 Destructuring --------------------------------------------------------------------
//ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ

// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr

// console.log(a, b , c, d, e, f);

//lab22 Destructuring --------------------------------------------------------------------
//ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10

// const obj = { prop: 5, prop2: 10 };
// const {prop:a, prop2:b} = obj

// console.log(a);
// console.log(b);

//lab23 Destructuring --------------------------------------------------------------------
//a และ b มีค่าเท่าไร

// let a, b;
// { a, b } = { a: 1, b: 2 };

// //ถูกตีความว่าเป็นบล็อกโค้ด แทนที่จะเป็นการทำลายออบเจ็กต์เพราะใช้วงเล็บปีกกา

//lab24 Destructuring --------------------------------------------------------------------
//a และ b มีค่าเท่าไร

// const [, , , a, b] = [1, 2, 3];

// console.log(a) //undefined
// console.log(b) //undefined
//เพราะ a,d เป็นการเข้าถึง 4 และ 5 ซึ่งค่ามีให้มีแค่ 1-3 ทำให้ a,b ไม่มีค่า

//lab25 Destructuring --------------------------------------------------------------------
//ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100
// const q = { prop: 5, prop2: [10, 100] };
// const {prop:x, prop2:[,y]} = q;

// console.log(x,y)

//lab26 Destructuring--------------------------------------------------------------------
//ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// const { prop:x ,prop2:{prop2:{nested:[,y]}}} = q

// console.log(x, y)

//lab27 Destructuring --------------------------------------------------------------------
//ให้ใช้ for … of กับ names (ให้ destructuring object ในแต่ละ iteration)​
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา

// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];
// for (let item of names) {
//   const {firstName, lastName} = item
//   console.log(firstName, lastName)
// }

//lab28 Destructuring --------------------------------------------------------------------
// ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown

// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];
// for (let item of users) {
//   const {user, age = 'unkonwn'} = item
//   console.log(user, age);
// }

