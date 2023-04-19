const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".count-of-notes");
const nextButton = document.querySelector(".next-button");
const makeVisible = document.querySelector(".invisible");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    console.log("A1");
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturn = cashGiven.value - billAmount.value;
      if (amountToBeReturn < 0) {
        showMessage("Do you wanna wash plates ?");
        return;
      }
      calculateGiven(amountToBeReturn);
    } else {
      console.log("A2");
      showMessage("Do you wanna wash plates ?");
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function calculateGiven(amountToBeReturned) {
  // Here we are going over all the notes

  for (let i = 0; i < availableNotes.length; i++) {
    // No of notes needed for the denomination
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    // Amount left after the number of notes needed
    amountToBeReturned = amountToBeReturned % availableNotes[i];

    // No of notes in the table for the current amount
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}
function showMessage(msg) {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
}

//** Bonus */
nextButton.addEventListener("click", () => {
  makeVisible.classList.add("visible");
});
