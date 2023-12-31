// P tag
const count = document.getElementById("count")

//decrement button tag
const decrementButton = document.getElementById("decrement")

//Reset button tag
const resetButton = document.getElementById("reset")

//Increment button tag 
const incrementButton = document.getElementById("increment")

let counter = 0;
 
//selecting Eventlistener for 
incrementButton.addEventListener("click", function () {
    count.textContent = counter;
    counter++;
    
});

decrementButton.addEventListener("click", function () {
    if (count.textContent > 0) {
        count.textContent = counter;
        counter--;
    } else {
       alert("Number cannot be negative")
    }
})

resetButton.addEventListener("click", function() {
    counter = 0;// select value first
    count.textContent = counter;// then selecting textcontent
    
})

//OR (THIS IS ANOTHER EXAMPLE)


// const count = document.getElementById('count');
// const incrementButton = document.getElementById('increment');
// const decrementButton = document.getElementById('decrement');
// const resetButton = document.getElementById('reset');


// let counter = 0;

function updateCounter() {
  countElement.textContent = counter;
}

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
  });
  

decrementButton.addEventListener('click', () => {
    if (countElement.textContent > 0) {
        counter--;
        updateCounter(); 
    } else {
        alert("Number cannot be negative!")
    }
  
});


resetButton.addEventListener('click', () => {
  counter = 0;
  updateCounter();
});

//initial display
updateCounter();
