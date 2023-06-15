let donutCount = 0;


const donutCountElement = document.querySelector('.content h1');
const donutMaker = document.querySelector('.bake-buttons button');


function updateDonutCount() {
    donutCountElement.textContent = ` Donuts ${donutCount}`;
}


function controlDonutMakerClick() {
    donutCount++;
    updateDonutCount(); 
}




donutMaker.addEventListener('click',controlDonutMakerClick)




