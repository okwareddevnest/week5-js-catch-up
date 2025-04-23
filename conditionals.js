//IF-Else
// let age = 16;

// if (age >= 18){
//     console.log("You're an adult")
// }else{
//     console.log("Please grow up hahahaha")
// }

// let score = 100;

// if (score >= 90 && score <= 100) {
//     console.log("Grade: A");
//   } else if (score >= 80 && score <= 100) {
//     console.log("Grade: B");
//   } else if (score >= 70 && score <= 100) {
//     console.log("Grade: C");
//   } else if (score >= 60 && score <= 100) {
//     console.log("Grade: D");
//   }

//Switch Case
let day;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

// console.log(dayName)



let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
// console.log(status); 

// condition ? valueIfTrue : valueIfFalse;


let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade);