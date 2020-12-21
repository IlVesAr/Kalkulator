var a = 0;

function cont(c){
	a += c;
	document.getElementById("aaa").innerHTML = a.toString();
}

function smetni(){
	var a = "Отговор: ";
	var prv = parseFloat(document.getElementById("prv").value)
	var z = document.getElementById("z").value
	var vtr = parseFloat(document.getElementById("vtr").value)

	if (z == "+"){
		a += prv + vtr;
	}else if (z == "-"){
		a += prv - vtr;
	}else if (z == "*"){
		a += prv * vtr;
	}else if (z == "/"){
		a += prv / vtr;
	}

	var d = new Date();

	document.getElementById("otg2").innerHTML = a + "<br>" + d;
}
