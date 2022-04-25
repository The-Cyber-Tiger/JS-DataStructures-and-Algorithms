/* Linear Probing */
/* Consiste en revisar si la posición esta ocupada
si es así intentará index +1, si index +1 esta ocupado
intentará index +2 y así sucesivamente.  */

function HashTable() {
    var table = [];

    /* Methods */
    this.put = (key, value) => {
        var position = loseloseHashCode(key); //hasheamos para obtener una posicion

        if (table[position] == undefined) { //{2}
            table[position] = new ValuePair(key, value); //{3}
        } else {
            var index = ++position; //{4}
            while (table[index] != undefined) { //{5}
                index++; //{6}
            }
            table[index] = new ValuePair(key, value); //{7}
        }
    };

    this.remove = (key) => {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            if (table[position].key === key) {
                table[index] = undefined; //{10}
            } else {
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key) { //{11}
                    index++;
                }
                if (table[index].key === key) {
                    table[index] = undefined;; //{13}
                }
            }
        }
        return undefined;
    };
    this.get = (key) => {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) { //{8}
            if (table[position].key === key) { //{9}
                return table[position].value; //{10}
            } else {
                var index = ++position;
                while (table[index] === undefined || table[index].key !== key) { //{11}
                    index++;
                }
                if (table[index].key === key) { //{12}
                    return table[index].value; //{13}
                }
            }
        }
        return undefined;
    };

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

    var ValuePair = function(key, value) {
        this.key = key;
        this.value = value;

        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    }

}

/* Handling Collisions */
var myhash = new HashTable();

myhash.put('Jamie', 'jamie@email.com');
myhash.put('Jonathan', 'jonathan@email.com');
myhash.put('Sue', 'sue@email.com');

myhash.print();