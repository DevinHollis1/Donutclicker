let autoClickerCount = 0;


const autoClicker = document.querySelector('#second-button button');
const autoClickerElement = document.querySelector('#second-button h1')


function updateAutoClickerCount() {
    autoClickerElement.textContent = ` Auto Bakers ${autoClickerCount}`;
}


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

autoClicker.addEventListener('click', controlAutoClickerClick)
