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


function abc() {
    console.log(abc.xyz);
}
abc()
abc.xyz = 100
abc.xyz = 200
abc()
console.log(typeof typeof 100);
const arr = [...'Praveen']
console.log(arr);

console.log(parseInt('10-2'));
console.log(parseInt('7FM'));
console.log(parseInt('M7F'));

console.log([1, 2].map(num => {
    if (num > 0) return;
    return num * 2
}));

console.log([] + {});
console.log({} + []);


let count = 0
const inc = () => count++
const log = () => console.log(count);
inc()
setTimeout(log, 0);
inc();
console.log(count);