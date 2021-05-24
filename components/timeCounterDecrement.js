const timeCounterDecrement = (event) => {
    event.preventDefault();

    const span = document.querySelector('#counter');
    const tableData = event.target.parentElement.childNodes[2];

    var spentTime = (1 * sessionStorage.getItem("spentTime")) - (1 * tableData.innerText);

    sessionStorage.setItem("spentTime", spentTime);

    span.innerHTML = spentTime;
}

export default timeCounterDecrement;