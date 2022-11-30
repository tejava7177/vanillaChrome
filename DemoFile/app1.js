// alert("java scipt");

console.log(1234);      //log == print

console.log("hello");

//variable 
//const 상수
const a = 5;
const b = 4;
let c = 3;

console.log(a+b);

const myName = "juheun";
console.log(myName);


//let 변수
c = 10;
console.log(c+a);


//array
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fir";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
const nonsense = [1, 2, "hello", null, undefined];

console.log(daysOfWeek, nonsense);
console.log(daysOfWeek[2]);


//add one more day to the array
daysOfWeek.push("holiday");
console.log(daysOfWeek);



//playger object
const player = {
    name: "nico",    
    point: 10,
    fat: true,
    //object 안에 함수를 넣는 방법
    sayHo: function (name) {
        console.log("ho" + name + "nice meet you.");
    },
};

console.log(player);
console.log(player.name);

//player object의 값 변환
player.fat = false;
player.lastName = "shim";
player.point += 14;

console.log(player);


function sayHello(nameOfPerson, age){
    console.log("hello! my name is " + nameOfPerson + "He is " + age + " years old.");
}

sayHello("shim", 10);
sayHello("juhuen", 23);
sayHello("nico", 39);

function plus(a, b){
    console.log(a+b);
}


plus(10, 20);

player.sayHo("lynn");


