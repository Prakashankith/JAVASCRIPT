// console.log("start");
// let promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2)
//     console.log(3);
// })
// promise1.then((res) => {
//     console.log(res);
// })
// console.log("end");

// console.log("start");
// const fn = () =>
//     new Promise((resolve, reject) => {
//         console.log(1);
//         resolve("success")
//     })
// console.log("middle");
// fn().then((res) => {
//     console.log(res);
// })
// console.log("end");

// function job(state) {
//     return new promise(function (resolve, reject) {
//         if (state) {
//             resolve("succes")
//         } else {
//             reject("error")
//         }
//     })
// }
// let promise = job(true);
// promise
//     .then(function (data) {
//         console.log(data); //success

//         return job(false);
//     })
//     .catch(function (error) {
//         console.log(error); //error

//         return "Error caught";
//     })
//     .then(function (data) {
//         console.log(data); //error caught
//         return job(true)
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First!")
// });
// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise)
// })
// secondPromise.then((res) => {
//     return res;
// })
// .then((res) => console.log(res))//!First


async function loadJson(url) {

    let response = await fetch(url)
    if (response.status == 200) {
        let json = await response.json();
        return json
    }
    throw new Error(response.status)
    // return fetch(url).then((response) => {
    //     if (response.status == 200) {
    //         return response.json();
    //     } else {
    //         throw new Error(response.status)
    //     }
    // })
    loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
        console.log(err);
    })
}


let p1 = new Promise((res, rej) => {
    res("hi i am resolve 1")
    rej("hi i am reject 1")
})
let p2 = new Promise((res, rej) => {
    res("hi i am resolve 2")
    rej("hi i am reject 2")
})
let p3 = new Promise((res, rej) => {
    res("hi i am resolve 3")
    rej("hi i am reject 3")
})
let p4 = new Promise((res, rej) => {
    res("hi i am resolve 4")
    rej("hi i am reject 4")
})
let p5 = new Promise((res, rej) => {
    res("hi i am resolve 5")
    rej("hi i am reject 5")
})