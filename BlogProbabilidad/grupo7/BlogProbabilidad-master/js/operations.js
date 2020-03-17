function calcular(){
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
	var num3 = parseFloat(document.getElementById('num3').value);
	var res = document.getElementById('res');
	var res1 = document.getElementById('res1');
	var res2 = document.getElementById('res2');
	var op = document.getElementById('lblOp');
	var a = (num3-num1)/num2;
	op.innerHTML = "( "+num3+" - "+num1+" ) / "+num2;
	res.innerHTML = a.toFixed(2);
	res1.innerHTML = a.toFixed(2);
	res2.innerHTML = a.toFixed(2);
}

function calcularPerros(){
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
	var num3 = parseFloat(document.getElementById('num3').value);
	var num4 = parseFloat(document.getElementById('num4').value);
	var num5 = parseFloat(document.getElementById('num5').value);
	var resSum = document.getElementById('lblResSum');
	var resSum1 = document.getElementById('lblResSum1');
	var prom = document.getElementById('lblProm');
	var prom1 = document.getElementById('lblProm1');
	var dif1 = document.getElementById('lblDif1');
	var dif2 = document.getElementById('lblDif2');
	var dif3 = document.getElementById('lblDif3');
	var dif4 = document.getElementById('lblDif4');
	var dif5 = document.getElementById('lblDif5');
	var sumDif = document.getElementById('lblSumDif');
	var varianza = document.getElementById('lblVarianza');
	var varianza1 = document.getElementById('lblVarianza1');
	var varianza2 = document.getElementById('lblVarianza2');
	var desviacion = document.getElementById('lblDesviacion');
	var suma = num1+num2+num3+num4+num5;
	var promedio = suma/5;

	num1 = (num1-promedio).toFixed(2);
	num2 = (num2-promedio).toFixed(2);
	num3 = (num3-promedio).toFixed(2);
	num4 = (num4-promedio).toFixed(2);
	num5 = (num5-promedio).toFixed(2);

	resSum.innerHTML = suma;
	resSum1.innerHTML = suma;
	prom.innerHTML = promedio;
	prom1.innerHTML = promedio;
	dif1.innerHTML = num1;
	dif2.innerHTML = num2;
	dif3.innerHTML = num3;
	dif4.innerHTML = num4;
	dif5.innerHTML = num5;

	suma = (num1*num1)+(num2*num2)+(num3*num3)+(num4*num4)+(num5*num5);
	sumDif.innerHTML = suma;

	promedio = (suma/5).toFixed(2);
	varianza.innerHTML = promedio;
	varianza2.innerHTML = promedio;

	promedio = (Math.sqrt(promedio)).toFixed(2);

	desviacion.innerHTML = promedio;
}

	
