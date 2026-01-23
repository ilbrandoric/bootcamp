
// +/- Buttons are ID selectors

let plusBtn = document.getElementById("plus-btn");
let minusBtn = document.getElementById("minus-btn");
let count = document.getElementById("displayed-counter"); 


let countNum = 0;
count.innerHTML = countNum; //This toggles the displayed counter to the countNum variable

minusBtn.addEventListener("click", () => {
	
	count.innerHTML = countNum; //Points to ID displayed-counter
    if (countNum === 0) {  //Prevents negative numbers
        return 0;
    } else {
        countNum -= 1;
    }
});

plusBtn.addEventListener("click", () => {
	countNum += 1;
	count.innerHTML = countNum;
});

