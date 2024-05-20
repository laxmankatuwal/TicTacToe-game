/*console.log("hello world");
console.log("i love you");
console.log("I am a coder");


fullname =  "laxman katuwal";
console.log(fullname);
 //age=24
console.log(age);
price=150.66
console.log(price);
x = null;
console.log(x);
y = undefined;
console.log(y);
isFOLLOW = false;
console.log(isFOLLOW);
fullname = 25;
console.log(fullname);

let fullName = "laxman";
let Price = 150.34;
console.log(price);
//age = 54;
console.log(age);


const PI = 3.14;
console.log(PI);

{

let a = 5;
console.log(a);
}


const students = {
    fullname: "Lucky Bhai",
    //age: 20,
    gpa: 3.23,
    isPass: true,
};

students["age"] = students ["age"] + 1;
console.log(students["age"]);




const product = {
    name : "ball pen",
    rating : 4,
    offer : 5,
    price : 270,
};
console.log(product);

const profile = {
    username:"@lxdon",
    follower: 123,
    following:23,
    isFOLLOW: true,
};

console.log(typeof profile["username"]);
console.log(typeof profile["isFOLLOW"]);*/


//this is a single line COMMENTS
//console.log('hello');

/*this is a multi line comment whic can write in multiple lines
that prints in console */
//console.log("Multi line comments");


//arithematic operators
/*let a=5;
let b=2;
console.log("a=", a,"& b=", b,);
console.log("a+b =", a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =", a/b);
console.log("a%b =", a%b);
console.log("a**b =", a**b); //5ko square= 25*/


/*UNARY OPERATORS
let a=5;
let b=2;
console.log("a=", a,"& b=", b,);
a++;//6
console.log("a=", a);
a--;//5
console.log("a=", a);*/

//assignment operators
//let a=5;
//let b=2;

//a += 4; //a=a+4
//console.log("a=", a);//a=9

//comparision operator

//let a=5;
//let b=2;

//console.log("5==2", a==b); // false 

//console.log("5!=2", a!=b); // true 

//let a=5; //num
//let b="5"; //string
//console.log("a===b",a===b); //fasle data type also check in strick comparision
//console.log("a!==b",a!==b);


/*let a=5;
let b=3;
console.log("5>3", a>b);
console.log("5>=3", a>=b);*/

//logical operators

//let a= 6;
//let b=5;

//let cond1 = a>b; //true
//let cond2 = a === 5; //true
//console.log("cond1 && cond2 =", cond1 && cond2);


//let a= 6;
//let b=5;

//let cond1 = a<b; //true
//let cond2 = a === 6; //true
//console.log("cond1 || cond2 =", cond1 || cond2);
//console.log("!6<5 =", !a<b);


//conditional statement

/*let age = 18; 
if(age >= 18) {
    console.log("you can vote");
}


if(age < 18){
    console.log("you can not vote");
}*/

/*let mode = "dark";
let color;

if(mode==="dark"){
    color = "black";
}
    if(mode==="light"){
        color = "white";

    }
console.log(color);*/

/*let age = 18;
if(age >= 18){
    console.log("Vote");
} else {
    console.log("cannot vote");
}*/

//odd even number check

/*let num = 10;
if(num%2===0){
    console.log(num ,"is even");
}else{ console.log(num , "is odd");
}*/



/*let mode = "orange";
let color;
 if(mode==="dark"){
    color="black";
 }else if(mode==="blue"){
    color="blue";
 }else if(mode==="pink"){
    color="pink";
 }else{
    color="white";
 }
console.log(color);*/


//ternary operators

/*let age = 25;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);*/

//practice question

/*let num = prompt("enter a num");
if(num % 5===0){
    console.log(num, "is multiple of 5");

}else{
    console.log(num, "is not multiple of 5");
}*/

/*let score = prompt("enter your score(0-100");
let grade;

if(score >= 90 && score <= 100){
    grade="A";
}else if(score >= 70 && score <= 89){
    grade="B";
}else if(score >= 60 && score <= 69){
    grade="C";
}else if(score >= 50 && score <= 59){
    grade="D";
}else if(score >= 0 && score <= 49){
    grade= "E";
}
console.log("your grade was", grade);*/


//LOOPS IJ JS to repeat same task

//console.log("helolo");
//console.log("helolo");
//console.log("helolo");
//console.log("helolo");
//console.log("helolo");


//for loop

//for(let count = 1; count <= 5; count++){
 //   console.log("hello"); //5time prints

//}


//calculate sum 1 to 5 number

