"use strict"

var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");

function processDeliveryInfo() {
    var prop;
    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;
    for (prop in delivInfo) {
        delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>"
    }
    document.getElementById("deliverTo").style.display = "block";

}

function previewOrder() {
    processDeliveryInfo();
    document.getElementsByTagName("section")[0].style.display = "block";
}

function createEventListener() {
    var submitButton = document.getElementById("previewBtn");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", previewOrder, false);
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick", previewOrder);
    }
}

//create event listener when page finishes loading
if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}