
let counterValue = 0;
const incrementBtn = document.getElementById('counter-increment');
const decrementBtn = document.getElementById('counter-decrement');
const counterDisplay = document.getElementById('counter-value');


incrementBtn.addEventListener('click', () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
    if (counterValue > 0) {
        counterValue--;
        counterDisplay.textContent = counterValue;
    } else {
        return 0;
    }
});