// let sum = 0;
// for(i=1; i<=5; i++){
//     sum = sum +i;
// }
// console.log("sum", + sum);
// console.log("loop has ended");


//while loop

// let i=1;
// while(i<=5){
//     console.log("hi");
//     i++;
// }


// //do-while loop

// let i=1;
// do{
//     console.log("1=", i);
//     i++;
// } while(i<=5);

//for of loop

// let str = "QUEEN";
// for(let i of str){ //iterator = i(character)
//     console.log("i=", i);
// }



// let str = "QUEEN";
// let size = 0;
// for(let i of str){ 
//     console.log("i=", i);
//     size++;
// }
// console.log("string size=", size);

//for-in loop

// let student ={
//     name : "gauri",
//     age : 20,
//     gpa : 3.2,
//     isPASS :  true,
// };
// for(let key in student){
//     console.log("key=", key, "value=", student[key]);
// }

// //practice questions 1 print 1to 100 ?

// for(let sn=1; sn<=100; sn++){
//     console.log("sn=", sn);


//practice questions 2 print all even number from 0 to 100


// for(let num=0; num<=100; num++){
//     if(num%2===0){
//         console.log("num=",num);
//     }
// }


// for(let num=0; num<=100; num++){
//     if(num%2 !==0){
//         console.log("num=",num);
//     }
// }


// //practice questions 3 game mode

// let gameNum = 25;

// let userNum = prompt("guess the game number :");
//  while(userNum != gameNum){ 
//     userNum = prompt("you have entered wrong num, try again");

//  }
// console.log("congratulations, you enter the right num");

// let str = "Gauri";
// console.log(str[4]);

// //templates literial

// let specialStrings = `this is templates literails  ${1+2+3}`;
// console.log(specialStrings);

// //example

// let obj = {
//     item : "pen",
//     price : 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupee`;
// console.log("the cost of pen", "is", obj.price, "rupee");
// // console.log(output);

// console.log("laxman \n loves \t Gauri")

// let str = "    Gauri  thapa laxman    "; // remove whitespace trim method
// console.log(str.trim());

// let string = "098765";
// console.log(string.slice(1, 4)); //slice method

//  let str1 = "laxman";
//  let str2 = "Gauri";
//  let res = str1.concat(str2); // str1 + str2
//  console.log(res);


// let str = "hello G";
// // console.log(str.replace("hel", "Hey"));

// let str = "I Love You Bbe";
// console.log(str.charAt(5));


// let fullName = prompt("enter your fullName without no spaces");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);


// let mark = [23,45,54,67,65,65];
// console.log(mark);
// console.log(mark.length);

// //for loop
 //let heros =["batman", "roman", "sethroliin","srk","nukhil"];
// for(let i=0;  i < heros.length; i++);
// console.log(heros);

// //for of loop
// let heros =["batman", "roman", "sethroliin","srk","nukhil"];
// for (let hero of heros ){
//     console.log(hero);
// }

// let cities =["ktm" , "pok", "dhn", "npj", "rara"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// // practice question of array

// let marks = [45, 54, 67, 78, 98];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg of the class = ${avg}`);

// practice questions 2

// let items = [250,645,300,900,50];
// // let idx = 0;
// // for(val of items){
// // let offer = val/10;
// // items[idx]= items[idx]- offer;
// // console.log(`value after offer = ${items[idx]}`);
// // idx++;
// // }

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }
// console.log(items);


// let classRoom = ["ram","hari","shyam"];
// // classRoom.push("lax","sum"); //push()  method
// // console.log(classRoom);

// // classRoom.pop();  //pop() method
// // console.log(classRoom);

// console.log(classRoom);
// console.log(classRoom.toString()); // change array to string, toString() method
// console.log(classRoom);

//concat() method str1+str2

// let marvel =["thor","antman","ironman"];
// let desiHero =["spiderman", "batman"];
// let npHero = ["nikhil","rajesh", "biraj"];
// let heros = marvel. concat(desiHero , npHero);
// console.log(heros);

// let marvel = ["thor","yoyo","don"];
// // marvel.shift();   //shift() method remove item from start
// // console.log(marvel);

// marvel.unshift(); //  unShift() add item to satrt 
// console.log(marvel);

// let heros =["raj","nikhil","biraj","rekha","swostima","aryan","dilip"];
// console.log(heros);
// console.log(heros.slice(1 , 5)); // slice() method piece of array, org. array donot change

//splice( to add new, remove, replace ) change org. array

