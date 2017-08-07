var laberinto = document.getElementById('laberinto');
var table = document.createElement('table');
table.border = "1";
table.setAttribute('bordercolor','purple');
table.setAttribute('width','50%');

var btn_arriba = document.getElementById('arriba');
var btn_abajo = document.getElementById('abajo');
var btn_derecha = document.getElementById('derecha');
var btn_izquierda = document.getElementById('izquierda');

var x = 9;
var y = 1;

var id = x+'.'+y


var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];
console.log(mapa);

for(var i=0; i<mapa.length; i++)
{
	var fila = document.createElement('tr');
	for(var j=0; j<mapa[i].length; j++)
	{
		var celda = document.createElement('td');
		celda.setAttribute('contenteditable', 'true');
		//celda.setAttribute('id','celdaBlue');
		fila.appendChild(celda);

		if(mapa[i][j]=="*")
		{
			celda.setAttribute('class','black');
		}

		if(mapa[i][j]=="o")
		{
			celda.setAttribute('class','blue arriba');
			
		}
		if(mapa[i][j]=="W")
		{
			celda.setAttribute('class','red');
		}
		if(mapa[i][j]=="_")
		{
			celda.setAttribute('class','white');
			
		}

		celda.setAttribute('id',i+'.'+j);
	}
table.appendChild(fila);
}
laberinto.appendChild(table);

function limpiarflecha(){
	var elemento = document.getElementById(x+'.'+y);
	elemento.className=elemento.className.replace( /(?:^|\s)izquierda(?!\S)/g ,'' )
	elemento.className=elemento.className.replace( /(?:^|\s)derecha(?!\S)/g ,'' )
	elemento.className=elemento.className.replace( /(?:^|\s)arriba(?!\S)/g ,'' )
	elemento.className=elemento.className.replace( /(?:^|\s)abajo(?!\S)/g ,'' )
}

function arriba(){
	limpiarflecha();
movimiento(x-1,y);

var elemento = document.getElementById(x+'.'+y);
elemento.className += ' arriba';
}

function abajo(){
limpiarflecha()
movimiento(x+1,y);

var elemento = document.getElementById(x+'.'+y);
elemento.className += ' abajo';

}


function derecha(){
limpiarflecha()
movimiento(x,y+1);
var elemento = document.getElementById(x+'.'+y);
elemento.className += ' derecha';

}

function izquierda(){
limpiarflecha()
movimiento(x,y-1);
var elemento = document.getElementById(x+'.'+y);
elemento.className += ' izquierda';
}

function movimiento(x_n,y_n){
console.log(x+'.'+y)
console.log(x_n+'.'+y_n)
if(mapa[x_n][y_n]!='*'){

 if(document.getElementById(x+'.'+y)){
 	var elemento = document.getElementById(x+'.'+y);
 	if(x+'.'+y == 9+'.'+1){
 		elemento.className = ' white';
 	}
 	elemento.className=elemento.className.replace( /(?:^|\s)blue(?!\S)/g ,'' )

 }

 x = x_n;
 y = y_n;

console.log(x+'.'+y)
 var elemento = document.getElementById(x+'.'+y);
 elemento.className += ' blue';

}
}

function tecla (e)
{
    var evt = e ? e : event;
    var key = window.Event ? evt.which : evt.keyCode;
    //(alert (key);

    switch(key){
	case 38: arriba();//alert('arriba')
	break;

		case 37: izquierda();// alert('izkierda')
	break;

		case 40: abajo(); //alert('abajo')
	break;
	case 39: derecha();// alert('derecha')
	break;


	}
}

btn_abajo.onclick = function(){
	abajo();
}

btn_arriba.onclick = function(){
	arriba();
}

btn_izquierda.onclick = function(){
izquierda()
}

btn_derecha.onclick = function(){
derecha()
}

function adelante(){

var elemento = document.getElementById(x+'.'+y);
var clase = elemento.className;

	if(clase == 'blue arriba'){
		//al norte
		arriba();
	}

	if(clase == 'blue abajo'){
		//al sur
	    abajo()
	}

	if(clase == 'blue derecha'){
		//al este
	derecha()
	}

	if(clase == 'blue izquierda'){
		//al oeste
	 izquierda();
	}
}



function lado_izquierdo(){

var elemento = document.getElementById(x+'.'+y);
var clase = elemento.className;
//var orientacion = document.getElementByClass('arriba');

if(clase == 'blue arriba'){
	//al norte
	return mapa[x][y-1];
}

if(clase == 'blue abajo'){
	//al sur
	return mapa[x][y+1];
}

if(clase == 'blue derecha'){
	//al este
	return mapa[x-1][y];
}

if(clase == 'blue izquierda'){
	//al oeste
	return mapa[x+1][y];
}

console.log('clase: '+clase)

}

function mover(){
	var x = lado_izquierdo()
console.log(x+'<--')

	if(x=='*'){
	  	adelante()
	  }

	  if(x== 16 && y == 9){
	  	clearInterval(timer);
	  }

	  console.log('hola')
}

var timer;
function solito(){

//timer = setInterval(mover(), 100);

mover()
mover()
mover()
mover()

}




 solito();



