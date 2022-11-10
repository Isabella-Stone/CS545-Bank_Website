function depositClick() {
    var amt = prompt("How much would you like to deposit?");
    if (amt === null) {
        return;
    }
    document.getElementById("balance").innerHTML = parseInt(document.getElementById("balance").innerHTML) + parseInt(amt);
}

function withdrawClick() {
    var amt = prompt("How much would you like to withdraw?");
    if (amt === null ) {
        return;
    }
    if (parseInt(amt) > parseInt(document.getElementById("balance").innerHTML)) {
        alert("You cannot withdraw more money than what is currently in your account.");
        return;
    }
    document.getElementById("balance").innerHTML = parseInt(document.getElementById("balance").innerHTML) - parseInt(amt);
}

