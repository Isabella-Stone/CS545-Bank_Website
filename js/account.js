var infoUpdated = false;

window.onload = function getValues() {
    if (sessionStorage.getItem("infoUpdated") == null || sessionStorage.getItem("infoUpdated") == 'false')
    {
        sessionStorage.setItem("infoUpdated", infoUpdated);
    }
    if (sessionStorage.getItem("infoUpdated") != 'true')
    {
        localStorage.setItem("storeName", document.getElementById("name").innerHTML);
        localStorage.setItem("storeTel", document.getElementById("tel").innerHTML);
        localStorage.setItem("storeEmail", document.getElementById("email").innerHTML);
    }
    document.getElementById("name").innerHTML = localStorage.getItem("storeName");
    document.getElementById("tel").innerHTML = localStorage.getItem("storeTel");
    document.getElementById("email").innerHTML = localStorage.getItem("storeEmail");
}

function returnName(){
    var format = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(document.getElementById("newname").value.match(format)){
        document.getElementById("name").innerHTML = document.getElementById("newname").value;    }
    else{
        alert("You have entered an invalid first and last name");
    }
    localStorage.setItem("storeName", document.getElementById("name").innerHTML);
    sessionStorage.setItem("infoUpdated", 'true');
}

function returnTel(){
    var format = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(document.getElementById("newtel").value.match(format)){
        document.getElementById("tel").innerHTML = document.getElementById("newtel").value;
    }
    else{
        alert("You have entered an invalid phone number");
    }
    localStorage.setItem("storeTel", document.getElementById("tel").innerHTML);
    sessionStorage.setItem("infoUpdated", 'true');
}

function returnEmail(){
    var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (document.getElementById("newemail").value.match(format)){
        document.getElementById("email").innerHTML = document.getElementById("newemail").value;
    }
    else{
        alert("You have entered an invalid email address");
    }
    localStorage.setItem("storeEmail", document.getElementById("email").innerHTML);
    sessionStorage.setItem("infoUpdated", 'true');
}