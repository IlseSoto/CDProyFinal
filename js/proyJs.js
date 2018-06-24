//var x1, x2, y;
//var ip='http://172.20.10.4';
var ip='http://localhost';

function showLineal(){
	document.getElementById("page").innerHTML=' <div class="form-group"><label for="cantX">Escriba los valores de X separados por comas</label>'+
	'<input type="text" class="form-control" id="cantX" placeholder="ej: 1,2,67,54,32,79 "></div>'+
	'<div class="form-group"><label for="cantY">Escriba los valores de Y separados por comas</label>'+
	'<input type="text" class="form-control" id="cantY" placeholder="ej: 1,2,67,54,32,79 "></div>'+
	'<button class="btn btn-primary" onclick="doLineal();">enviar</button>';
}

function doLineal(){
	var x=document.getElementById("cantX").value;
	//var x2=document.getElementById("cantX2").value;
	var y=document.getElementById("cantY").value;

	/*var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status ==200){
			alert('operacion exitosa!');
			var result = JSON.parse(this.responseText);
			//imprimo M LOL
			document.getElementById("page").innerHTML="<h3>Resultado:</h3><br> "+result.model;
			
		}
	};
	xhttp.open('GET', ip+':2409/rls/'+x+'/'+y, true);
	xhttp.send();*/

	//var $table = $('#tableM');
			var datosM=[];
			var datosME=[];
			var datosMF=[];

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState ==4 && this.status ==200){
                    alert('operacion exitosa!');
                    var result = JSON.parse(this.responseText);
                    //imprimo M LOL
                    //document.getElementById("page").innerHTML=result.M[0].length;
                   
                       for(var j=0; j<result.M[0].length;j++){
                           datosM.push({"x":result.M[j][0],
							"y":result.M[j][1],
							"b":result.B[j]
						});
						
						datosME.push({
							"x":result.ME[j][0],
							"y":result.ME[j][1],
							"ae":result.AE[j]
						});

						datosMF.push({
							"x":result.MF[j][0],
							"y":result.MF[j][0],
							"af":result.AF[j]
						});
					   }
					   
					   console.log(datosME);
                       $(function () {
                            $('#tableM').bootstrapTable({
                                data: datosM
                            });
						});
						
						$(function () {
                            $('#tableME').bootstrapTable({
                                data: datosME
                            });
						});
						
						$(function () {
                            $('#tableMF').bootstrapTable({
                                data: datosMF
                            });
                        });
                   
                }
            };
            xhttp.open('GET', ip+':2409/rls/'+x+'/'+y, true);
            xhttp.send();

	

	//document.getElementById("page").innerHTML=y+" aqui hay que poner el resultadoooo";
}

function showMultiple(){
	document.getElementById("page").innerHTML=' <div class="form-group"><label for="cantX1">Escriba los valores de X1 separados por comas</label>'+
	'<input type="text" class="form-control" id="cantX1" placeholder="ej: 1,2,67,54,32,79 "></div>'+
	'<div class="form-group"><label for="cantX2">Escriba los valores de X2 separados por comas</label>'+
	'<input type="text" class="form-control" id="cantX2" placeholder="ej: 1,2,67,54,32,79 "></div>'+
	'<div class="form-group"><label for="cantY">Escriba los valores de Y separados por espacios</label>'+
	'<input type="text" class="form-control" id="cantY" placeholder="ej: 1,2,67,54,32,79 "></div>'+
	'<button class="btn btn-primary" onclick="doMultiple()">enviar</button>';
}

function doMultiple(){
	var x1=document.getElementById("cantX1").value;
	var x2=document.getElementById("cantX2").value;
	var y=document.getElementById("cantY").value;

	
	/*x1=document.getElementById("cantX1").value;
	x2=document.getElementById("cantX2").value;
	y=document.getElementById("cantY").value;
	alert(x1 +", "+x2+", "+y);*/

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status ==200){
			alert('operacion exitosa!');
			var result = JSON.parse(this.responseText);
			//imprimo M LOL
			document.getElementById("page").innerHTML="<h3>Resultado:</h3><br> "+result.model;
			
		}
	};
	xhttp.open('GET', ip+':2409/rlm/'+x1+'/'+x2+'/'+y, true);
	xhttp.send();

	
}

