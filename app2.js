var inputA=document.querySelector("#a");
var inputB=document.querySelector("#b");
var btnA=document.querySelector("#btnA");
var outputA=document.querySelector("#output-divA");

btnA.addEventListener("click",checkHypo);
function checkHypo(){
   var  a=inputA.value;
     var b=inputB.value;
    var c= Math.sqrt((a*a)+(b*b));
    outputA.innerText="The value of the hypotenuse is: "+c;
}