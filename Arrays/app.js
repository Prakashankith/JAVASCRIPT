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
// const Arithmetic = {
//     add: (a, b) => {
//         return `${a} + ${b} = ${a + b}`
//     },
//     subtract: (a, b) => {
//         return `${a} - ${b} = ${a - b}`
//     },
//     mutiply: (a, b) => {
//         return `${a} * ${b} = ${a * b}`
//     },
//     division: (a, b) => {
//         if (b != 0) return `${a}/ ${b}=${a / b}`
//         return "cannot divide by zero"
//     }
// }
// console.log(Arithmetic.add(10, 10));.

// function mathOperations(a, b, callback) {
//     callback(a, b)
// }
// mathOperations(10, 20, function (x, y) {
//     console.log(x + y);
// })
// mathOperations(10, 20, function (x, y) {
//     console.log(x - y);
// })
// const demo = (a, b) => {
//     console.log(1);

// }
// demo()

// function mathOperations1(a, b, callback) {
//     callback(a, b)
// }
// mathOperations(2, 3, (x, y) => {
//     console.log(x + y);
// })

// (function () {
//     console.log("hii");
// }())

//     (function () {
//         var a = 10
//             (function () {
//                 console.log(a);
//             })()
//     })

console.log("start");
var a = 100;
let b = 200;
const c = 300;
function gp() {
    console.log("grandparent");
    console.log(a);
    console.log(b);
    console.log(c);
    var d = 400
    let e = 500
    const f = 600
    function p() {
        console.log("parent");
        console.log(d);
        console.log(e);
        console.log(f);
        var g = 700;
        let h = 800;
        const i = 900;
        function c() {
            console.log("child");
            console.log(g);
            console.log(h);
            console.log(i);

        }
        c()

    }
    p()

}
gp()