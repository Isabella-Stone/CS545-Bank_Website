function depositClick() {
    var amt = prompt("How much would you like to deposit?");
    if (amt === null) {
        return;
    }
    document.getElementById("balance").innerHTML = parseInt(document.getElementById("balance").innerHTML) + parseInt(amt);
}

var amount = 20;
var count = 2;
var cb = 50;
var update = 3;
var reset = 100;
function withdrawClick() {
    var amt = prompt("How much would you like to withdraw?");
    if (amt === null ) {
        return;
    }
    if (parseInt(amt) > parseInt(document.getElementById("balance").innerHTML)) {
        alert("You cannot withdraw more money than what is currently in your account. The max amount you can currently withdraw is $" + document.getElementById("balance").innerHTML + ".");
        return;
    }
    document.getElementById("balance").innerHTML = parseInt(document.getElementById("balance").innerHTML) - parseInt(amt);

    if(parseInt(amt) < parseInt(amount)){
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
    document.getElementById("amount_left").innerHTML = amount;
    document.getElementById("amount_earned").innerHTML = cb.toFixed(2);
    document.getElementById("percent").innerHTML = amt
    
}

function RedeemClick() {
    document.getElementById("amount_earned").innerHTML = 0;
    cb = 0;
}

