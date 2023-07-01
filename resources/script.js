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

// Below Function Executes On Form Submit
function validationEvent() {
  // Storing Field Values In Variables
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  // Regular Expression For Email
  var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
  // Conditions
  if (name != "" && email != "" && message != "") {
    if (email.match(emailReg)) {
      if (message.length == 0) {
        alert("All type of validation has done on OnSubmit event.");
        return true;
      } else {
        alert("The Message Box must be at least 1 character!");
        return false;
      }
    } else {
      alert("Invalid Email Address...!!!");
      return false;
    }
  } else {
    alert("All fields are required.....!");
    return false;
  }
}
