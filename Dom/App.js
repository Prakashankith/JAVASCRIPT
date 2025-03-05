// let element = document.querySelector('.list')
// console.log(element);

// // console.log(element.attributes);

// console.log(element.getAttribute('class'));
// console.log(element.getAttribute('id'));

// const h1 = document.querySelector('h1')
// console.log(h1.getAttribute("id"));
// h1.setAttribute("class", "heading")

// element.setAttribute("class", "new list")


// const form = document.querySelector('.formStatus')
// console.log(form);

// // console.log(form.attributes);
// console.log(form.getAttribute('id'));
// console.log(form.getAttribute('class'));
// const h1 = document.querySelector('h1')
// console.log(h1.getAttribute('id'));
// h1.setAttribute("verfied", 'notverfied')

// console.log("2" + 3 * 2);
// function hi() {
//     return "hello baby"
// }
// console.log(typeof hi());


// const buttons = document.querySelectorAll('button')

// buttons.forEach(button => {
//     button.addEventListener("click", (event) => {
//         console.log(event.target.innerText)
//     })
// })


// function add(a, b) {
//     return a + b
// }
// setTimeout(add, 2000)
// console.log(add(20, 50));

// function demo() {
//     console.log('hello world');
// }
// // setTimeout(demo, 2000)
// setInterval(demo, 5000)


// let date = new Date()
// console.log(date);
// console.log(date.getDay());
// console.log(date.getHours());

let ls = localStorage
console.log(ls);
ls.setItem("sname", "miller")
ls.setItem("age", 25)


let ss = sessionStorage
console.log(ss);
ss.setItem("name", "ankith")
console.log(ss.removeItem("name"));
console.log(ss.getItem("name"));


const text = '{ "name": "ankith", "age": 30, }'
const obj = JSON.stringify(text)
console.log(obj);



console.log(!![]);
console.log(!!{});
console.log(!!!!"");
console.log(!null);
console.log(!!"welcome");
console.log(!!NaN);

console.log(!!Infinity);



