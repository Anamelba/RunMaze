var laberinto = document.getElementById('laberinto');
var table = document.createElement('table');
table.border = "1";
table.setAttribute('bordercolor','purple');
table.setAttribute('width','50%');

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
		fila.appendChild(celda);

		if(mapa[i][j]=="*")
		{
			celda.setAttribute('class','black');
		}

		if(mapa[i][j]=="o")
		{
			celda.setAttribute('class','blue');
		}
		if(mapa[i][j]=="W")
		{
			celda.setAttribute('class','red');
		}
		if(mapa[i][j]=="_")
		{
			celda.setAttribute('class','white');
		}
	}
table.appendChild(fila);
}
laberinto.appendChild(table);






