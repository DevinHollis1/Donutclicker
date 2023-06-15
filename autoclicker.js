let autoClickerCount = 0;
let autoClickerCost = 10;


const autoClicker = document.querySelector('#second-button button');
const autoClickerElement = document.querySelector('#second-button h1')
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
        updateDonutCount();
        updateAutoClickerCount()
        console.log(`purchased Auto Baker! donut count: ${donutCount}`);
    }
}

function calculateAutoClickerCost() {
    return Math.floor( autoClickerCost * 1.1);
    
}

function incrementDonutCount() {
    donutCount += autoClickerCount;
    updateDonutCount();
}
setInterval(incrementDonutCount, autoClickerInterval);


autoClicker.addEventListener('click', controlAutoClickerClick,)

