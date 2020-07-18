"use strict";

var newAccountArray = new Array();

function createID() {

    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    var account = document.getElementById("accountidbox");

    var fields = document.getElementsByTagName("input");

    var acctid;
    var firstInit;
    var lastInit;

    if (fname != "") { firstInit = fname.value.charAt(0).toUpperCase(); }
    if (lname != "") { lastInit = lname.value.charAt(0).toUpperCase(); }
    if (acctid != "") { acctid = firstInit + lastInit + zip.value; }
    account.value = acctid;
    newAccountArray = [];
    for (var i = 0; i < fields.length - 1; i++) {
        newAccountArray.push(fields[i].value);
    }
}


function createEventListeners() {
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");

    if (fname.addEventListener) {
        fname.addEventListener("change", createID, false);
        lname.addEventListener("change", createID, false);
        zip.addEventListener("change", createID, false);
    } else if (fname.attachEvent) {
        fname.attachEvent("onchange", createID);
        lname.attachEvent("onchange", createID);
        zip.attachEvent("onchange", createID);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEentListeners);
}

