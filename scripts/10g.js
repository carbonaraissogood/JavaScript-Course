function isToggled(typeOfButton) {
  const button = document.querySelector(`.${typeOfButton}`);

  if(!button.classList.contains('isToggled-button')) {
    isPreviousButtonOn();

    button.classList.add('isToggled-button');
  } else {
    button.classList.remove('isToggled-button');
    //button.classList.add('isToggled-button');
  }
}

function isPreviousButtonOn() {
  const previousButton = document.querySelector('.isToggled-button');

  if(previousButton) {
    previousButton.classList.remove('isToggled-button');
  }
}