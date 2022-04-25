/* Hash djb2 */
/*con la función de hash "LoseLose", es posible que tengamos
que lidiar con muchas colisiones y sus soluciones, para eso
existen múltiples funciones Hash, una de ellas es la "djb2"
la cual hace uso de números primos para asegurar un hash value 
diferente en cada operacion */

function HashTable() {
    var table = [];

    /* Methods */
    this.put = (key, value) => {
        var position = djb2HashCode(key); //hasheamos para obtener una posicion
        console.log(position + ' - ' + key); //mostramos
        table[position] = value; //insertamos en la tabla posicion y valor
    };
    this.remove = (key) => { table[djb2HashCode(key)] = undefined; };
    this.get = (key) => { return table[djb2HashCode(key)] };
    this.print = () => {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    }

    /*Private Methods*/
    var djb2HashCode = function(key) {
        var hash = 5381; //{1}

        for (var i = 0; i < key.length; i++) { //{2}
            hash = hash * 33 + key.charCodeAt(i); //{3}
        }
        return hash % 1013; //{4}
    }

}