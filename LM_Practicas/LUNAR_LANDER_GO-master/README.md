# LUNAR_LANDER_GO
Práctica final primera evaluación. Lunar Lander integrando HTML + CCS + JS

# Estructura del proyecto:

	- Página principal del juego "Lunar Lander".
	- Página de "instrucciones Lunar Lander".
	- Página de "acerca del juego".
	- Carpeta "/img".
		- Imagenes del proyecto.
	- Carpeta "/css".
		- Contiene los archivos ".css" de las páginas del proyecto.
		- "lunard" : archivo css para pg. lunar lander versión escritorio. Más de 426 px px de ancho de pantalla.
		- "lunarm" : archivo css para pg. lunar lander versión movil. Inferior a 426 px.
		- "instruccionesd" : archivo css para pg. instrucciones versión escritorio.
		- "instruccionesm" : archivo css para pg. instrucciones versión movil.
    		- "acercad" : archivo css para pg. "acerca de" versión escritorio.
    		- "acercam": archivo css para pg. "acerca de" versión movil.
    		- "font-awesome" : archivo css para utilizar los iconos como si fueran una fuente de texto.
  	- Carpeta "/fonts".
   		 - "FontAwesome" : Utilizada para usar iconos,tratados como texto.
    		- "Supercell-magic-webfont" : Utilizada para dar el formato desado a la letra de la página.
  	- Carpeta "/js".
   		- "ll"  : archivo js que contiene todas las funciones del juego(están explicadas las funciones con comentarios sobre ellas).

		
		
# Observaciones del proyecto Lunar Lander respecto al diseño inicial:
  	- Por sugerencia del director (profesor) del proyecto: 
  		Se ha utilizado una imagen de fondo con un tamaño menor a : 500 Kb. Corrigendo así el error del anterior proyecto.
      		Se ha utilizado la herramienta "GITHUB" para ir evolucionando de forma seguro a lo largo del proyecto , creando las ramas necesarias.

	- Ciertas imágenes del proyectos tienen una superficie con fondo rodeando la imagen.
		Se decide:
			Retocar todas las imágenes, una por una, para eliminar el fondo de cada una y redimensionar.
      		Para ello se ha utilizado la siguiente herramienta online:
     			 https://burner.bonanza.com/background_burns/23984591/load
      
 	 - Algunas de las imagenes se han tenido que retocar la inclinación de la misma para conseguir el aspecto deseado.
      		Para ello se ha utilizado la siguiente herramienta online:
        http://pinetools.com/es/rotar-imagen
	
	- El diseñado de los "contadores".
		Se decide:
		Los contadores se han realizado aplicandoles borde de color "oro" al "div" y dandole color negro al fondo.
      		Dentro se ha puesto otro "div" con el  borde de otro color "marron".
      		Con javascript se varía el valor que muestra el contador.
		El contador de "level" muestra el nivel de dificultad en el que te encuentras.
      		Se hará variar el valor con javascript usando el botón "cohete" situado en el menú.
			
	- Después de investigar, la NUEVA técnica que se está implementando en el diseño web, para dar mayor velocidad de carga a la 	página, es el uso de "fuentes" donde estan guardados los iconos como texto.
 	
	En mi caso he utilizado "Font-Awesome" , en todos los iconos que se muestran en los contadores y los botones de los menús.
			
  
	
  - Otra requisito, obligatorio, usado ha sido la función ":hover", en cada botón de acción se resaltará el tamaño y un cambio de color del fondo. De esta forma se llamará la atención al usuario para que vea que hay una acción.
  
  - También he utilizado la propiedad ":cursor" en el botón de "instrucciones" y "acerca de.." para sugerir que son de ayuda.

			
# Aspectos que se han tenido en cuenta a lo largo del desarrollo de este proyecto:
	
	- El titulo de la página web es menor a 8 palabras. <title>
	- La descripción de la página web es menor a 32 palabras. <meta name="descripción"...>
	- Optimizar todas las imágenes, a parte de darles retocar el tamaño inicial , todas han sido comprimidas mediante la página web : "www.tinypng.com".
	- Se ha ido desarrollando un README durante la evolución de esta práctica.
	- El tamaño de la imagen del fondo es 1920x1080. Tamaño : 481 Kb.
	- En el formato movil, el menú que se despliega cuando pulsamos el botón de "menu", situado en la parte superior derecha.
	- Todos los ficheros se han comprobado con el validador , sin encontrar ningún fallo:
			- En el caso de HTML :  "https://validator.w3.org/#validate_by_input"
			- En el caso de CSS  :  "https://jigsaw.w3.org/css-validator/#validate_by_input"
      - En el caso de JS   :  "http://esprima.org/demo/validate.html"
	- Una vez terminado el proyecto, y siendo este operativo, se ha realizado una rama "version_minimificada", donde se ha realizado el proceso de minimificación de cada uno de los archivos.
	- A continuación adjunto los enlaces de rawgit de las dos ramas:
			
			- Rama "Master" (indentada):
					https://cdn.rawgit.com/davidgm17/LUNAR_LANDER_GO/58ede514/lunar_lander.html
	
			- Rama "version_minimificada" :
					https://cdn.rawgit.com/davidgm17/LUNAR_LANDER_GO/minimificada_Lunar_Lander/lunar_lander.html
