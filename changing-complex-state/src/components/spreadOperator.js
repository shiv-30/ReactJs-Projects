const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"]
console.log(fruits);

const fullName = {
    fName: "James",
    lName: "Bond"
}

const user = {
    ...fullName,
    id: 13
}

console.log(user);



