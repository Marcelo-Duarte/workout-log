import removeButton from './components/removeButton.js';

const addListItem = (event) => {

    event.preventDefault();
    
    const list = document.querySelector('[data-list]');
    const timeSpent = document.querySelector('[data-form-time_spent]');
    const activity = document.querySelector('[data-form-activity]');
    const date = document.querySelector('[data-form-date]');

    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    const content = `<p class="content">${date.value} ${activity.value} ${timeSpent.value}</p`;

    listItem.innerHTML = content;
    listItem.appendChild(removeButton());

    list.appendChild(listItem);
}

const addButton = document.querySelector('[data-form-button]');

addButton.addEventListener('click', addListItem);