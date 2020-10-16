function baseSelection(value) {
    const selection = parseInt(value);
    if (selection == 1) {
        document.getElementById("dropdownMenuButton").innerText = "TRY";
    } else if (selection == 2) {
        document.getElementById("dropdownMenuButton").innerText = "USD";
    }
}