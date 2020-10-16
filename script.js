var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
newdate = year + "-" + month + "-" + day;
document.getElementById("input-date").max = newdate;
document.getElementById("input-date").min = "1900-01-01";


let selectionString = "";
let targetSelectionString = "";

function baseSelection(value) {
    const selection = parseInt(value);
    if (selection == 1) {
        document.getElementById("dropdownMenuButton").innerText = "TRY";
        selectionString = "TRY";
    }
    else if (selection == 2) {
        document.getElementById("dropdownMenuButton").innerText = "USD";
        selectionString = "USD";
    }
    else if (selection == 3) {
        document.getElementById("dropdownMenuButton").innerText = "GBP";
        selectionString = "GBP";
    }
    else if (selection == 4) {
        document.getElementById("dropdownMenuButton").innerText = "HKD";
        selectionString = "HKD";
    }
    else if (selection == 5) {
        document.getElementById("dropdownMenuButton").innerText = "IDR";
        selectionString = "IDR";
    }
    else if (selection == 6) {
        document.getElementById("dropdownMenuButton").innerText = "ILS";
        selectionString = "ILS";
    }
    else if (selection == 7) {
        document.getElementById("dropdownMenuButton").innerText = "DKK";
        selectionString = "DKK";
    }
    else if (selection == 8) {
        document.getElementById("dropdownMenuButton").innerText = "INR";
        selectionString = "INR";
    }
    else if (selection == 9) {
        document.getElementById("dropdownMenuButton").innerText = "CHF";
        selectionString = "CHF";
    }
    else if (selection == 10) {
        document.getElementById("dropdownMenuButton").innerText = "MXN";
        selectionString = "MXN";
    }
    else if (selection == 11) {
        document.getElementById("dropdownMenuButton").innerText = "CZK";
        selectionString = "CZK";
    }
    else if (selection == 12) {
        document.getElementById("dropdownMenuButton").innerText = "SGD";
        selectionString = "SGD";
    }
    else if (selection == 13) {
        document.getElementById("dropdownMenuButton").innerText = "THB";
        selectionString = "THB";
    }
    else if (selection == 14) {
        document.getElementById("dropdownMenuButton").innerText = "HRK";
        selectionString = "HRK";
    }
    else if (selection == 15) {
        document.getElementById("dropdownMenuButton").innerText = "EUR";
        selectionString = "EUR";
    }
    else if (selection == 16) {
        document.getElementById("dropdownMenuButton").innerText = "MYR";
        selectionString = "MYR";
    }
    else if (selection == 17) {
        document.getElementById("dropdownMenuButton").innerText = "NOK";
        selectionString = "NOK";
    }
    else if (selection == 18) {
        document.getElementById("dropdownMenuButton").innerText = "CNY";
        selectionString = "CNY";
    }
    else if (selection == 19) {
        document.getElementById("dropdownMenuButton").innerText = "BGN";
        selectionString = "BGN";
    }
    else if (selection == 20) {
        document.getElementById("dropdownMenuButton").innerText = "PHP";
        selectionString = "PHP";
    }
    else if (selection == 21) {
        document.getElementById("dropdownMenuButton").innerText = "PLN";
        selectionString = "PLN";
    }
    else if (selection == 22) {
        document.getElementById("dropdownMenuButton").innerText = "ZAR";
        selectionString = "ZAR";
    }
    else if (selection == 23) {
        document.getElementById("dropdownMenuButton").innerText = "CAD";
        selectionString = "CAD";
    }
    else if (selection == 24) {
        document.getElementById("dropdownMenuButton").innerText = "ISK";
        selectionString = "ISK";
    }
    else if (selection == 25) {
        document.getElementById("dropdownMenuButton").innerText = "BRL";
        selectionString = "BRL";
    }
    else if (selection == 26) {
        document.getElementById("dropdownMenuButton").innerText = "RON";
        selectionString = "RON";
    }
    else if (selection == 27) {
        document.getElementById("dropdownMenuButton").innerText = "NZD";
        selectionString = "NZD";
    }
    else if (selection == 28) {
        document.getElementById("dropdownMenuButton").innerText = "JPY";
        selectionString = "JPY";
    }
    else if (selection == 29) {
        document.getElementById("dropdownMenuButton").innerText = "RUB";
        selectionString = "RUB";
    }
    else if (selection == 30) {
        document.getElementById("dropdownMenuButton").innerText = "KRW";
        selectionString = "KRW";
    }
    else if (selection == 31) {
        document.getElementById("dropdownMenuButton").innerText = "AUD";
        selectionString = "AUD";
    }
    else if (selection == 32) {
        document.getElementById("dropdownMenuButton").innerText = "HUF";
        selectionString = "HUF";
    }
    else if (selection == 33) {
        document.getElementById("dropdownMenuButton").innerText = "SEK";
        selectionString = "SEK";
    }
}

