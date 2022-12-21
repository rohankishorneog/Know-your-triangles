var inputX=document.querySelector("#x");
var inputY=document.querySelector("#y");
var inputZ=document.querySelector("#z");
var btnX=document.querySelector("#btnX");
var outputX=document.querySelector("#output-divX");

btnX.addEventListener("click",checkArea);

function checkArea(){
    var x=inputX.value;
    var y=inputY.value;
    var z=inputZ.value;

    var s=(x+y+z)/2;
    var area=Math.sqrt((s*(s-x)*(s-y)*(s-z)));
    outputX.innerText="The area is: "+ area;


}