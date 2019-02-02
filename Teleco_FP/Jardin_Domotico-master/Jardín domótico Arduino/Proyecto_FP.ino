//
//David Gómez Martínez
//
//Sistemes de Telecomunicacions i Informàtics
//
//Proyecto final de curso:
//
//  "JARDÍN DOMÓTICO MEDIANTE ARDUINO"


const int sensorPin = A0;
const float temperaturaMax = 30.0;
const float temperaturaMin = 4.0;
int estadoPulsador = 0;
const int sensorLuz = A1;
int sensorLuzValor = 0;
const float sensorHumedad = A2;
float sensorHumedadValor = 0;
const float sueloSeco = 05;      //97.8
const float sueloMojado = 26.00;    //60

void setup() {
  // activo el puerto serie para leer los valores en la pantalla del ordenador
  Serial.begin(9600);
  //indico cuales son los Pins de los led-motores
  pinMode(2, OUTPUT);   // indica que se activa el aspersor
  pinMode(3, OUTPUT);   // indica que se activa un ventilador
  pinMode(7, OUTPUT);   // indica que se activa el riego por goteo
  pinMode(13, INPUT);
}

void loop() {
  // adjudico el valor del sensor a una variable
  int sensorTemperatura = analogRead(sensorPin);
  //almaceno el valor del pulsador en la variable estadopulsador.
  estadoPulsador = digitalRead(13);
  
  //calculo los valores de voltaje y temperatura para depues poder trabajar con ellos
  //convierto el valor en voltaje
  //Convierto el voltaje en Temperatura, teniendo en cuenta que:
  //el sensor aumenta 10mv cada grado y que en la ficha tecnica
  // indica que hay un offset de 500mV.
  float voltaje = (sensorTemperatura / 1024.0) * 5.0;
  float temperatura = (voltaje - 0.5) * 100;;
  
  //asigno la entrada del sensor a una variable de esta forma veo en pantalla 
  //los valores que tengo ahora de luz , para tomarlos como referencia para
  //luego dar la orden de cuando regar
  sensorLuzValor = analogRead(sensorLuz);

  //tomo el valor del sensor de humedad
  sensorHumedadValor = analogRead(sensorHumedad);
  float humedadPorcentaje = (sensorHumedadValor / 10);
  
  // Pongo la condicion de que si pulso el boton 
  //muestre los datos en la pantalla
  if (estadoPulsador == LOW){
      //la siguiente linea de comando la uso para saber si reconoce la opcion 
      // en la que el boton no esta pulsado,la dejo oculta para el funcionamiento real
      //Serial.println("No es necesario visualizar los datos");
  }else { //si he pulsado el boton me tiene que mostrar por pantalla los valores
    
      //muestro en pantalla el valor leido.
      //Serial.print("Valor del sensor: ");
      //Serial.print(sensorTemperatura);
    
      //imprimo el valor del voltaje en pantalla
      //Serial.print(", Voltaje del sensor: ");
      //Serial.print(voltaje);
    
      //muestro el valor por pantalla
      Serial.print("Temperatura: ");
      Serial.print(temperatura);
      Serial.println(" C");

      //muestro también el valor de luz
      Serial.print("Sensor de luz : ");
      Serial.println(sensorLuzValor);

      //muestro por pantalla la humedad del suelo
      Serial.print("Humedad en el suelo : ");
      Serial.print(humedadPorcentaje);
      Serial.println(" %");
      if (sensorLuzValor > 900){
          Serial.println("Hay demsiada luz, No se cumplen las condiciones para el riego.");
      }
      //Retraso de 10 sg para poder leerel texto
      delay (10000);
      //Pongo una raya como linea de  texto para saber 
      //que se sigue ejecutando el programa
      Serial.println("-------------------");
      }
  //le doy condiciones para activar los leds-motores
  if (temperatura < temperaturaMax && temperatura > temperaturaMin){
      //Si la temperatura está entre los margenes de 0ºC a 30ºC, 
      //es correcto , por lo que todo esta apagado
      digitalWrite(3, LOW);
      digitalWrite(2, LOW);
  }else if(temperatura >= temperaturaMax){
      //Con esta condición de temperatura maxima, ahora enciendo un led
      //,de esta forma compruebo que funciona ,pero esta salida alimenta 
      //un mosfet para cerrar el contacto de un rele cuyo 85-87 son alimentados
      //con una pila de 9V, y en los contactos 30-87 activa un ventilador 
      //alimentado con una bateria de 12V.
      digitalWrite(3, HIGH);
      digitalWrite(2, LOW);
      // con este comando le indico que compruebe el valor cada 10sg. 
      //mide en milisegundos.
      //de esta forma le dico el tiempo que quiero que este activado
      delay(5000);
  }else if ( temperatura <= temperaturaMin){
      //Con esta condición comparo la temperatura minima,
      //En caso de bajar de 4ºC, comienza a haber riesgo de congelación.
      //Activo el led como señal de aviso y activo mediante un mossfet una bomba,
      //para pulverizar agua y regar.
      digitalWrite(3, LOW);
      digitalWrite(2, HIGH); 
      // con este comando le indico que compruebe el valor cada 10sg. 
      //mide en milisegundos.
      //de esta forma le dico el tiempo que quiero que este activado
      delay(5000);
   }
   // En funcion de la humedad del suelo y de la luz doy la orden de regar
   // Como la condición principal es que todavia no haya mucho sol ,indico
   // el orden de la sigiuente manera.
   if (sensorLuzValor <= 900 && sensorLuzValor >= 700){   // de esta forma riego al alba
      Serial.println("INICIANDO PROCESO DE RIEGO");
      if (humedadPorcentaje <  (sueloMojado + 15)){
          // la tierra esta mojada , por lo que no hace falta regarla
          digitalWrite(7, LOW);
          Serial.println("La HUMEDAD de la tierra es CORRECTA");
      }else if (humedadPorcentaje >= sueloSeco){
          // la tierra esta muy seca.
          digitalWrite(7, HIGH);
          Serial.print("Luz : "); Serial.println(sensorLuzValor);
          Serial.print("Humedad en tierra : "); Serial.println(humedadPorcentaje);
          Serial.println("REGANDO......");
          // Le indico el tiempo que quiero que este regando
          // este delay esta condicionado por el tiempo que tarda en absorver el agua
          // la tierra, después de casi 30 minutos el valor de humedad esta al 60%
          //el tiempo real para programarlo tengo que poner un retardo de 30 minutos
          //antes de que realice el bucle de lectura, porque si no estaria regando en 
          //exceso la tierra.
          delay(6000); //tiempo que la bomba esta activa
          Serial.println("COMPROBANDO VALORES ACTUALES");
          digitalWrite(7,LOW);
      }else if (humedadPorcentaje >= (sueloMojado + 15) && humedadPorcentaje < sueloSeco){   //el mas 15 es para tener un valor medio
          // la tierra está algo humedad, pero quiero que alcance su valor máximo
          // asi puede aguantar todo el dia
          digitalWrite(7, HIGH); //tiempo de la bomba activa
          Serial.print("Luz : "); Serial.println(sensorLuzValor);
          Serial.print("Humedad en tierra : "); Serial.println(humedadPorcentaje);
          Serial.println("REGANDO......");
          // Le indico el tiempo que quiero que este regando, en este caso el tiempo sera inferior
          // que el tiempo de regado normal con tierra seca, para evitar que se encharque
          delay(3000);
          Serial.println("COMPROBANDO VALORES ACTUALES");
          digitalWrite(7,LOW);
      }else if (humedadPorcentaje <= 15.0){       //si el valor es demasiado bajo es que no funciona corecctamente
          Serial.println("Sensor en mal estado o fuera de la tierra,por favor comprobar");
      }
      
      delay(1000);     //tiempo de espera, para que la tierra absorba el agua, para la vida real 
                        // el tiempo que he calculado es de 30 minutos.(1.800.000 milisegundos)
                // Le digo que vuelva a comprobar los valores ,hasta que sean los correctos
   }
      
}
