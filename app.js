//Selectors
const increment = document.getElementById('incre');
const decrement = document.getElementById('decre');
const reset = document.getElementById('reset');
const value = document.getElementById('value');

//Event Listeners
increment.addEventListener('click', incrementVal);
decrement.addEventListener('click', decrementVal);
reset.addEventListener('click', resetVal);

//functions
function incrementVal() {
    value.textContent = Number(value.textContent) + 1;

}

function decrementVal() {
    value.textContent = Number(value.textContent) - 1;

}

function resetVal() {
    value.textContent = 0;
}
