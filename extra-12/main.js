console.log('main.js loading....');

const btn = document.querySelectorAll('button');
btn[0].addEventListener('click', increaseCounter());

btn[1].addEventListener('click', displayClick);


function increaseCounter(){
    console.log('increaseCounter was called');
    let counter = 0;
    
    return function(){
        counter++;
        console.log(counter);
    }
}


const displayClick = function (){
    console.log('the second button was clicked');
}



function naughty(){
    console.log('You should avoid this!');
}