// let num = [1,2,3,4,5,6,7,];
// // num.splice( 2,2 ,101,102); 
// //num.splice(2,0,505); // add element
// //num.splice(3 , 1); // delete item
// num.splice(3, 1, 101); // to replace
// console.log(num);

// //practice questions
// let companies =[ "bloomberg", "microsoft","uber","google","ibm"," netflix"];
// companies.shift(); // to remove from first bloomberg
// companies.splice(2 , 1 ,"ola");
// companies.push("amazon");
// console.log(companies);


// function in js

// function myfunction() {
//     console.log("Hello Programmer" );
//     console.log("I am learning JS");
// }
// myfunction();
// myfunction();

// //function 2 num sum
// function sum  (x,y){
// s = x+y;
// return s;
// }
// let val = sum(3 ,5);
// console.log(val);

// //arrow function ()=>)

// const arrowSum = (a ,b) =>{ // arrow sum
//     console.log(a+b);
// }

// //arrow sum

// arrowMul = (a ,b) =>{
//     console.log(a*b);
// }

//return vowels with string pr question

// function  countVowels(str) {
//     let count = 0;
//     for(let char of str){
//         if(char==="a"|| char==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }
//     }
    
//     console.log(count);
// }
 //return(count);

//practice q 2 ?
 
// const countVow = (str) => {
//     let count = 0;
//     for(let char of str){
//         if(char==="a"|| char==="e" || char==="i" || char==="o" || char==="u"){
//             count++;
//         }
// //     }
    
// //     console.log(count);
// //}


// //forEach()loop in arrays, we can print values, index,and arrays in forEach loop of array/ only used for arrays

// let arr =[1,2,"ram" ,"shyam",3,4,5,65,6,];
// arr.forEach((val, idx,arr) =>{
//     console.log(val, idx, arr);
// })


// //practice question, arrays make square of each num using forEach loop

// let num= [ 2 ,3 ,4 ,5, 6 , 45, 54, 55];
// num.forEach((num) =>{
//     console.log(num*num); //num**2 second way to square
// })
// // arr.map method used to create new array
// let nums= [ 44 , 45, 54, 55];
// num.map((val) =>{
//     console.log(val); 
// })

// let number= [ 44 , 45, 54, 55];
// let newArr = num.map((val) =>{
//     return val*2; 
// })
// // console.log(newArr);

// let arr =[ 2, 3, 5, 6, 7,];
// let evenArr = arr.filter((val) =>{
//     return val %  2 ===0;
// // });
// // console.log(evenArr);

// let arr = [1, 2, 3, 4];
// const output = arr.reduce((prevs , curr) =>{
//     return prevs+curr;
// })
// console.log(output);

// //pr question 1
//  let marks = [98, 96, 67, 89, 99, 95, 92,];
//  let toppers = marks.filter((val) =>{
//     return val > 90;
//  })
//  console.log(toppers);

// // pr q 2
// let n = prompt("enter a number");
// let arr =[];
// for(let i =1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// //pr q 3
// let sum = arr.reduce((prev,curr) =>{
//     return prev +curr;
// })
// console.log(sum);


// let product = arr.reduce((prev , curr) =>{
//     return prev * curr;
// })
// console.log(product);


//DOM MANIPULATION
//1. selecting their id.=document.getElementById("myId");

// let heading = document.getElementById("heading"); //h1 used by #
// console.dir(heading);

//selecting their classname = document.getElementsByclassName("myclass"); = .

// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// //slelecting by tagName= document.getElementsByTagName("mytag");
// let paras = document.getElementsByTagName("p");
// console.dir(paras);

//let element = document.querySelector("p"); //return 1st element
//console.dir(element);

//let allelement = document.querySelectorAll("p"); //retrurn nodelist

// let element = document.querySelector(".heading-class"); 
// console.dir(element);

// let allelement = document.querySelectorAll(".heading-class");
// console.dir(element);


// let element = document.querySelector("#myId"); 
// console.dir(element);

// //practice questions

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
//  h2.innerText= h2.innerText+ " from apna college";

//  //pract8ice question 2
// let divs =document.querySelectorAll(".box");
// let idx=1;
// for (div of divs){
//     div.innerText=`new unique value${idx}`;
//     idx++;
// }
// divs[0].innerText="new qnique value of 1";
// divs[1].innerText="new qnique value of 2";
// divs[2].innerText="new qnique value of 3";

// // //prq 3

//  let newBtn = document.createElement("button");

//  newBtn.innerText ="click me";

//  newBtn.style.color ="white";
//  newBtn.style.backgroundColor ="red";

//  document.querySelector("body").prepend("newBtn");

