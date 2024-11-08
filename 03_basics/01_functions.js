// Functions
function addTwoNumbers(number1, number2){
    return number1+number2;
}
// console.log(addTwoNumbers(3, 4));


function func(...num1){
    return num1;
}
// console.log(func(100, 200, 300, 400));


function func(val1, val2, ...num1){
    console.log(val1);
    
    return num1;
}
// console.log(func(100, 200, 300, 400));



const user = {
    name: "Darshan",
    age: 22
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and my age is ${anyObject.age}`);
}
handleObject(user);