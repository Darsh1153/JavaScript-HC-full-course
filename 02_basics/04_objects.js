// singleton constructor creates like this -
const obj = new Object(); // singleton constructor gets created


const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Darshan"
// console.log(tinderUser)


const regularUser = {
    email: "darshan@google.com",
    fullname: {
        username: {
            name: "Darshan",
            last: "sharma"
        }
    }
}
console.log(regularUser.fullname.username.name);



// to append two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}
console.log(obj4)




// to get the keys
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
