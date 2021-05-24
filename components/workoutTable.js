import removeButton from "./removeButton.js";

const workoutTable = (event) => {
    event.preventDefault();

    const table = document.querySelector('#workout-table');

    const tableRow = document.createElement('tr');
    tableRow.classList.add('table-item');

    getData().forEach(data => {
        const tableData = document.createElement('td');

        tableData.innerHTML = data;

        tableRow.appendChild(tableData);
    });

    tableRow.appendChild(removeButton());

    table.appendChild(tableRow);
}

const getData = () => {
    const fields = [
        {
            id: 'form-date',
            name: 'date'
        },
        {
            id: 'form-activity',
            name: 'activity'
        },
        {
            id: 'form-time-spent',
            name: 'time-spent'
        }
    ];

    var data = [];

    fields.forEach(field => {
        data.push(document.querySelector(`#${field.id}`).value);
    });

    return data;
}

export default workoutTable;