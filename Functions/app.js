// let name = {
//     firstName: "ankith",
//     lastName: "sanjay",

// }
// let myName = function (hometown, city) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown + " " + city);
// }
// // myName.call(name, "Bangalore", "Mangalore")
// myName.apply(name, ["raichur"])
// let name2 = {
//     firstName: "mayank",
//     lastName: "Jspider"
// }
// // myName.call(name2, "Raichur")

// // ?bind method

// let printMyName = myName.bind(name2, "mumbai", "Thane")
// console.log(printMyName);
// printMyName()

// ?==========================================================================================
//  !throttling and debouncing in javascript

// const btn = document.querySelector(".increment-btn")
// const btnPress = document.querySelector(".increment-pressed")
// const count = document.querySelector(".increment-count")

// let triggeredCount = 0;
// let pressedCount = 0;

// const debouncedCount = _.debounce(() => {
//     count.innerHTML = ++triggeredCount


// }, 800)

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount
//     debouncedCount()
// })
// !Throttle example
// const btn = document.querySelector(".increment-btn")
// const btnPress = document.querySelector(".increment-pressed")
// const count = document.querySelector(".increment-count")

// let triggeredCount = 0;
// let pressedCount = 0;

// const start = new Date().getTime()


// const throlledCount = _.throttle(() => {
//     const now = new Date().getTime()
//     console.log(now - start);
//     count.innerHTML = ++triggeredCount


// }, 800)

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount
//     throlledCount()
// })

// const btn = document.querySelector(".increment-btn")
// const btnPress = document.querySelector(".increment-pressed")
// const count = document.querySelector(".increment-count")

// let triggeredCount = 0;
// let pressedCount = 0;

// const start = new Date().getTime()
// const mythrottle = (cb, d) => {
//     let last = 0;
//     return (...args) => {
//         let now = new Date().getTime();
//         if (now - last < d) return;
//         last = now;
//         return cb(...args)
//     }
// }


// const throttled = mythrottle(() => {
//     const now = new Date().getTime()
//     console.log(now - start);
//     count.innerHTML = ++triggeredCount


// }, 800)

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount


// })


// function abc() {
//     console.log(abc.xyz);
// }
// abc()
// abc.xyz = 100
// abc.xyz = 200
// abc()
// console.log(typeof typeof 100);
// const arr = [...'Praveen']
// console.log(arr);

// console.log(parseInt('10-2'));
// console.log(parseInt('7FM'));
// console.log(parseInt('M7F'));

// console.log([1, 2].map(num => {
//     if (num > 0) return;
//     return num * 2
// }));

// console.log([] + {});
// console.log({} + []);


// let count = 0
// const inc = () => count++
// const log = () => console.log(count);
// inc()
// setTimeout(log, 0);
// inc();
// console.log(count);


// function addition(a, b, callback) {
//     callback(a, b)
// }
// addition(10, 20, function (x, y) {
//     console.log(x + y);
// })

// let e = 4
// let f = 2
// let g = e++ * ++f + f++
// console.log(g);


// let z = 8
// console.log(++z / z++);

// let x = 7
// console.log(--x * ++x);

// var q = 151
// console.log(q++);
// console.log(++q);
// console.log(--q);
// console.log(q--);

// let m = 151
// console.log(m++);
// console.log(++m);
// console.log(--m);
// console.log(m--);

// let x = "5";
// let y = x++ + ++x
// console.log(x, y);

// let m = "7"
// let n = m++ + ++m
// console.log(m, n);


// let a = { value: 10 }
// let b = a;
// b.value = 20
// console.log(a.value, b.value);
// b = { value: 30 }
// console.log(a.value, b.value);


// let array = [10, 20, 30, 40]
// let result = array.some((m) => {
//     return m > 10
// })
// console.log(result);    


// ?Remove duplicates from an array

const array = [1, 4, 5, "Banana", 6, 1, 4, 4, 9, 3, "Banana"];
const uniqueElements = array.filter((Element, index) => {
    return array.indexOf(Element) === index
})
console.log(uniqueElements);


function fibonacci(length) {
    const fibArray = [0, 1];

    for (let i = 2; i < length; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2])
    }
    return fibArray
}
const series = fibonacci(7)
console.log(series);


let string = "typescript";
let reversedString = string.split('').reverse().join('');
console.log(reversedString);

let string1 = "javascript"
let reversedString1 = '';
for (let index = string.length - 1; index >= 0; index--) {
    reversedString1 += string1[index]
}
console.log(reversedString1);