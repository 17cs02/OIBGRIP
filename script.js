let celsius = document.getElementById("celsius");
let farheneit = document.getElementById("fahrenheit");

celsius.oninput = () => {
    let output = (parseFloat(celsius.value)*9) / 5 + 32;
    farheneit.value = parseFloat(output.toFixed(2));

}

farheneit.oninput = () => {
    let output = ((parseFloat(farheneit.value) - 32) *5)/9 ;
    celsius.value = parseFloat(output.toFixed(2));

}