/*
JavaScript 6th Edition
Chapter 6
Hands-on Project 6-4

Author: Alex Parys
Date: 3/13/2018
*/

"use strict";

/* remove default value and formatting from selection list */
function removeSelectDefault() {
    var selectBox = document.getElementById("size");
    selectBox.selectIndex = -1;
    selectBox.style.boxShadow = "none";
}

/* run initial form configuration functions */
function setUpPage() {
    removeSelectDefault();
    generatePlaceholder();
}

/* remove fallback placeholder text */
function zeroPlaceholder() {
    var instrBox = document.getElementById("instructions");
    instrBox.style.color = "black";
    if (instrBox.value === instrBox.placeholder) {
        instrBox.value = "";
    }
}

/* restore placeholder text if box contains no user entry */
function checkPlaceholder() {
    var instrBox = document.getElementById("instructions");
    if (instrBox.value === "") {
        instrBox.style.color = "rgb(178,184,183)";
        instrBox.value = instrBox.placeholder;
    }
}

/* add placeholder text for browsers that don't support
placeholder attribute */
function generatePlaceholder() {
    if (!Modernizr.input.placeholder) {
        var instrBox = document.getElementById("instructions");
        instrBox.value = instrBox.placeholder;
        instrBox.style.color = "rgb(178,184,183)";
        if (instrBox.addEventListener) {
            intstrBox.addEventListener("focus", zeroPlaceholder, false);
            intstrBox.addEventListener("blur", checkPlaceholder, false);
        } else if (instrBox.attachEvent) {
            instrBox.attachEvent("onfocus", zeroPlaceholder);
            instrBox.attachEvent("onblur", checkPlaceholder)
        }
    }
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage)
}