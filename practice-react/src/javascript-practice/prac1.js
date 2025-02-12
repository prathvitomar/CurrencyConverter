//  call is used for calling a function with context, apply works same like call but takes arguments as array.
//  and Bind method is used for binding to a function with context and returns a new function.
//                          BELOW are CALL, APPLY AND BIND :

// const arr = [3,4,6,10,12];
// const newArr1 = arr.map((item,i)=> item + 2);
// arr.forEach((item,i)=> console.log(item + 2));
// console.log(arr)
// console.log(newArr1)
// console.log(newArr2)

// let arr = [1,2,3,[34,[["a"], "23"], true], {air : 1},10];
// const arr1 = arr.flat(3);
// console.log(arr1)

// var person = {
//     name : 'John',
//     hello : function(){
//         console.log(`Hello ${this.name} and ${this.age}`)
//     }
// }

// let names = {
//     name : 'Heloooooooooooooooo',
//     age : '23'
// }
// person.hello()
// person.hello.call(names);

// var person2 = {
//     gender : 'male',
//     guess : function(address, city) {
//         console.log(`Hello ${this.person} from ${address} and ${city}`);
//     }
// }
// var prathvi = {
//     person : 'prathvi'
// }
// person2.guess.apply(prathvi, ['Bhopal', 'Bangalore'])

// var obj3 = {
//     laptop : function(modelNo, company){
//         console.log(`Old Model is ${this.modelNo} and new Model no. ${modelNo} and Company ${company}`)
//     }
// }
// var modelNo = {
//     modelNo : 'Ters56aG'
// }
// obj3.laptop.apply(modelNo, ['PRaTba^7','HP']);

// var obj4 = {
//     print : function(){
//         console.log(`THis is Context ${this.name}`)
//     }
// }
// var obj5 = {
//     name : 'Yooooooooooooooo'
// }
// var newFunc = obj4.print.bind(obj5);
// newFunc();

// let func = {
//     count : 0,
//     add : function(value){
//         return this.count += value; 
//     },
//     sub : function(value){
//         return this.count -= value;
//     },
//     mul : function(value){
//         return this.count *= value
//     }
// }

// console.log(func.add(5));
// console.log(func.sub(2));
// console.log(func.mul(8));


// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve('THis is First Promise'), 5000);
// })

// let p2 = new Promise((resolve, reject)=>{
    // setTimeout(()=> resolve('THis is Second Promise'), 3000);
    // setTimeout(()=> reject('REJECTED Second Promise'), 3000);
// })

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve('THis is Third Promise'), 7000);
// })

// Promise.all([p1,p2,p3]).then((res)=> console.log(res)).catch((err)=> console.log(err));
// Promise.allSettled([p1,p2,p3]).then((res)=> console.log(res)).catch((err)=> console.log(err));
// Promise.race([p1,p2,p3]).then((res)=> console.log(res)).catch((err)=> console.log(err));
// Promise.any([p1,p2,p3]).then((res)=> console.log(res)).catch((err)=> console.log(err));

// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }
// function a(){
//     console.log(x);
// }
// var x = 100;
// a();

// var a = 10;
// let x = 20;
// {
//     var a = 100;
//     let x = 2;
//     let y = 3;
//     console.log(x);
//     console.log(y);
//     console.log(a);
// }
// console.log(a);
// console.log(x);

// function x(a){
//     return function(b){
//         console.log(a+b);
//     }
// }
// x(4)(6);

// function evaluate(operation){
//         return function(a){
//             return function(b){
//                 if(operation==='add'){
//                     return a+b;
//                 }
//                 if(operation==='sub'){
//                     return a-b;
//                 }
//                 if(operation==='mul'){
//                     return a*b;
//                 }
//                 if(operation==='div'){
//                     return a/b;
//                 }
//             }
//         }
// }
// console.log(evaluate('div')(3)(4))

// function infiniteCurry(a){
//     return function(b){
//         if(b) return infiniteCurry(a+b);
//         return a;
//     }
// }
// console.log(infiniteCurry(3)(4)(2)())

// let obj = function(a){
//     delete a;
//     return a;
// }
// console.log(obj(3));

// const name = 'Prathvi';
// const age = 25;

// let obj = {
//     name : 'Gappu',
//     age : 26,
//     home : 'Berasia',
//     add : () =>{
//         console.log(`${name} and ${age}`);
//     }
// }

// obj.add();
// console.log(Object.keys(obj));
// for(let key in obj){
//     console.log(obj[key]);
// }

// let nums = {
//     a : 10,
//     b : 20,
//     c : 'House'
// }
// let ans;
// for(let values in nums){
//     if(typeof values === 'number'){
//         ans.push(values*2);
//     }
// }
// console.log(ans);


// let house1 = {
//     name : 'Bhopal',
//     city : 'Mumbai',
//     state : 'Madhya Pradesh'
// }

// let house2 = {
//     name : 'Ujjain',
//     city : 'Bangalore',
//     state : 'Maharashtra'
// }

// function print(laptop) {
//     console.log(this.name, this.city, this.state, laptop);
// }

// print.call(house1, "HP");
// print.apply(house1, ["HP"]);
// const printInfo = print.bind(house1, 'DELL');
// printInfo();


// var x = 10;
// function test() {
//   console.log(x);
//   var x = 20;
//   console.log(x);
// }
// test();
