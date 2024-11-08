// Objects
let myObj = {
    name: "Darshan Sharma",
    age: 22,
    email: "darshan@google.com"
}
console.log(myObj.email)
console.log(myObj["email"])


myObj.email = "darshan@chatgpt.com"
Object.freeze(myObj)
console.log(myObj)
