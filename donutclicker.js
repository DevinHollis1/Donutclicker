// get DOM elements needed
const donutCountElement = document.querySelector('.content h1');
const donutMaker = document.querySelector('.bake-buttons button');
const autoClicker = document.querySelector('#second-button button');
const autoClickerElement = document.querySelector('#second-button h1')



// make a start for the donut and auto clicker count
let donutCount = 0;
let autoClickerCount = 0;

// function to update the donut count into DOM
function updateDonutCount() {
    donutCountElement.textContent = ` Donuts ${donutCount}`;
}

function updateAutoClickerCount() {
    autoClickerElement.textContent = ` Auto Bakers ${autoClickerCount}`;
}

// Function to control the bake button click
function controlDonutMakerClick() {
    donutCount++;
    updateDonutCount(); 
}
// Function to control the auto baker button click
function controlAutoClickerCount() {
    autoClickerCount++;
    updateAutoClickerCount()
    console.log(`${autoClickerCount} Auto Bakers`)
    
}

function controlAutoClickerClick(){
    if (donutCount >= 10){
        donutCount -= 10;
        autoClickerCount++;
        updateDonutCount();
        updateAutoClickerCount()
        console.log(`purchased Auto Baker! donut count: ${donutCount}`);
    }
}


donutMaker.addEventListener('click',controlDonutMakerClick)
autoClicker.addEventListener('click', controlAutoClickerClick)




