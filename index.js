
let num1 = Number(document.getElementById('num1').innerHTML);
let num2 = Number(document.getElementById('num2').innerHTML);
let num3 = Number(document.getElementById('num3').innerHTML);
let num4 = Number(document.getElementById('num4').innerHTML);

document.getElementById("total_value").textContent =
num1 + num2 + num3 + num4;

let totalSum = num1 + num2 + num3 + num4;

couponDiscount = function (){
 document.getElementById("total_value").textContent = totalSum * 0.8;
}

