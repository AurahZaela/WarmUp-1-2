//Let and const
let myLet = "Joseph"
const myConst = "Tran"


//For In
var arr = [1,2,3]
for (const key in arr) {
        console.log(key)

}

//For Of
let decks = ['Blue Eye', 'Red Eye', 'Odd Eye']; 

for (const car of decks) {
    console.log(" ")
}


//Destructuring both Array and Object

let arr = ["One", "Two", "Three"]
let first, second, third;
first = arr[0]
second = arr[1]
third = arr[2]


let User = {Session : "ES6", Topic : "Destructuring", Timing : {FirstSlot : "9AM", SecondSlot : "10AM" } }

let { Topic, Timing : { SecondSlot, ThirdSlot = "11AM" } } = User

console.log(Topic)
console.log(SecondSlot)
console.log(ThirdSlot)


//Default Param

function Add(p1 = 0, p2 = 0) {
    return p1+p2
}

//shorthand
let human = "Laugh", // if we put comma we don't need to use let again and it will continue as let till semicolon ;
animal = "Growl"

//Map and Set
let myMap = new Map();
let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

myMap.set(keyString, "One String")
myMap.set(keyObj, "One OBject")

//Promise
let myPromise = new Promise(
    
    let authResult = AuthenticationCall(userName, passWord)
    
        if (authResult.success) {
            resolve(authResult.data)
        } else {
            reject(authResult.error)
        } 
    )
    
// arrow funciton
let Add = (p1, p2) => p1+p2
console.log(AddArr(9,10))