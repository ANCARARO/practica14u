function Limpiar(){
	document.getElementById("miForm").reset();
}
var Calcular=function(n1,n2,n3){
	var N1=parseInt(document.getElementById("n1").value);
	var N2=parseInt(document.getElementById("n2").value);
    var N3=parseInt(document.getElementById("n3").value);
if(n1<n2 && n1<n3){
	var menor=n1
}
else{
	if(n2<n3){
		menor=n2
	}
	else{
		menor=n3
	}
}
return"El numero menor es:" + menor;
}

function LimpiarFormulario() {
	document.getElementById("miForm").reset()
}
var Resultado=function(n1){
	var Mt=parseInt(document.getElementById("Mt").value);
	var res=Mt*1.094;
	return res+"Resultado";
}


function LimpiarFormulario2(){
	document.getElementById("miForm").reset()
}
var Resultado2=function(n1){
	var Cm=parseInt(document.getElementById("Cm").value);
	var resultado= Cm/2.54;
	return resultado+"Resultado2";
}
