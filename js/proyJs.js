//var x1, x2, y;

function showMultiple(){
	document.getElementById("page").innerHTML='<form> <div class="form-group"><label for="cantX1">Escriba los valores de X1 separados por espacios</label>'+
	'<input type="text" class="form-control" id="cantX1" placeholder="ej: 1 2 67 54 32 79 "></div>'+
	'<div class="form-group"><label for="cantX2">Escriba los valores de X2 separados por espacios</label>'+
	'<input type="text" class="form-control" id="cantX2" placeholder="ej: 1 2 67 54 32 79 "></div>'+
	'<div class="form-group"><label for="cantY">Escriba los valores de Y separados por espacios</label>'+
	'<input type="text" class="form-control" id="cantY" placeholder="ej: 1 2 67 54 32 79 "></div>'+
	'<button class="btn btn-primary" onclick="doMultiple()">enviar</button></form>';
}

function doMultiple(){
	var x1Esp=document.getElementById("cantX1").value;
	var x2Esp=document.getElementById("cantX2").value;
	var yEsp=document.getElementById("cantY").value;

	var x1= x1Esp.split(" ");
	var x2= x2Esp.split(" ");
	var y= yEsp.split(" ");
	/*x1=document.getElementById("cantX1").value;
	x2=document.getElementById("cantX2").value;
	y=document.getElementById("cantY").value;
	alert(x1 +", "+x2+", "+y);*/

	document.getElementById("page").innerHTML=y+" aqui hay que poner el resultadoooo";
}

function showPoli(){
	document.getElementById("page").innerHTML='<form> <div class="form-group"><label for="cantX">Escriba los valores de X separados por espacios</label>'+
	'<input type="text" class="form-control" id="cantX" placeholder="ej: 1 2 67 54 32 79 "></div>'+
	'<div class="form-group"><label for="cantY">Escriba los valores de Y separados por espacios</label>'+
	'<input type="text" class="form-control" id="cantY" placeholder="ej: 1 2 67 54 32 79 "></div>'+
	'<button class="btn btn-primary" onclick="doPoli()">enviar</button></form>';

}

function doPoli(){
	var xEsp=document.getElementById("cantX").value;
	var yEsp=document.getElementById("cantY").value;

	var x=xEsp.split(" ");
	var y=yEsp.split(" ");
}

function showDif(){
	document.getElementById("page").innerHTML='<form> <div class="form-group"><label for="cantExp">Escriba el valor del exponencial</label>'+
	'<input type="text" class="form-control" id="cantX1" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantX">Escriba los valores de X separados por espacios</label>'+
	'<input type="text" class="form-control" id="cantX" placeholder="ej: 1 2 67 54 32 79 "></div>'+
	'<div class="form-group"><label for="cantH">Escriba el valor de h </label>'+
	'<input type="text" class="form-control" id="cantH" placeholder="escriba su valor aqui"></div>'+
	'<button class="btn btn-primary" onclick="doDif();">enviar</button></form>';
}

function doDif(){
	var exp =document.getElementById("cantExp").value;
	var h= document.getElementById("cantH");
	var xEsp= document.getElementById("cantExp");

	var x=xExp.split(" ");
}

