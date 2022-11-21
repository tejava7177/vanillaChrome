
// //how to use return 
// const age = 96;

// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);





// const age = prompt("how old are you? ");

// parseInt(age);              //string > int

// console.log(typeof age);
// console.log(age);


const age = parseInt(prompt("how old are you?"));

if(isNaN(age)){
    console.log("Please write a number");
} else if(age < 18){
    console.log("You are too young.");
} else{
    console.log("You can drink");
}