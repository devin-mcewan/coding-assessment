let box1count = 0;
let box2count = 0;
let box3count = 0;

const onClick = () => {
  alert("Your form has been sent");
};

const onClickCount1 = () => {
  box1count++;
  if (box1count === 3 && box2count === 2 && box3count === 1) {
    document.getElementById("easter-egg").innerHTML = `
        <h1>Congrats! Here's 25% off your next visit<h1>
        `;
  }
};
const onClickCount2 = () => {
  box2count++;
  if (box1count === 3 && box2count === 2 && box3count === 1) {
    document.getElementById("easter-egg").innerHTML = `
        <h1>Congrats! Here's 25% off your next visit: EasterEgg25<h1>

        `;
  }
};
const onClickCount3 = () => {
  box3count++;
  if (box1count === 3 && box2count === 2 && box3count === 1) {
    document.getElementById("easter-egg").innerHTML = `
        <h1>Congrats! Here's 25% off your next visit<h1>
        `;
  }
};

function enableSubmit() {
  let inputs = document.getElementsByClassName("required"); // Enter your class name for a required field, this should also be reflected within your form fields.
  let btn = document.querySelector('input[type="submit"]');
  let isValid = true;
  for (var i = 0; i < inputs.length; i++) {
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null) {
      isValid = false;
      break;
    }
  }
  btn.disabled = !isValid;
}