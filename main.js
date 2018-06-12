// var matrix = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
// Un objet representant la balise <div id="vide">
var div = document.querySelector('#root');

div.innerHTML = '';
var tab = document.createElement('table');
var row = document.createElement('tr');
var column = document.createElement('td');
tab.appendChild(div);
row.appendChild(tab);
column.appendChild(row);
