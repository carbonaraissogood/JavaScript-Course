function isToggled(typeOfButton) {
  const button = document.querySelector(`.${typeOfButton}`);

  if(!button.classList.contains('isToggled-button')) {
    button.classList.add('isToggled-button');
  } else {
    button.classList.remove('isToggled-button');
  }
}