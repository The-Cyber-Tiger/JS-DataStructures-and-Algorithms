// Ejemplo 2x2 hora y dia 5 elementos

var boxTemp = []

boxTemp[0] = [25, 27, 29, 28, 28, 27];
boxTemp[1] = [39, 30, 30, 39, 31, 30];

// console.log(boxTemp[1][3])

// Creamos una funcion para imprimir los valores
// Necesitamos iterar en cada column y en cada arrow

function printMatrix(matrix) {
    for (x = 0; x < boxTemp.length; x++) {
        for (y = 0; y < boxTemp[x].length; y++) {
            console.log(boxTemp[x][y]);
        }
    }
}
// console.log(boxTemp)
// printMatrix(boxTemp);

// 3x3 Matrix

var box3x3 = [];

for (let x = 0; x < 3; x++) { //Matrix-Cube-Construction
    box3x3[x] = [];
    for (let y = 0; y < 3; y++) {
        box3x3[x][y] = [];
        for (let z = 0; z < 3; z++) {
            box3x3[x][y][z] = [x + y + z];
        }
    }
}

for (let x = 0; x < box3x3.length; x++) { //Cube print
    for (let y = 0; y < box3x3[x].length; y++) {
        for (let z = 0; z < box3x3[x][y].length; z++) {
            console.log(box3x3[x][y][z]);
        }
    }
}