function toggleAboutDropdown(event) {
    const dropdownContainer = document.getElementById('dropdown-container');
    const aboutDropdown = document.getElementById('about-dropdown');
    aboutDropdown.classList.toggle('show');
    dropdownContainer.classList.toggle('show',aboutDropdown.classList.contains('show'));

}


function toggleInspirationDropdown(event) {
    const dropdownContainer = document.getElementById('dropdown-container');
    const  inspirationDropdown = document.getElementById('inspiration-dropdown');
    inspirationDropdown.classList.toggle('show');
    dropdownContainer.classList.toggle('show',inspirationDropdown.classList.contains('show'));
}

function toggleContactsDropdown(event) {
    const dropdownContainer = document.getElementById('dropdown-container');
    const contactsDropdown = document.getElementById('contacts-box');
    contactsDropdown.classList.toggle('show');
    dropdownContainer.classList.toggle('show', contactsDropdown.classList.contains('show'));

}



document.getElementById('about-dropdown').addEventListener('click', toggleAboutDropdown,)
document.getElementById('inspiration-dropdown').addEventListener('click', toggleInspirationDropdown,)
document.getElementById('contacts-box').addEventListener('click', toggleContactsDropdown,)

