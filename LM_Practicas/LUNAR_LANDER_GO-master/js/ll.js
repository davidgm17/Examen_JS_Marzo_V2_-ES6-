
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 80 // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
var encenderMotor = true;
var nivelDificultad = 0;
var consumo = 0.1;
var velAterrizaje = 5;
var reiniciar=false;

//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("barravelocidad");
	altura = document.getElementById("barraltura");
	combustible = document.getElementById("barrafuel");
	nivel = document.getElementById("barradificultad");
	
	//definición de eventos
	//mostrar menú móvil
    document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		//cuando se despliega el menu, paro el motor para que no consuma combustible, y no dejo que se encienda mientras pulso sobre las opciones.
		motorOff();
		encenderMotor=false;
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		//al volver al menu cambio la variable para que se pueda encender el motor
		encenderMotor=true;
		start();
	}
	
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = function(event){
		if (event.keyCode == 32){
			motorOn();
		}
	}
	document.onkeyup = motorOff;
	
	
	//Empezar a mover la nave justo después de cargar la página
	start();
}


//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
	
}

function stop(){
	clearInterval(timer);
	
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y -=v*dt;
	//actualizar marcadores
	velocidad.innerHTML=-v.toFixed(2);
	altura.innerHTML=y.toFixed(2);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y>0){ 
		document.getElementById("nave").style.bottom = y+"%"; 
	} else { 
		//cuando aterriza apago el motor, y no dejo que se encienda
		motorOff();
		encenderMotor=false;
		stop();
		setTimeout(finPartida(),1000);
	}
}
function motorOn(){
	//comprueba si ha aterrizado,en caso de haber aterrrizado no deja ejecutar la funcion de encendido
	if (encenderMotor){
		//cambio la nave cuando el motor esta encendido, imagen con llama
		document.getElementById("imgnave").src = "img/cohete.png";
		//el motor da aceleración a la nave
		a=-g;
		//mientras el motor esté activado gasta combustible
		if (timerFuel==null)
		timerFuel=setInterval(function(){ actualizarFuel(); }, 10);		
	}else{
		motorOff();
	}
}
function motorOff(){
	document.getElementById("imgnave").src = "img/cohete_stop.png";
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=consumo;
	if (c < 0 ) c = 0;
	combustible.innerHTML=c.toFixed(2);	
	if (c<=0){
		motorOff();//cuadno se quede sin combustible el motor se para.
		encenderMotor=false;
	}
}

//Funciones para controlar las tres diferentes salidas
function salidaPlay(){
	
	var respuesta = confirm("ALERT.\n If you continue, you go out to this web, and you lose the game.\n Do you want to continue?");
		if (respuesta==true){
			document.getElementById("play"). href="lunar_lander.html";
		}
		else{
			alert ("READY?");
		}
}
function salidaInstructions(){
	
	var respuesta = confirm("ALERT.\n If you continue, you go out to this web, and you lose the game.\n Do you want to continue?");
		if (respuesta==true){
			document.getElementById("instructions"). href="instrucciones_lunar_lander.html";
		}
		else{
			alert ("READY?");
		}
}

function salidaAbout(){
	
	var respuesta = confirm("ALERT.\n If you continue, you go out to this web, and you lose the game.\n Do you want to continue?");
		if (respuesta==true){
			document.getElementById("about"). href="acerca_de_lunar_lander.html";
		}
		else{
			alert ("READY?");
		}
}

function finPartida(){
	//var reiniciar=false;
	
	if (v<=velAterrizaje){
		var win = "		\"YOU WIN\"\n\nDo you want try againt?"
		reiniciar = confirm(win);
	}else{
		//var lose ="  	\"YOU LOSE\"\n\nDo you want try againt?"
		//document.getElementById("imgnave").src = "img/broke_sprite1.png";
		romperNave()
		setTimeout(function(){perder()},3000);
		//reiniciar = confirm(lose);
	}
	
	setTimeout(function(){reiniciarPartida()},4000);

}
function reiniciarPartida(){
	if (reiniciar==true){
		location.href="lunar_lander.html";
	}
}
function perder(){
	var lose ="  	\"YOU LOSE\"\n\nDo you want try againt?"
	reiniciar = confirm(lose);
}
function dificultad(){
	//Contador para saber el numero de veces que pulsas sobre el boton de nivel de dificultad.
	nivelDificultad +=1;
	
	//como solo hay tres niveles , cada vez que el valor llega a 3 lo reseteo a "0", los niveles de dificultad son " 0, 1 y 2 ".
	if (nivelDificultad==3){nivelDificultad=0;}
	
	//En función del nivel cambio el mensaje que sale en la pantalla del juego para avisar del nivel 
	//y cambio la variable de consumo de combustible y velocidad de aterrizaje permitida.
	if (nivelDificultad==1){
		nivel.innerHTML="MEDIUM";
		velAterrizaje = 4;
		consumo = 0.2;
	}else if(nivelDificultad==2){
		nivel.innerHTML="HARD";
		velAterrizaje = 3;
		consumo = 0.3;
	}else{
		nivel.innerHTML="EASY";
		velAterrizaje = 5;
		consumo = 0.1;
	}
}
//con estas funciones hago el efecto final cuando la nave se rompe.
function romperNave(){
	setTimeout(function(){romper1()},500);
	setTimeout(function(){romper2()},1000);
	setTimeout(function(){romper3()},1500);
}
function romper1(){   
	document.getElementById("imgnave").src = "img/cohete_broke1.png";
}
function romper2(){
	document.getElementById("imgnave").src = "img/cohete_broke2_2.png";
}
function romper3(){
	document.getElementById("imgnave").src = "img/cohete_broke3_3.png";
}