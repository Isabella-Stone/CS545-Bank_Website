function returnName(){
    var format = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(document.getElementById("newname").value.match(format)){
        document.getElementById("name").innerHTML = document.getElementById("newname").value;    }
    else{
        alert("You have entered an invalid first and last name");
    }
}

function returnTel(){
    var format = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(document.getElementById("newtel").value.match(format)){
        document.getElementById("tel").innerHTML = document.getElementById("newtel").value;
    }
    else{
        alert("You have entered an invalid phone number");
    }
}

function returnEmail(){
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (document.getElementById("newemail").value.match(format)){
        document.getElementById("email").innerHTML = document.getElementById("newemail").value;
    }
    else{
        alert("You have entered an invalid email address");
    }
}