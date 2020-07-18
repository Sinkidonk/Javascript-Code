/*
JavaScript 6th Edition
Chapter 12
Hands-on Project 12- 1

Author: Alex Parys
Date: 4/8/2018

*/

function display(event) {
    $(event.currentTarget).next().fadeIn("slow")
}
$("h3").click(display)