function showPoli(){
	document.getElementById("page").innerHTML=' <div class="form-group"><label for="cantX">Escriba los valores de X separados por espacios</label>'+
	'<input type="text" class="form-control" id="cantX" placeholder="ej: 1 2 67 54 32 79 "></div>'+
	'<div class="form-group"><label for="cantY">Escriba los valores de Y separados por espacios</label>'+
	'<input type="text" class="form-control" id="cantY" placeholder="ej: 1 2 67 54 32 79 "></div>'+
	'<button class="btn btn-primary" onclick="doPoli()">enviar</button>';

}

function doPoli(){
	var x=document.getElementById("cantX").value;
	var y=document.getElementById("cantY").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status ==200){
			alert('operacion exitosa!');
			var result = JSON.parse(this.responseText);
			//imprimo M LOL
			document.getElementById("page").innerHTML="<h3>Resultado:</h3><br> "+result.model;
			
		}
	};
	xhttp.open('GET', ip+':2409/rlp/'+x+'/'+y, true);
	xhttp.send();

}

function showDifCent(){
	document.getElementById("page").innerHTML='<form> <div class="form-group"><label for="cantExp">Escriba el valor del exponencial</label>'+
	'<input type="text" class="form-control" id="cantExp" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantX">Escriba el valor de X</label>'+
	'<input type="text" class="form-control" id="cantX" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantH">Escriba el valor de h </label>'+
	'<input type="text" class="form-control" id="cantH" placeholder="escriba su valor aqui"></div>'+
	'<button class="btn btn-primary" onclick="doDifCent();">enviar</button></form>';
}

function doDifCent(){
	var exp =document.getElementById("cantExp").value;
	var h= document.getElementById("cantH").value;
	var x= document.getElementById("cantX").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status ==200){
			alert('operacion exitosa!');
			var result = JSON.parse(this.responseText);
			document.getElementById("page").innerHTML="<div";
			for(var i=0; i<result.procedure.length;i++){
				document.getElementById("page").innerHTML+='<h3>iteracion '+i+":<br> "+result.procedure[i]+
				"</h2><br><br>";
			}
			
			document.getElementById("page").innerHTML+="<h1><b>resultado:</b> <br>"+result.result+"</h1>";
			console.log(result);
		}
	};
	xhttp.open('GET', ip+':1908/dhc/'+exp+'/'+x+'/'+h, true);
	xhttp.send();

	
}

function showDifIzq(){
	document.getElementById("page").innerHTML='<form> <div class="form-group"><label for="cantExp">Escriba el valor del exponencial</label>'+
	'<input type="text" class="form-control" id="cantExp" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantX">Escriba el valor de X</label>'+
	'<input type="text" class="form-control" id="cantX" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantH">Escriba el valor de h </label>'+
	'<input type="text" class="form-control" id="cantH" placeholder="escriba su valor aqui"></div>'+
	'<button class="btn btn-primary" onclick="doDifIzq();">enviar</button></form>';
}

function doDifIzq(){
	var exp =document.getElementById("cantExp").value;
	var h= document.getElementById("cantH").value;
	var x= document.getElementById("cantX").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status ==200){
			alert('operacion exitosa!');
			var result = JSON.parse(this.responseText);
			document.getElementById("page").innerHTML="";
			for(var i=0; i<result.procedure.length;i++){
				document.getElementById("page").innerHTML+='<h3>iteracion '+i+":<br> "+result.procedure[i]+
				"</h2><br><br>";
			}
			
			document.getElementById("page").innerHTML+="<h1><b>resultado:</b> <br>"+result.result+"</h1>";
			console.log(result);
		}
	};
	xhttp.open('GET', ip+':1908/dhi/'+exp+'/'+x+'/'+h, true);
	xhttp.send();

	
}

function showDifDer(){
	document.getElementById("page").innerHTML='<form> <div class="form-group"><label for="cantExp">Escriba el valor del exponencial</label>'+
	'<input type="text" class="form-control" id="cantExp" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantX">Escriba el valor de X</label>'+
	'<input type="text" class="form-control" id="cantX" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantH">Escriba el valor de h </label>'+
	'<input type="text" class="form-control" id="cantH" placeholder="escriba su valor aqui"></div>'+
	'<button class="btn btn-primary" onclick="doDifDer();">enviar</button></form>';
}

