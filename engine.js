const tipAmountDisplayer = document.getElementById("displaysTipAmount");

const totalDisplayer = document.getElementById("displaysTotal");

const customButton = document.getElementById("customButton");

const billInput = document.getElementById("billInput");

const peopleInput = document.getElementById("peopleInput");

const buttons = Array.from(document.querySelectorAll("button"));

const inputs = Array.from(document.querySelectorAll("input"));

let selectedTip = 0;



function SelectTip (tip) { selectedTip = tip; }



function Reset() {

    tipAmountDisplayer.textContent = "$0.00";

    totalDisplayer.textContent = "$0.00";

    buttons.forEach(button => {
        button.classList.remove("pressed");
    });

    inputs.forEach(input => {
        input.value = null;
    });

    customButton.classList.remove("pressed");
}



function selectedButton(clicked) {

    customButton.classList.remove("pressed");

    buttons.forEach(button => {
        button.classList.remove("pressed");
    });

    buttons[clicked].classList.add("pressed");
}

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        SelectTip(parseInt(button.textContent));

        selectedButton(index);
    });
});




function calculator() {

    const bill = parseFloat(billInput.value) || 0;

    const people = Math.max(parseInt(peopleInput.value) || 1, 1);// at least one payer

    tipAmountDisplayer.textContent = `$ ${(bill * selectedTip / 100).toFixed(2)}`;

    totalDisplayer.textContent = `$ ${((bill + (bill * selectedTip / 100)) / people).toFixed(2)}`;// bill + tip / payers
}

peopleInput.addEventListener("input", calculator);




function customTip() {

    const parsedValue = parseFloat(customButton.value);
    
    if (!isNaN(parsedValue) && parsedValue > 0) {

        selectedTip = parsedValue;

        buttons.forEach(button => button.classList.remove("pressed"));

       customButton.classList.add("pressed");
   }
}

customButton.addEventListener("input", customTip);
