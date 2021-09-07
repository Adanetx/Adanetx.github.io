"use strict";

let delay = 250;
let mytext;
let index;
let textArray;
let timecounter;

function myfunc() {
    // document.getElementById("mytextarea").value = JUGGLER;
    let h = document.getElementById("sec").value; //
    document.getElementById("mytextarea").value = ANIMATIONS[h];
}

function myfunc1() {
    let size = parseInt(document.getElementById("sizes").value);
    console.log(size);
    document.getElementById("mytextarea").style.fontSize = size + "pt";
}

function myfunc2() {
    myfunc4("start");
    mytext = document.getElementById("mytextarea").value;
    console.log(mytext);
    textArray = mytext.split("=====\n");
    index = 0;
    myf();
    timecounter = setInterval(myf, delay);
}

function myf() {
    document.getElementById("mytextarea").value = textArray[index];
    index++;
    if (index === textArray.length) {
        index = 0;
    }
}

function myfunc3() {

    let status1 = document.getElementById("check");
    if (status1.checked) {
        delay = 50;
        clearInterval(timecounter);
        timecounter = setInterval(myf, delay)

    } else {
        delay = 250;
        clearInterval(timecounter);
        timecounter = setInterval(myf, delay);
    }
}

function myfunc4(progress) {
    if (progress === "start") {
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("sec").disabled = true;
    } else if ((progress = "stop")) {
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("sec").disabled = false;
    }
}

function myfunc5(params) {
    myfunc4("stop");
    clearInterval(timecounter);
    document.getElementById("mytextarea").value = mytext;
}
window.onload = function() {
    document.getElementById("sec").onchange = myfunc;
    document.getElementById("sizes").onchange = myfunc1;
    document.getElementById("start").onclick = myfunc2;
    document.getElementById("check").onchange = myfunc3;
    document.getElementById("stop").onclick = myfunc5;
};