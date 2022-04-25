// Diferentes métodos para arrays


// 1 | .concat() para concatenar arrays
var zero = 0;
var posNumb = [2, 4, 6, 8];
var negNumb = [-2, -4, -6, -8];

var numbers = negNumb.concat(zero, posNumb); //
// console.log(numbers)

// 2 | .every() .some()

var isEven = function(m) {
    // si es multiplo de 2
    console.log(m)
    return (m % 2 == 0) ? true : false;
};

var box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

box.every(isEven) //con .every() iteramos el array hasta que aparezca un False
box.some(isEven) //con .some() iteramos el array hasta que aparezca un True

// Si quisieramos iterar no importa el resultado usamos .forEach()
box.forEach(function(x) {
    console.log((x % 2 == 0))
})

// Para crear un nuevo array con el resultad de una func"isEven" a partir de uno existente .map()
var myBox = box.map(isEven)
console.log(myBox) //el nuevo array contiene true or false segun la funcion isEven

// Para filtrar en un nuevo array el result de pasarle una func usamos .filter()
var filtredNumbs = box.filter(isEven)
console.log(filtredNumbs) //>>2,4,6,8,10,12


// .reduce()
var box5 = [1, 2, 3, 4, 5]
const x = box5.reduce(function(previous, current, index) {
    return previous + current;
});
console.log(x) // >>15
    // otro ejemplo
var boxFruits = ["apple", "grape", "apple", "apple", "orange"]
let conteo = boxFruits.reduce((conteoAct, fruta, index) => {
    conteoAct[fruta] = (conteoAct[fruta] || 0) + 1;
    console.log(conteoAct);
    return conteoAct;
}, {})
console.log(conteo)
    // otro ejempl
const boxAnidado = [1, [2, 3], 4, [5]];
let deshanidado = boxAnidado.reduce((previous, current) => (
    previous.concat(current)
), [])
console.log(deshanidado)

// Searching and Sorting
console.log(box.reverse()); // .reverse() para invertir el orden del array de num box
console.log(box.sort()); // .sort() para ordenar el array box otra vez
// como vemos el array no esta en orden porque esta hecho lexicográficamente para Strings
// Pero podemos crear el sig. codigo para cumplir la misión
box.sort(function(a, b) {
    return a - b // esto agregaría un signo - y nos permite orden
})
console.log(box)
    // Esto es posible porque el método .sort() nos permite pasar una funcion comparadora
    // que evalua y asigna con 1 o -1 segun sea el caso y después ordena
    // Custom Sort
var friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }
];

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1
    }
    if (a.age > b.age) {
        return 1
    }
    return 0
}
console.log(friends.sort(comparePerson));

// Searching
// tenemos 2 opciones .indexOf() y .lastIndexOf()
// lo que hace es regresar el indice del primer o del último elemento encontrado
// si no existe devuelve -1
console.log(numbers)
console.log(numbers.indexOf(10))
console.log(numbers.indexOf(100))
numbers.push(10)
console.log(numbers.indexOf(10))
console.log(numbers.lastIndexOf(10))

// .toString() nos devuelve una salida de Strings
console.log(numbers.toString())

// .join() nos permite agregar un separador entre elementos en la salida
console.log(numbers.join('*'))