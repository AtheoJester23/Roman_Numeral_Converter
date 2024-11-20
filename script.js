const theButton = document.getElementById("convert-btn");
const theInput = document.getElementById("number");
const theOutput = document.getElementById("output");

const num = parseInt(theInput.value);

// Roman numeral conversion map
const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

function convertRomanNumeral() {
  const inputValue = parseInt(theInput.value.trim());
  const noInp = theInput.value.trim();

  if (noInp == "") {
    theOutput.innerHTML = "Please enter a valid number";
    theOutput.style.fontSize = "1rem";
    theOutput.style.fontFamily = `system-ui`;
  } else if (inputValue < 0) {
    theOutput.innerHTML = "Please enter a number greater than or equal to 1";
    theOutput.style.fontSize = "1rem";
    theOutput.style.fontFamily = `system-ui`;
  } else if (inputValue > 3999) {
    theOutput.innerHTML = "Please enter a number less than or equal to 3999";
    theOutput.style.fontSize = "1rem";
    theOutput.style.fontFamily = `system-ui`;
  } else {
    let result = "";
    let remaining = inputValue;

    for (let i = 0; i < romanNumerals.length; i++) {
      while (remaining >= romanNumerals[i].value) {
        result += romanNumerals[i].numeral;
        remaining -= romanNumerals[i].value;
      }
    }

    theOutput.innerHTML = `${result}`;
    theOutput.style.fontSize = "3rem";
  }

  console.log(inputValue);
  return;
}

theButton.addEventListener("click", () => {
  convertRomanNumeral();
});
