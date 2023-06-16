function toggleAboutDropdown(event) {
    const dropdownContainer = document.getElementById('dropdown-container');
    const aboutDropdown = document.getElementById('about-dropdown');
    const inspirationDropdown = document.getElementById('inspiration-dropdown');
    const contactsDropdown = document.getElementById('contacts-box');

    aboutDropdown.classList.toggle('show');
    dropdownContainer.classList.toggle('show', aboutDropdown.classList.contains('show'));
    inspirationDropdown.classList.remove('show');
    contactsDropdown.classList.remove('show');
}

function toggleInspirationDropdown(event) {
    const dropdownContainer = document.getElementById('dropdown-container');
    const inspirationDropdown = document.getElementById('inspiration-dropdown');
    const aboutDropdown = document.getElementById('about-dropdown');
    const contactsDropdown = document.getElementById('contacts-box');

    inspirationDropdown.classList.toggle('show');
    dropdownContainer.classList.toggle('show', inspirationDropdown.classList.contains('show'));
    aboutDropdown.classList.remove('show');
    contactsDropdown.classList.remove('show');
}

function toggleContactsDropdown(event) {
    const dropdownContainer = document.getElementById('dropdown-container');
    const contactsDropdown = document.getElementById('contacts-box');
    const aboutDropdown = document.getElementById('about-dropdown');
    const inspirationDropdown = document.getElementById('inspiration-dropdown');

    contactsDropdown.classList.toggle('show');
    dropdownContainer.classList.toggle('show', contactsDropdown.classList.contains('show'));
    aboutDropdown.classList.remove('show');
    inspirationDropdown.classList.remove('show');
}

document.getElementById('about-dropdown').addEventListener('click', toggleAboutDropdown);
document.getElementById('inspiration-dropdown').addEventListener('click', toggleInspirationDropdown);
document.getElementById('contacts-box').addEventListener('click', toggleContactsDropdown);