function targetSelection(value) {
    const selection = parseInt(value);
    if (selection == 1) {
        document.getElementById("dropdownMenuButton2").innerText = "TRY";
        targetSelectionString = "TRY";
    }
    else if (selection == 2) {
        document.getElementById("dropdownMenuButton2").innerText = "USD";
        targetSelectionString = "USD";
    }
    else if (selection == 3) {
        document.getElementById("dropdownMenuButton2").innerText = "GBP";
        targetSelectionString = "GBP";
    }
    else if (selection == 4) {
        document.getElementById("dropdownMenuButton2").innerText = "HKD";
        targetSelectionString = "HKD";
    }
    else if (selection == 5) {
        document.getElementById("dropdownMenuButton2").innerText = "IDR";
        targetSelectionString = "IDR";
    }
    else if (selection == 6) {
        document.getElementById("dropdownMenuButton2").innerText = "ILS";
        targetSelectionString = "ILS";
    }
    else if (selection == 7) {
        document.getElementById("dropdownMenuButton2").innerText = "DKK";
        targetSelectionString = "DKK";
    }
    else if (selection == 8) {
        document.getElementById("dropdownMenuButton2").innerText = "INR";
        targetSelectionString = "INR";
    }
    else if (selection == 9) {
        document.getElementById("dropdownMenuButton2").innerText = "CHF";
        targetSelectionString = "CHF";
    }
    else if (selection == 10) {
        document.getElementById("dropdownMenuButton2").innerText = "MXN";
        targetSelectionString = "MXN";
    }
    else if (selection == 11) {
        document.getElementById("dropdownMenuButton2").innerText = "CZK";
        targetSelectionString = "CZK";
    }
    else if (selection == 12) {
        document.getElementById("dropdownMenuButton2").innerText = "SGD";
        targetSelectionString = "SGD";
    }
    else if (selection == 13) {
        document.getElementById("dropdownMenuButton2").innerText = "THB";
        targetSelectionString = "THB";
    }
    else if (selection == 14) {
        document.getElementById("dropdownMenuButton2").innerText = "HRK";
        targetSelectionString = "HRK";
    }
    else if (selection == 15) {
        document.getElementById("dropdownMenuButton2").innerText = "EUR";
        targetSelectionString = "EUR";
    }
    else if (selection == 16) {
        document.getElementById("dropdownMenuButton2").innerText = "MYR";
        targetSelectionString = "MYR";
    }
    else if (selection == 17) {
        document.getElementById("dropdownMenuButton2").innerText = "NOK";
        targetSelectionString = "NOK";
    }
    else if (selection == 18) {
        document.getElementById("dropdownMenuButton2").innerText = "CNY";
        targetSelectionString = "CNY";
    }
    else if (selection == 19) {
        document.getElementById("dropdownMenuButton2").innerText = "BGN";
        targetSelectionString = "BGN";
    }
    else if (selection == 20) {
        document.getElementById("dropdownMenuButton2").innerText = "PHP";
        targetSelectionString = "PHP";
    }
    else if (selection == 21) {
        document.getElementById("dropdownMenuButton2").innerText = "PLN";
        targetSelectionString = "PLN";
    }
    else if (selection == 22) {
        document.getElementById("dropdownMenuButton2").innerText = "ZAR";
        targetSelectionString = "ZAR";
    }
    else if (selection == 23) {
        document.getElementById("dropdownMenuButton2").innerText = "CAD";
        targetSelectionString = "CAD";
    }
    else if (selection == 24) {
        document.getElementById("dropdownMenuButton2").innerText = "ISK";
        targetSelectionString = "ISK";
    }
    else if (selection == 25) {
        document.getElementById("dropdownMenuButton2").innerText = "BRL";
        targetSelectionString = "BRL";
    }
    else if (selection == 26) {
        document.getElementById("dropdownMenuButton2").innerText = "RON";
        targetSelectionString = "RON";
    }
    else if (selection == 27) {
        document.getElementById("dropdownMenuButton2").innerText = "NZD";
        targetSelectionString = "NZD";
    }
    else if (selection == 28) {
        document.getElementById("dropdownMenuButton2").innerText = "JPY";
        targetSelectionString = "JPY";
    }
    else if (selection == 29) {
        document.getElementById("dropdownMenuButton2").innerText = "RUB";
        targetSelectionString = "RUB";
    }
    else if (selection == 30) {
        document.getElementById("dropdownMenuButton2").innerText = "KRW";
        targetSelectionString = "KRW";
    }
    else if (selection == 31) {
        document.getElementById("dropdownMenuButton2").innerText = "AUD";
        targetSelectionString = "AUD";
    }
    else if (selection == 32) {
        document.getElementById("dropdownMenuButton2").innerText = "HUF";
        targetSelectionString = "HUF";
    }
    else if (selection == 33) {
        document.getElementById("dropdownMenuButton2").innerText = "SEK";
        targetSelectionString = "SEK";
    }
}

let exchangeValue = 1;

async function showCurrency() {
    let dateSelection = document.getElementById("input-date").value;
    let URL = `https://api.ratesapi.io/api/${dateSelection}?base=${selectionString}&symbols=${targetSelectionString}`;
    let response = await fetch(URL, {
        method: 'GET',
    });

    let resultValue = await response.json();
    console.log(resultValue);
    document.getElementById("from-converter").innerText = selectionString;
    document.getElementById("to-converter").innerText = targetSelectionString;

    document.getElementById("from-input-field").value = 1;
    document.getElementById("to-input-field").value = 1 * Object.values(resultValue.rates)[0].toFixed(2);
    exchangeValue = Object.values(resultValue.rates)[0];
}

function converter() {
    let fromValue = document.getElementById("from-input-field").value;
    if (fromValue < 0) {
        document.getElementById("to-input-field").value = 0;
    } else {
        document.getElementById("to-input-field").value = (fromValue * exchangeValue).toFixed(2);
    }
}

function reverseConverter() {
    let toValue = document.getElementById("to-input-field").value;
    if (toValue < 0) {
        document.getElementById("from-input-field").value = 0;
    } else {
        document.getElementById("from-input-field").value = (toValue / exchangeValue).toFixed(2);
    }
}