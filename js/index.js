// Global variables
const birthdate = document.querySelector('#birthdate');
const submitBtn = document.querySelector('.btn');
const resultAge = document.querySelector('#result');
const form = document.querySelector('form');

// Prevent form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Adding an event to the submit button
submitBtn.addEventListener('click', () => {
    calcAge();
});

// Getting today's date
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDay = today.getDate();

// Function to calculate the age
function calcAge() {
    const birthdateValue = birthdate.value;

    // Checking if the user has selected a birthdate
    if (!birthdateValue) {
        resultAge.textContent = "Please enter your birthdate.";
        return;
    }

    const birthYear = Number(birthdateValue.slice(0, 4));
    const birthMonth = Number(birthdateValue.slice(5, 7));
    const birthDay = Number(birthdateValue.slice(8, 10));

    // Check if the birthdate is in the future
    if (new Date(birthYear, birthMonth - 1, birthDay) > today) {
        resultAge.textContent = "Birthdate cannot be in the future.";
        return;
    }

    let year = todayYear - birthYear;
    let month = todayMonth - birthMonth;
    let day = todayDay - birthDay;

    if (day < 0) {
        month--;
        day += new Date(todayYear, todayMonth - 1, 0).getDate(); // Days in the previous month
    }

    if (month < 0) {
        year--;
        month += 12; // Adjust to correct months when birth month hasn't arrived yet
    }

    const result = `${year} Years, ${month} Months, and ${day} Days`;
    displayAge(result);
}

// Function to display the calculated age in the resultAge container
function displayAge(result) {
    // Used textContent to avoid multiple appendages
    resultAge.textContent = result; 
}
