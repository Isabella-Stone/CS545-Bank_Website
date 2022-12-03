var balance;
var valueUpdated = false;

window.onload = function getValues() {
    //console.log('The Script will load now.');
    if (sessionStorage.getItem("valUpdated") == null || sessionStorage.getItem("valUpdated") == 'false')
    {
        sessionStorage.setItem("valUpdated", valueUpdated);
    }
    if (sessionStorage.getItem("valUpdated") != 'true')
    {
        localStorage.setItem("storeBalance", 104600.52);
    }
    document.getElementById("balance").innerHTML = localStorage.getItem("storeBalance");
}
function depositClick() {
    var amt = prompt("How much would you like to deposit?");
    var isNumber = /^\d+\.\d+$|^\d+$/;
    if (!amt.match(isNumber)) {
        alert("You must enter a valid numerical amount to deposit.")
        return;
    }

    balance = parseFloat(document.getElementById("balance").innerHTML) + parseFloat(amt);
    document.getElementById("balance").innerHTML = balance;
    localStorage.setItem("storeBalance", balance);
    sessionStorage.setItem("valUpdated", 'true');
}

var amount = 20;
var count = 2;
var cb = 80;
var update = 3;
var reset = 100;
function withdrawClick() {
    var amt = prompt("How much would you like to withdraw?");
    var isNumber = /^\d+\.\d+$|^\d+$/;
    if (!amt.match(isNumber)) {
        alert("You must enter a valid numerical amount to withdraw.")
        return;
    }

    if (parseFloat(amt) > parseFloat(document.getElementById("balance").innerHTML)) {
        alert("You cannot withdraw more money than what is currently in your account. The max amount you can currently withdraw is $" + document.getElementById("balance").innerHTML + ".");
        return;
    }
    balance = parseFloat(document.getElementById("balance").innerHTML) - parseFloat(amt);
    document.getElementById("balance").innerHTML = balance;
    sessionStorage.setItem("valUpdated", 'true');
    localStorage.setItem("storeBalance", balance);

    if(parseFloat(amt) < parseFloat(amount)){
        amount -= parseInt(amt);
    }
    else{
        var d = Math.ceil(parseInt(amt)/100);
        count = count+d;
        update = update+d;
        amount = (amount+(reset*d)) - amt;
        document.getElementById("counter").innerHTML = count;
        document.getElementById("update").innerHTML = update;
    }
    cb = cb+((parseInt(amt))*(count*0.01));
    document.getElementById("cbr").value = 100-amount;
    document.getElementById("amount_left").innerHTML = amount;
    document.getElementById("amount_earned").innerHTML = cb.toFixed(2);
    document.getElementById("percent").innerHTML = amt;    
}

function RedeemClick() {
    document.getElementById("amount_earned").innerHTML = 0;
    cb = 0;
    document.getElementById("cbr").value = 0;
}

