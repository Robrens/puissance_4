// var matrix = [[row,row,row,row,row,row],[row,row,row,row,row,row],[row,row,row,row,row,row],[row,row,row,row,row,row],[row,row,row,row,row,row],[row,row,row,row,row,row],[row,row,row,row,row,row]];

var div = document.getElementById('root')

// div.innerHTML = ' ' ;
var tab = document.createElement('table');
var row = document.createElement('tr');
var column = document.createElement('td');
// tab.appendChild(row);
// row.appendChild(column);
var tabA= [];

column.innerHTML = 'azerty';



for (var i = 0; i < 6; i++) {
    tabA = row;
    var line=tabA;
    var tdA= [];
    for (var j = 0; j < 7; j++) {
        tdA=column;
        var verti=tdA;
        line.appendChild(verti);
    }
    tabA.appendChild(tab);
}
div.appendChild(tab);


var matrixTable = [];

for (var i = 0; i <6 ; i++) {
    matrixTable[i] = [];
    for (var j = 0; j < 7; j++) {
        matrixTable[i].push('0')
    }
}

matrixTable[2][3]= "1"

var tableB = document.createElement("table");
var trB = document.createElement("tr");
tdB = [];
for (var i = 0; i < 7; i++) {
    tdB[i] = document.createElement("td");
    tdBi = tdB[i];
    trb.appendChild(tdBi);
}
