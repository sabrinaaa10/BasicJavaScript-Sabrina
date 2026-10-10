
const form = document.getElementById("converter-form");
const celsiusInput = document.getElementById("celsius");
const result = document.getElementById("result");
const fahrenheitOutput = document.getElementById("fahrenheit");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const celsius = Number(celsiusInput.value);

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Display the result
    fahrenheitOutput.textContent =
        fahrenheit.toFixed(2) + " °F";

    result.hidden = false;
});
