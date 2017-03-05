var  farentheitInput = document.getElementById("farenheit");
var celsiusInput=document.getElementById("celsius");




function convertirToCelsius(){
var  celsiusOut=farentheitInput.value-32 * 5 / 9;
celsiusInput.value=celsiusOut;

}

function convertirToFarenheit(){
var farenOut=celsiusInput.value* 9 / 5 +32;
farentheitInput.value=farenOut;
}