function doDifDer(){
	var exp =document.getElementById("cantExp").value;
	var h= document.getElementById("cantH").value;
	var x= document.getElementById("cantX").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status ==200){
			alert('operacion exitosa!');
			var result = JSON.parse(this.responseText);
			document.getElementById("page").innerHTML="";
			for(var i=0; i<result.procedure.length;i++){
				document.getElementById("page").innerHTML+='<h3>iteracion '+i+":<br> "+result.procedure[i]+
				"</h2><br><br>";
			}
			
			document.getElementById("page").innerHTML+="<h1><b>resultado:</b> <br>"+result.result+"</h1>";
			console.log(result);
		}
	};
	xhttp.open('GET', ip+':1908/dhd/'+exp+'/'+x+'/'+h, true);
	xhttp.send();

	
}


function showSimpson(){
	document.getElementById("page").innerHTML='<form> <div class="form-group"><label for="cantA">Escriba el valor de a</label>'+
	'<input type="text" class="form-control" id="cantA" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantB">Escriba el valor de b</label>'+
	'<input type="text" class="form-control" id="cantB" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantExp">Escriba la expresion </label>'+
	'<input type="text" class="form-control" id="cantExp" placeholder="escriba su valor aqui"></div>'+
	'<div class="form-group"><label for="cantH">Escriba el valor de h </label>'+
	'<input type="text" class="form-control" id="cantH" placeholder="escriba su valor aqui"></div>'+
	'<button class="btn btn-primary" onclick="doSimpson();">enviar</button></form>';
}

function doSimpson(){
	var a=document.getElementById("cantA").value;
	var b=document.getElementById("cantB").value;
	//var n=document.getElementById("cantN").value;
	var h=document.getElementById("cantH").value;
	var exp=document.getElementById("cantExp").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status ==200){
			alert('operacion exitosa!');
			var result = JSON.parse(this.responseText);
			document.getElementById("page").innerHTML="";
			for(var i=0; i<result["f(X_n)"].length;i++){
				document.getElementById("page").innerHTML+='<h3>iteracion '+i+":<br> "+result["f(X_n)"][i]+
				"</h2><br><br>";
			}
			
			document.getElementById("page").innerHTML+="<h1><b>resultado:</b> <br>"+result.I+"</h1>";
			console.log(result);
		}
	};
	xhttp.open('GET', ip+':2511/simpson/'+a+'/'+b+'/'+exp+'/None/'+h, true);
	xhttp.send();


}

function showTrape(){
	document.getElementById("page").innerHTML='<form> <div class="form-group"><label for="cantA">Escriba el valor de a</label>'+
	'<input type="text" class="form-control" id="cantA" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantB">Escriba el valor de b</label>'+
	'<input type="text" class="form-control" id="cantB" placeholder="escriba su valor"></div>'+
	'<div class="form-group"><label for="cantExp">Escriba el valor de exp </label>'+
	'<input type="text" class="form-control" id="cantExp" placeholder="escriba su valor aqui"></div>'+
	'<div class="form-group"><label for="cantH">Escriba el valor de h </label>'+
	'<input type="text" class="form-control" id="cantH" placeholder="escriba su valor aqui"></div>'+
	'<button class="btn btn-primary" onclick="doTrape();">enviar</button></form>';
}

function doTrape(){
	var a=document.getElementById("cantA").value;
	var b=document.getElementById("cantB").value;
	//var n=document.getElementById("cantN").value;
	var h=document.getElementById("cantH").value;
	var exp=document.getElementById("cantExp").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState ==4 && this.status ==200){
			alert('operacion exitosa!');
			var result = JSON.parse(this.responseText);
			document.getElementById("page").innerHTML="";
			for(var i=0; i<result["f(X_n)"].length;i++){
				document.getElementById("page").innerHTML+='<h3>iteracion '+i+":<br> "+result["f(X_n)"][i]+
				"</h2><br><br>";
			}
			
			document.getElementById("page").innerHTML+="<h1><b>resultado:</b> <br>"+result.I+"</h1>";
			console.log(result);
		}
	};
	xhttp.open('GET', ip+':2511/trapecio/'+a+'/'+b+'/'+exp+'/None/'+h, true);
	xhttp.send();


}

function showHome(){
	document.getElementById("page").innerHTML='<h3><center>Bienvenido!</center></h3> <p>realice Metodos numericos en segundos!</p>';
}
