const { cos } = require("three/tsl");

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    document.querySelector('.error-handler-js').innerHTML = ``;
    document.querySelector('.js-cost').innerHTML = ``;
    calculateTotal();
  }
}

function calculateTotal () {
  const inputElement = document.querySelector('.js-cost-input');

  let cost = Number(inputElement.value);

  if (cost < 0) {
    return document.querySelector('.error-handler-js').innerHTML = `Error: cost cannot be less than $0`;
  }

  if (cost >= 0 && cost < 40) {
    cost += 10;
  }

  document.querySelector('.js-cost').innerHTML = `$${cost}`;
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  };
}