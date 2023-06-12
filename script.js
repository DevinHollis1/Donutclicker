function toggleAboutDropdown(event) {
    const dropdownContainer = document.getElementById('dropdown-container');
    const dropdown = document.getElementById('about-dropdown');
    dropdown.classList.toggle('show');
    dropdownContainer.classList.toggle('show');
}

function toggleInspirationDropdown(event) {
    const dropdownContainer = document.getElementById('dropdown-container');
    const dropdown = document.getElementById('inspiration-dropdown');
    dropdown.classList.toggle('show');
    dropdownContainer.classList.toggle('show');
}

function toggleContactsDropdown(event) {
    const dropdownContainer = document.getElementById('dropdown-container');
    const dropdown = document.getElementById('contacts-box');
    dropdown.classList.toggle('show');
    dropdownContainer.classList.toggle('show');

}





document.getElementById('about-dropdown').addEventListener('click', toggleAboutDropdown);
document.getElementById('inspiration-dropdown').addEventListener('click', toggleInspirationDropdown);
document.getElementById('contacts-box').addEventListener('click', toggleContactsDropdown);


