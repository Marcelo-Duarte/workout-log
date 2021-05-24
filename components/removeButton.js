import timeCounterDecrement from './timeCounterDecrement.js';

const removeButton = () => {
    const button = document.createElement('button');
    button.classList.add('remove-button');
    button.innerText = 'X';
    button.addEventListener('click', timeCounterDecrement);
    button.addEventListener('click', removeElement);

    return button;
}

const removeElement = (event) => {
    const listItem = event.target.parentElement;

    listItem.remove();
}

export default removeButton;