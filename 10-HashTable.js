/* HASHTABLE */
/*El hashing consiste en encontrar un valor dentro de una estructura de datos 
en el menor tiempo posible. Para hacerlo normalmente iteramos por sobre todos
los elementos hasta encontrar el valor, sin embargo en una funcion de Hash 
tenemos una 'Key' y una posición donde el valor que buscamos se encuentra. */

/*La función de Hash más común es la "lose lose" donde los valores
de cada carácter ASCII del 'Key' length se suman y se ordenan */

//Creando un Hash Table con clase (;
function HashTable() {
    var table = [];

    /* Methods */
    this.put = (key, value) => {
        var position = loseloseHashCode(key); //hasheamos para obtener una posicion
        console.log(position + ' - ' + key); //mostramos
        table[position] = value; //insertamos en la tabla posicion y valor
    };
    this.remove = (key) => { table[loseloseHashCode(key)] = undefined; };
    this.get = (key) => { return table[loseloseHashCode(key)] };
    this.print = () => {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    }

    /*Private Methods*/
    var loseloseHashCode = function(key) {
        var hash = 0; //{1}
        for (var i = 0; i < key.length; i++) { //{2}
            hash += key.charCodeAt(i); //{3}
        }
        return hash % 37; //{4}
    }

}

//Using the Hash Table
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf')); //->gandalf@...
console.log(hash.get('Loiane')); //-> undefined

hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

//nota: El Hash Table también es conocido como Hash Map.

/* Handling Collisions */
hash.put('Jamie', 'jamie@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Sue', 'sue@email.com');

hash.print();

/* muchas veces los keys pueden tener el mismo hash value
resultando en una colisión donde se sobrescribe y pierden elementos
para manejar esto existen diferentes técnicas:
1.-Separate Chaining | 2.-Linear Probing | 3.-Double Hashing */