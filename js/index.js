function depositClick() {
    var amt = prompt("How much would you like to deposit?");
    if (amt === null) {
        return;
    }
    document.getElementById("balance").innerHTML = parseInt(document.getElementById("balance").innerHTML) + parseInt(amt);
}

var amount = 20;
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
    amount -= parseInt(amt);
    document.getElementById("amount_left").innerHTML = amount;
}

// var width = 80;
// var base = setInterval(updateBar, 10)
// function pauseProgress() {
//     if (width >= 100){
//         clearInterval(base);
//     }
//     else{
//         width++;
//         element.style.width = width + '%';
//         element.innerHTML = width * 1+ '%';
//     }
// }
// pauseProgress();

