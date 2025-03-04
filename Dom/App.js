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

console.log("2" + 3 * 2);
function hi() {
    return "hello baby"
}
console.log(typeof hi());


const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        console.log(event.target.innerText)
    })
})
