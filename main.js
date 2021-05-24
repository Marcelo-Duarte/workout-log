import workoutTable from './components/workoutTable.js';
import timeCounterIncrement from './components/timeCounterIncrement.js';

const createCounterLocalStorage = (event) => {
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("spentTime", 0);
    }
}

const app = document.querySelector('#app');
const addButton = document.querySelector('#form-button');

app.addEventListener('onload', createCounterLocalStorage);

addButton.addEventListener('click', workoutTable);
addButton.addEventListener('click', timeCounterIncrement);