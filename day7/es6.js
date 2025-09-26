//let and const

//arrow function
//use after initialization

//default parameters

const greet = (firstName,lastname,middlename = " ") => {
    return `Hello!,${firstName} ${middlename} ${lastname}`;
}
console.log(greet("fn", "mn", "ln"));