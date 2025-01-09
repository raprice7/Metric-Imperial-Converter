//get user input (in this case, the number the user wants to convert);
const input = document.getElementById("input");
//store convert btn in a variable so an event listener can be attached
const convertBtn = document.getElementById("btn");

const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");
convertBtn.addEventListener('click', function(){
    //get user input value
    const inputValue = parseFloat(input.value);

    //check if input is a valid number
    if (!isNaN(inputValue)){
        const feet = inputValue * 3.28084;
        const meters = inputValue * 0.3048;

        const liters = inputValue *  3.78541;
        const gallons = inputValue * 0.264;

        const kilograms = inputValue * 0.453592;
        const pounds = inputValue * 2.20462;

        lengthResult.textContent = `${inputValue} meters = ${feet.toFixed(3)} feet| ${inputValue} feet = ${meters.toFixed(3)} meters`;

        volumeResult.textContent = `${inputValue} liters = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${liters.toFixed(3)} liters`;

        massResult.textContent = `${inputValue} kilos = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilograms.toFixed(3)} kilograms`
    }else{
        alert("Not a valid number");
    }
});
