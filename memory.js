//Stack and Heap

//Primitive Datatypes are stored in Stack and Non-Primitive  DataTypes are stored in Heap

let firstName = "Sumit Kumar"
let AnotherName = firstName

//console.log(AnotherName)
AnotherName = "Sumit Sumit"

//console.log(AnotherName)
//console.log(firstName)

let userOne = {firstName: "Sumit Kumar"}
let userTwo = userOne

console.log(userTwo.firstName)
userTwo.firstName = "Sumit Sumit"
console.log(userTwo.firstName)
console.log(userOne.firstName)

// Non Primitive Datatypes are in heap and their values are changed if any it's linked value is changed. Like When we changed UserTwo.firstName, UserOne.firstName was also changed.

