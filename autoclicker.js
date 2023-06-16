let autoClickerCount = 0;
let autoClickerCost = 100;
let clicksToPurchase = 100;



const autoClicker = document.querySelector('#second-button > button');
const autoClickerElement = document.querySelector('#second-button h1')
const clicksToPurchaseElement = document.getElementById("clicksToPurchase");
const resetButton = document.getElementById("reset-button");
const autoClickerInterval = 1000;


function updateAutoClickerCount() {
    autoClickerElement.textContent = ` Auto Bakers ${autoClickerCount}`;
}


function controlAutoClickerCount() {
    autoClickerCount++;
    updateAutoClickerCount()
    console.log(`${autoClickerCount} Auto Bakers`)
}


function controlAutoClickerClick(){
    if (donutCount >= autoClickerCost){
        donutCount -= autoClickerCost;
        autoClickerCount++;
        autoClickerCost = calculateAutoClickerCost();
        controlAutoClicks();
        updateDonutCount();
        updateAutoClickerCount();
        updateAutoClickerButton();
        console.log(`purchased Auto Baker! donut count: ${donutCount}`);
    }
}

function calculateAutoClickerCost() {
    return Math.floor( autoClickerCost * 1.1);
}


function updateDisplay() {
    clicksToPurchaseElement.textContent = ` ${autoClickerCost}`
}

function controlAutoClicks(){
        clicksToPurchase = calculateClicksToPurchase();
        updateDisplay();
    }



function calculateClicksToPurchase() {
        return autoClickerCost;
    }


function incrementDonutCount() {
    donutCount += autoClickerCount;
    controlAutoClicks();
    updateDonutCount();
}

setInterval(incrementDonutCount, autoClickerInterval);

function updateAutoClickerButton() {
    autoClicker.disabled = donutCount < autoClickerCost;
}


function resetPage() {
    autoClickerCount = 0;
    autoClickerCost = 10;
    clicksToPurchase = 10;
    donutCount = 0;
    updateAutoClickerCount();
    updateDisplay();
    updateDonutCount();
    updateAutoClickerButton();
}



resetButton.addEventListener('click', resetPage);
autoClicker.addEventListener('click', controlAutoClickerClick)

