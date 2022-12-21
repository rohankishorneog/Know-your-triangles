//for istriangle

var inputAngleOne=document.querySelector("#angleOne");
var inputAngleTwo=document.querySelector("#angleTwo");
var inputAngleThree=document.querySelector("#angleThree");
var btn=document.querySelector("#btn");
var output=document.querySelector("#output-div")


btn.addEventListener("click",isTriangle);

function isTriangle(){
    var angleOne=inputAngleOne.value;
    var angleTwo=inputAngleTwo.value;
    var angleThree=inputAngleThree.value;

    if((angleOne+angleTwo+angleThree)===180){
        output.innerText="It is a triangle"
    }else{
        output.innerText="It is not a triangle"
    }
}


// for hypotenuse


