// function greet(name){
//     return  "Hello, " +name+ "!!"
// }

// console.log(greet("Dedan"))

// const greet = (name) =>{
//     return  "Hello, " +name+ "!!"
// };

// console.log(greet("Dedan"))

// greet()


// const greet = (name) => {
//     return  "Hello, " +name+ "!!"
// }

// const greetShort = name => "Hello, " +name+ "!!"

// // console.log(greetShort("Kelvin"))

// function add(a, b) {
//     return a + b;
//   }
  
//   console.log(add(5, 3)); //8



// function greet(name = "Guest") {
//     return "Hello, " + name + "!";
//   }
  
//   console.log(greet()); // "Hello, Guest!"
//   console.log(greet("Diana")); // "Hello, Diana!"


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); 