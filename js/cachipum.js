//archivo js

var jugadaUser;
var jugadaCompu;

var jugadaUser = prompt ("¿Piedra, papel o tijera");
console.log(jugadaUser);

//buca numero entero en random para seleccion opcion computador
var numRandom = Math.random()*2;
var numRedondo = Math.round(numRedondo);
console.log(numRedondo);

//0:piedra 1:tijera 2:papel

if (numRedondo==0){
	jugadaCompu="piedra";
}else if (numRedondo==1){
	jugadaCompu="tijera";
}else{
	jugadaCompu="papel";
}
alert("ahora le toca a computador elegi");
console.log(jugadaCompu);
alert("El computador eligió: " + jugadaCompu);

if (jugadaUser=="piedra") {
	if(jugadaCompu=="piedra"){
		alert("¡Oh oh oh! Empate");
	}else if(jugadaCompu=="tijera"){
		alert("¡Muy bien ganaste!");
	}else{
		alert("rayos perdiste");
	}
}else if(jugadaUser=="tijera"){
	if(jugadaCompu=="tijera"){
		alert("¡Oh oh oh! Empate");
	}else if(jugadaCompu=="papel"){
		alert("¡Muy bien ganaste!");
	}else{
		alert("rayos perdiste");
	}
}else{
	if(jugadaCompu=="papel"){
		alert("¡Oh oh oh! Empate");
	}else if(jugadaCompu=="piedra"){
		alert("¡Muy bien ganaste!");
	}else{
		alert("rayos perdiste");
	}
}