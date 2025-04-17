let calculation = localStorage.getItem('calculation') || '';

showCalculation(); //-HINDI PWEDE KASI WALANG NAKALAGAY NA VALUE SA LOCAL STORAGE, IF NILAGYAN NG ZERO, MASASAMA SA CALCULATION, HASSLE

function showCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;

  localStorage.setItem('calculation', calculation);
}

function updateCalculation(value) {
  calculation += value;

  showCalculation();
}

//DOM Algo
// 1. Create an HTML element that will handle the changes. Ex: <p class="js-calculation"></p>
// 2. Get the DOM element that we want to save the value to. Ex: document.querySelector('.js-calculation')
// 3. Save the value to the DOM element. Ex: document.querySelector('.js-calculation').innerHTML = calculation;
// 4. Save the value to the local storage (para kapag nirefresh, di mawawala). Ex: localStorage.setItem('calculation', calculation);
// 5. Get the value from the local storage. Ex: let calculation = localStorage.getItem('calculation');
// 6. Call the function when the page is loaded. Ex: showCalculation();
// 7. Call the function when the button is clicked. Ex: <button onclick="updateCalculation('.');">.</button>

// Optional: you can also create a function in order
// to reuse this code.
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}