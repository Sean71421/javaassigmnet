
document.addEventListener('DOMContentLoaded', function () {
    var costPerDay = 100;
    var numberOfDaysSelected = 0;
    var clearDaysButton = document.getElementById('clear-days');
    var daySelectors = document.querySelectorAll('.day-selector');
    var totalCostElement = document.getElementById('total-cost');

    function updateTotalCost() {
        var totalCost = costPerDay * numberOfDaysSelected;
        totalCostElement.textContent = '$' + totalCost.toFixed(2);
    }

    function handleDayClick(event) {
        var dayButton = event.target;
        if (dayButton.classList.contains('clicked')) {
            dayButton.classList.remove('clicked');
            numberOfDaysSelected--;
        } else {
            dayButton.classList.add('clicked');
            numberOfDaysSelected++;
        }
        updateTotalCost();
    }

    function handleClearDaysClick() {
        daySelectors.forEach(function (daySelector) {
            daySelector.classList.remove('clicked');
        });
        numberOfDaysSelected = 0;
        updateTotalCost();
    }

    daySelectors.forEach(function (daySelector) {
        daySelector.addEventListener('click', handleDayClick);
    });

    clearDaysButton.addEventListener('click', handleClearDaysClick);
    updateTotalCost();
});

var dayCounter = {};

function handleDayClick(event) {
    var dayButton = event.target;
    if (dayButton.classList.contains('clicked')) {
        dayButton.classList.remove('clicked');
        numberOfDaysSelected--;
        if (dayCounter[dayButton.textContent.toLowerCase()] > 0) {
            dayCounter[dayButton.textContent.toLowerCase()]--;
        }
    } else {
        dayButton.classList.add('clicked');
        numberOfDaysSelected++;
        if (!dayCounter[dayButton.textContent.toLowerCase()]) {
            dayCounter[dayButton.textContent.toLowerCase()] = 1;
        } else {
            dayCounter[dayButton.textContent.toLowerCase()]++;
        }
    }
    updateTotalCost();
}

function handleClearDaysClick() {
    var daySelectors = document.querySelectorAll('.day-selector');
    daySelectors.forEach(function (daySelector) {
        daySelector.classList.remove('clicked');
    });
    numberOfDaysSelected = 0;
    dayCounter = {};
    updateTotalCost();
}

document.addEventListener('DOMContentLoaded', function () {
    var costPerFullDay = 100;
    var costPerHalfDay = 20;
    var currentCostPerDay = costPerFullDay;
    var clearDaysButton = document.getElementById('clear-days');
    var halfDayButton = document.getElementById('half');
    var fullDayButton = document.getElementById('full');
    var dayCounter = {};

    function updateTotalCost() {
        var totalCost = currentCostPerDay * numberOfDaysSelected;
        document.getElementById('total-cost').textContent = '$' + totalCost.toFixed(2);
    }

    function handleDayClick(event) {
        var dayButton = event.target;
        if (dayButton.classList.contains('clicked')) {
            dayButton.classList.remove('clicked');
            numberOfDaysSelected--;
            dayCounter[dayButton.textContent.toLowerCase()]--;
        } else {
            dayButton.classList.add('clicked');
            numberOfDaysSelected++;
            dayCounter[dayButton.textContent.toLowerCase()]++;
        }
        updateTotalCost();
    }

    function handleHalfDayClick() {
        currentCostPerDay = costPerHalfDay;
        halfDayButton.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
        updateTotalCost();
    }

    function handleFullDayClick() {
        currentCostPerDay = costPerFullDay;
        fullDayButton.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        updateTotalCost();
    }

    function handleClearDaysClick() {
        var daySelectors = document.querySelectorAll('.day-selector');
        daySelectors.forEach(function (daySelector) {
            daySelector.classList.remove('clicked');
        });
        numberOfDaysSelected = 0;
        dayCounter = {};
        updateTotalCost();
    }

    var daySelectors = document.querySelectorAll('.day-selector');
    daySelectors.forEach(function (daySelector) {
        daySelector.addEventListener('click', handleDayClick);
    });

    halfDayButton.addEventListener('click', handleHalfDayClick);
    fullDayButton.addEventListener('click', handleFullDayClick);
    clearDaysButton.addEventListener('click', handleClearDaysClick);
});


document.addEventListener('DOMContentLoaded', function () {
    var costPerFullDay = 35;
    var costPerHalfDay = 20;
    var currentCostPerDay = costPerFullDay;
    var clearDaysButton = document.getElementById('clear-days');
    var halfDayButton = document.getElementById('half');
    var fullDayButton = document.getElementById('full');
    var dayCounter = {};

    function updateTotalCost() {
        var totalCost = currentCostPerDay * numberOfDaysSelected;
        document.getElementById('total-cost').textContent = '$' + totalCost.toFixed(2);
    }

    function handleDayClick(event) {
        var dayButton = event.target;
        if (dayButton.classList.contains('clicked')) {
            dayButton.classList.remove('clicked');
            numberOfDaysSelected--;
            dayCounter[dayButton.textContent.toLowerCase()]--;
        } else {
            dayButton.classList.add('clicked');
            numberOfDaysSelected++;
            dayCounter[dayButton.textContent.toLowerCase()]++;
        }
        updateTotalCost();
    }

    function handleHalfDayClick() {
        currentCostPerDay = costPerHalfDay;
        halfDayButton.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
        updateTotalCost();
    }

    function handleFullDayClick() {
        currentCostPerDay = costPerFullDay;
        fullDayButton.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        updateTotalCost();
    }

    function handleClearDaysClick() {
        var daySelectors = document.querySelectorAll('.day-selector');
        daySelectors.forEach(function (daySelector) {
            daySelector.classList.remove('clicked');
        });
        numberOfDaysSelected = 0;
        dayCounter = {};
        updateTotalCost();
    }

    var daySelectors = document.querySelectorAll('.day-selector');
    daySelectors.forEach(function (daySelector) {
        daySelector.addEventListener('click', handleDayClick);
    });

    halfDayButton.addEventListener('click', handleHalfDayClick);
    fullDayButton.addEventListener('click', handleFullDayClick);
    clearDaysButton.addEventListener('click', handleClearDaysClick);
});


function calculateCost() {
    var totalCost = calculateTotalCost();
    var calculatedCostElement = document.getElementById('calculated-cost');
    calculatedCostElement.innerHTML = '$' + totalCost.toFixed(2); // Format the total cost as needed
}
calculateCost();
