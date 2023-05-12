function getIncome() {
    const IncomeField = document.getElementById('income-field');
    const totalIncome = IncomeField.value;
    return totalIncome;
}

function getExpenses() {
    const foodExpenField = document.getElementById('food-field');
    const foodExpen = foodExpenField.value;
    const rentExpenField = document.getElementById('rent-field');
    const rentExpen = rentExpenField.value;
    const clothExpenField = document.getElementById('cloth-field');
    const clothExpen = clothExpenField.value;

    const totalExpenses = parseInt(foodExpen) + parseInt(rentExpen) + parseInt(clothExpen);
    // console.log(totalExpenses);
    return totalExpenses;
}

// function getBlance() {

//     const prevTotalBlance = blanceField.innerText;
//     return prevTotalBlance;
// }


document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalIncome = getIncome();
    const totalExpenses = getExpenses();
    const balane = parseInt(totalIncome) - totalExpenses;

    const expensField = document.getElementById('expensField');
    expensField.innerText = totalExpenses;

    const blanceField = document.getElementById('blance-field');
    blanceField.innerText = balane;
    // totalBlance.innerText = balane;
    console.log(balane);
})