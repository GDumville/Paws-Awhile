window.addEventListener('load', init);

function init() {
    document.getElementById("resetButton").addEventListener('click', reset);
    document.getElementById("submitButton").addEventListener('click', submit);
}

function submit() {
    alert("Your reservation has been submitted successfully.");
}

function reset() {
    window.location.reload();
}