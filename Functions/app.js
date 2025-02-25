let name = {
    firstName: "ankith",
    lastName: "sanjay",

}
let myName = function (hometown, city) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " " + city);
}
// myName.call(name, "Bangalore", "Mangalore")
myName.apply(name, ["raichur"])
let name2 = {
    firstName: "mayank",
    lastName: "Jspider"
}
// myName.call(name2, "Raichur")

// ?bind method

let printMyName = myName.bind(name2, "mumbai", "Thane")
console.log(printMyName);
printMyName()

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

const btn = document.querySelector(".increment-btn")
const btnPress = document.querySelector(".increment-pressed")
const count = document.querySelector(".increment-count")

let triggeredCount = 0;
let pressedCount = 0;

const start = new Date().getTime()
const mythrottle = (cb, d) => {
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - last < d) return;
        last = now;
        return cb(...args)
    }
}


const throttled = mythrottle(() => {
    const now = new Date().getTime()
    console.log(now - start);
    count.innerHTML = ++triggeredCount


}, 800)

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount
    

})


