const btn = document.querySelector(`#log-btn`);
const span = document.querySelector(`#display`);

let count = 0;

// adding the event listener
btn.addEventListener('click', () => {
    span.textContent = ++count
    console.log(`Counter value ${count}`);
});

// some resource consuming code..

for (let i = 0; i < 1000; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
console.log('The loop is finished!');