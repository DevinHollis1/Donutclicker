let donutCount = 0;




const donutCountElement = document.querySelector('.content h1');
const donutCountElement2 = document.getElementById("donutCount1");
const donutMaker = document.querySelector('.bake-buttons button');


function updateDonutCount() {
    donutCountElement.textContent = ` Donuts ${donutCount}`;
    donutCountElement2.textContent = donutCount;
    updateAutoClickerButton();
}



function incrementDonutCount() {
    donutCount++;
    updateDonutCount();
}



function controlDonutMakerClick() {
    donutCount++;
    updateDonutCount(); 
}




donutMaker.addEventListener('click',controlDonutMakerClick)




