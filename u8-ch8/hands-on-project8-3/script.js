"use strict";

function selectCardType() {

    //Declare the local variables listed in Table 8-9.
    var cardNumValue = document.getElementById("ccNum").value;
    var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var mc = /^5 [1-5][0-9]{14}$/;
    var discover = /^6(?:011| 5[0-9]{2}) [0-9]{12}$/;
    var amex = /^3[47][0-9]{13}$/;

    //Within selectCardType() function, add the following series of if/else statements to test the card number entered by a user against the regular expressions and check the option button for the matching card type.
    if (visa.test(cardNumValue)) {
        document.getElementById("visa").checked = "checked";
    } else if (mc.test(cardNumValue)) {
        document.getElementById("mc").checked = "checked";
    } else if (amex.test(cardNumValue)) {
        document.getElementById("amex").checked = "checked;";
    } else if (discover.test(cardNumValue)) {
        document.getElementById("discover").checked = "checked";
    }
}

function createEventListeners() {
    var cardNum = document.getElementById("ccNum");
    if (cardNum.addEventListener) {
        cardNum.addEventListener("change", selectCardType, false);
    } else if (cardNum.attachEvent) {
        cardNum.attachEvent("onchange", selectCardType);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
