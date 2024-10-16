const theButton = document.getElementById("convert-btn");
const theInput = document.getElementById("number");
const theOutput = document.getElementById("output");

const convertRomanNumeral = () => {
  const inputValue = theInput.value.trim();

  if (inputValue === "") {
    theOutput.innerHTML = "Please enter a valid number";
  } else if (inputValue < 0) {
    theOutput.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (inputValue > 3999) {
    theOutput.innerHTML = "Please enter a number less than or equal to 3999";
  }
};

theButton.addEventListener("click", convertRomanNumeral);
