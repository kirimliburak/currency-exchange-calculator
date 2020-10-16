var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
newdate = year + "-" + month + "-" + day;
document.getElementById("input-date").max = newdate;

var selectionArray = [];
for (let i = 0; i < 33; i++) {
    selectionArray.push(false);
}

function setOthersFalse(index) {
    for (var k = 0; k < 33; k++) {
        if (index != k) {
            selectionArray[k] = false;
        }
    }
}

let selectionString = "";

function baseSelection(value) {
    const selection = parseInt(value);
    if (selection == 1) {
        document.getElementById("dropdownMenuButton").innerText = "TRY";
        setOthersFalse(selection);
        selectionString = "TRY";
    }
    else if (selection == 2) {
        document.getElementById("dropdownMenuButton").innerText = "USD";
        setOthersFalse(selection);
        selectionString = "USD";
    }
    else if (selection == 3) {
        document.getElementById("dropdownMenuButton").innerText = "GBP";
        setOthersFalse(selection);
        selectionString = "GBP";
    }
    else if (selection == 4) {
        document.getElementById("dropdownMenuButton").innerText = "HKD";
        setOthersFalse(selection);
        selectionString = "HKD";
    }
    else if (selection == 5) {
        document.getElementById("dropdownMenuButton").innerText = "IDR";
        setOthersFalse(selection);
        selectionString = "IDR";
    }
    else if (selection == 6) {
        document.getElementById("dropdownMenuButton").innerText = "ILS";
        setOthersFalse(selection);
        selectionString = "ILS";
    }
    else if (selection == 7) {
        document.getElementById("dropdownMenuButton").innerText = "DKK";
        setOthersFalse(selection);
        selectionString = "DKK";
    }
    else if (selection == 8) {
        document.getElementById("dropdownMenuButton").innerText = "INR";
        setOthersFalse(selection);
        selectionString = "INR";
    }
    else if (selection == 9) {
        document.getElementById("dropdownMenuButton").innerText = "CHF";
        setOthersFalse(selection);
        selectionString = "CHF";
    }
    else if (selection == 10) {
        document.getElementById("dropdownMenuButton").innerText = "MXN";
        setOthersFalse(selection);
        selectionString = "MXN";
    }
    else if (selection == 11) {
        document.getElementById("dropdownMenuButton").innerText = "CZK";
        setOthersFalse(selection);
        selectionString = "CZK";
    }
    else if (selection == 12) {
        document.getElementById("dropdownMenuButton").innerText = "SGD";
        setOthersFalse(selection);
        selectionString = "SGD";
    }
    else if (selection == 13) {
        document.getElementById("dropdownMenuButton").innerText = "THB";
        setOthersFalse(selection);
        selectionString = "THB";
    }
    else if (selection == 14) {
        document.getElementById("dropdownMenuButton").innerText = "HRK";
        setOthersFalse(selection);
        selectionString = "HRK";
    }
    else if (selection == 15) {
        document.getElementById("dropdownMenuButton").innerText = "EUR";
        setOthersFalse(selection);
        selectionString = "EUR";
    }
    else if (selection == 16) {
        document.getElementById("dropdownMenuButton").innerText = "MYR";
        setOthersFalse(selection);
        selectionString = "MYR";
    }
    else if (selection == 17) {
        document.getElementById("dropdownMenuButton").innerText = "NOK";
        setOthersFalse(selection);
        selectionString = "NOK";
    }
    else if (selection == 18) {
        document.getElementById("dropdownMenuButton").innerText = "CNY";
        setOthersFalse(selection);
        selectionString = "CNY";
    }
    else if (selection == 19) {
        document.getElementById("dropdownMenuButton").innerText = "BGN";
        setOthersFalse(selection);
        selectionString = "BGN";
    }
    else if (selection == 20) {
        document.getElementById("dropdownMenuButton").innerText = "PHP";
        setOthersFalse(selection);
        selectionString = "PHP";
    }
    else if (selection == 21) {
        document.getElementById("dropdownMenuButton").innerText = "PLN";
        setOthersFalse(selection);
        selectionString = "PLN";
    }
    else if (selection == 22) {
        document.getElementById("dropdownMenuButton").innerText = "ZAR";
        setOthersFalse(selection);
        selectionString = "ZAR";
    }
    else if (selection == 23) {
        document.getElementById("dropdownMenuButton").innerText = "CAD";
        setOthersFalse(selection);
        selectionString = "CAD";
    }
    else if (selection == 24) {
        document.getElementById("dropdownMenuButton").innerText = "ISK";
        setOthersFalse(selection);
        selectionString = "ISK";
    }
    else if (selection == 25) {
        document.getElementById("dropdownMenuButton").innerText = "BRL";
        setOthersFalse(selection);
        selectionString = "BRL";
    }
    else if (selection == 26) {
        document.getElementById("dropdownMenuButton").innerText = "RON";
        setOthersFalse(selection);
        selectionString = "RON";
    }
    else if (selection == 27) {
        document.getElementById("dropdownMenuButton").innerText = "NZD";
        setOthersFalse(selection);
        selectionString = "NZD";
    }
    else if (selection == 28) {
        document.getElementById("dropdownMenuButton").innerText = "JPY";
        setOthersFalse(selection);
        selectionString = "JPY";
    }
    else if (selection == 29) {
        document.getElementById("dropdownMenuButton").innerText = "RUB";
        setOthersFalse(selection);
        selectionString = "RUB";
    }
    else if (selection == 30) {
        document.getElementById("dropdownMenuButton").innerText = "KRW";
        setOthersFalse(selection);
        selectionString = "KRW";
    }
    else if (selection == 31) {
        document.getElementById("dropdownMenuButton").innerText = "AUD";
        setOthersFalse(selection);
        selectionString = "AUD";
    }
    else if (selection == 32) {
        document.getElementById("dropdownMenuButton").innerText = "HUF";
        setOthersFalse(selection);
        selectionString = "HUF";
    }
    else if (selection == 33) {
        document.getElementById("dropdownMenuButton").innerText = "SEK";
        setOthersFalse(selection);
        selectionString = "SEK";
    }
}

async function showCurrency() {
    let baseSelection = (selectionArray.indexOf(true)) + 1;
    let dateSelection = document.getElementById("input-date").value;
    let baseURL = `https://api.ratesapi.io/api/${dateSelection}?base=${selectionString}`;
    let response = await fetch(baseURL, {
        method: 'GET',
    });

    let characterInfo = await response.json();
    console.log(characterInfo);
}