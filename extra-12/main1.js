// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() >= 0.5) {
//                 resolve('DONE');
//             }
//             else {
//                 reject('NOT DONE');
//             }
//         }, 2000);
//     });
// }

// asyncFunc().then(x => console.log('Result: ' + x), x => console.error('Result: ' + x));


// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('DONE'), 100);
//     });
// }

// asyncFunc().then(x => console.log('Result: ' + x));




// function testFnc(a,b){
//     let c = 10;

//     console.log(a);
//     console.log(b);
// }

// testFnc(10);

// console.log(c);



function f(a) {

    const b = 3;

    return function (c) {
        console.log(a + b + c);
    }

}


f(1)(2);

const closure = f(1);
// console.log(b);

closure(2);
// console.log(b);
closure(10);