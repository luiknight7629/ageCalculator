
function getCal(){
var yourAge = document.getElementById("ageCal").value;
var displaying = document.getElementById('output');
displaying.style.display = 'block';
var leftAge = 90 - yourAge;
var day = 365* leftAge;
var week = 52*leftAge;
var month = 12*leftAge;


document.getElementById("output").innerHTML= "Days: "+day+"<br>Weeks: "+ week+"<br>Months: "+month;


}
