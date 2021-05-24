const timeCounterIncrement = (event) => {
    event.preventDefault();

    var spentTime = parseInt(document.querySelector('#form-time-spent').value);

    const span = document.querySelector('#counter');

    spentTime = (1 * spentTime) + (1 * sessionStorage.getItem("spentTime"));

    sessionStorage.setItem("spentTime", spentTime);

    span.innerHTML = spentTime;
}

export default timeCounterIncrement;