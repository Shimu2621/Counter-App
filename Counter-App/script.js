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
    //count.innerText = counter;
    count.textContent = counter;
    counter++;
    
});

decrementButton.addEventListener("click", function () {
    count.textContent = counter;
    counter--;

    if (counter == 0) {
       alert("Number cannot be negative")
    }
})

resetButton.addEventListener("click", function() {
    count.textContent = counter;
    counter = 0;
})
