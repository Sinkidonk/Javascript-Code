/*
JavaScript 6th Edition
Chapter 12
Hands-on Project 12-2

Author: Alex Parys
Date: 4/8/2018
*/

function convert() {
    var lb = $("#pValue").val()
    var kg = Math.round(lb / 2.2)
    $("#kValue").html(kg)
}

$("#convertButton").click(convert)
$("#pValue").val("")
$("#kValue").html("")