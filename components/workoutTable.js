import removeButton from "./removeButton.js";

const workoutTable = (event) => {
    event.preventDefault();

    const table = document.querySelector('#workout-table');

    const dataSet = dataHandle();

    const tableRow = document.createElement('tr');
    tableRow.classList.add('table-item');

    const timeSpentData = document.createElement('td');
    const activityData = document.createElement('td');
    const dateData = document.createElement('td');

    timeSpentData.innerHTML = dataSet[0].value;
    tableRow.appendChild(timeSpentData);

    activityData.innerHTML = dataSet[1].value;
    tableRow.appendChild(activityData);

    dateData.innerHTML = dataSet[2].value;
    tableRow.appendChild(dateData);

    tableRow.appendChild(removeButton());

    table.appendChild(tableRow);
}

const dataHandle = () => {
    const date = document.querySelector('#form-date');
    const activity = document.querySelector('#form-activity');
    const timeSpent = document.querySelector('#form-time_spent');

    const dataSet = [date, activity, timeSpent];

    return dataSet;
}

export default workoutTable;