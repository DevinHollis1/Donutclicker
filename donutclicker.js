// make a start for the donut and auto clicker count
let donutCount = 0;




// get DOM elements needed
const donutCountElement = document.querySelector('.content h1');
const donutMaker = document.querySelector('.bake-buttons button');


// function to update the donut count into DOM
function updateDonutCount() {
    donutCountElement.textContent = ` Donuts ${donutCount}`;
}



// Function to control the bake button click
function controlDonutMakerClick() {
    donutCount++;
    updateDonutCount(); 
}




donutMaker.addEventListener('click',controlDonutMakerClick)




