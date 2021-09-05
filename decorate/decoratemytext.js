'use strict'

function myFunction() {
    //   document.getElementById("text1").style.fontSize = "24px"
    document.getElementById("text1").style.fontWeight = "bold";
    let ele = document.getElementById("text1");
    let fontSz = window.getComputedStyle(ele).fontSize;
    let size = parseInt(fontSz);
    //  let size = parseInt(document.getElementById("text1").style.fontSize);
    console.log(size);
    // size += 2;
    // document.getElementById("text1").style.fontSize = size + "pt";
    // console.log(size)

    function getBigger() {
        size += 2;
        document.getElementById("text1").style.fontSize = size + "pt";
    }
    setInterval(getBigger, 500);

}

function myFunction1() {
    alert("Hello, world!");
    if (document.getElementById("check").checked) {
        document.getElementById("text1").style.fontWeight = "bold";
        document.getElementById("text1").style.color = "green";
        document.getElementById("text1").style.textDecoration = "underline"
        document.getElementById("text1").style.backgroundImage = " url(https://www.sliderrevolution.com/wp-content/uploads/2020/04/featured1.jpg)"
    } else {
        document.getElementById("text1").style.fontWeight = "normal"
    }

}


window.onload = function() {
    let bigOnClick = document.getElementById("button");
    bigOnClick.onclick = myFunction;
    let checkBox1 = document.getElementById("check");
    checkBox1.onchange = myFunction1;


}