// function () {
//     console.log(hii);
// }

// function addition(a, b) {
//     return a + b
// }
// console.log(addition(10, 20));

// let a = function (a, b) {
//     return a - b
// }

// console.log(a(3, 2));


// ?First order function 
const Arithmetic = {
    add: (a, b) => {
        return `${a} + ${b} = ${a + b}`
    },
    subtract: (a, b) => {
        return `${a} - ${b} = ${a - b}`
    },
    mutiply: (a, b) => {
        return `${a} * ${b} = ${a * b}`
    },
    division: (a, b) => {
        if (b != 0) return `${a}/ ${b}=${a / b}`
        return "cannot divide by zero"
    }
}
console.log(Arithmetic.add(10, 10));