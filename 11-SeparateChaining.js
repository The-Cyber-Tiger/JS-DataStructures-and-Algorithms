/* Separate Chaining */
/*Consiste en crear una linked list por cada posicion de la tabla,
visualmente la tabla tiene sus posiciones en vertical y por cada elemento que comparte
posicion una linked list en horizontal donde se almacenan los repetidos */

function LinkedList() {

    //Constructor
    var Node = function(element) {
        this.element = element; //Data
        this.next = null; //null xqe es nuevo
    }

    var length = 0;
    var head = null; //head = El principio de la lista 

    //Para agregar elementos al final de la lista
    this.append = function(element) {
        var node = new Node(element),
            current;

        if (head === null) { //First node on list
            head = node;
        } else {
            current = head;

            //loop the list until find last item
            while (current.next) {
                current = current.next;
            }
            //get last item and assign next to node to make the link
            current.next = node;
        }
        length++; //update size of list
    };

    //Para insertar un elemento
    this.insert = function(position, element) {

        //check for out-of-bounds values
        if (position >= 0 && position <= length) { //1
            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position == 0) {
                node.next = current; //2
                head = node;
            } else {
                while (index++ < position) { //3
                    previous = current;
                    current = current.next;
                }
                node.next = current; //4
                previous.next = node; //5
            }
            length++;
            return true;
        } else {
            return false; //6
        }
    };

    //Para eliminar un nodo especificando su posicion
    this.removeAt = function(position) {
        //check for out-of-bounds values
        if (position > -1 && position < length) { //1
            var current = head, //2
                previous, //3
                index = 0; //4

            //removing first item
            if (position === 0) { //5
                head = current.next
            } else {
                while (index++ < position) { //6
                    previous = current; //7
                    current = current.next; //8
                }
                //link previous with current's next: skip it to remove
                previous.next = current.next; //9
            }
            length--; //10
            return current.element;
        } else {
            return null; //11
        }
    };

    //Para eliminar un nodo por su elemento
    this.remove = function(element) {
        var index = this.indexOf(element);
        return this.removeAt(index)
    };

    //Para conocer el indice de un nodo por su data
    this.indexOf = function(element) {
        var current = head, //{1}
            index = 0;

        while (current) { //{2}
            if (element === current.element) {
                return index; //{3}
            }
            index++; //{4}
            current = current.next; //{5}
        }
        console.log('aki')
        return -1;
    };

    //Para saber si la lista esta vacía
    this.isEmpty = function() {
        return length === 0;
    };

    //Para saber el tamaño de la lista
    this.size = function() {
        return length;
    };

    //Para connvertir string
    this.toString = function() {

        var current = head, //{1}
            string = ''; //{2}

        while (current) { //{3}
            string = current.element; //{4}
            current = current.next; //{5}
        }
        return string; //{6}
    };

    this.getHead = function() {
        return head;
    };
}

function HashTable() {
    var table = [];

    /* Methods */
    this.put = (key, value) => {
        var position = loseloseHashCode(key); //hasheamos para obtener una posicion
        if (table[position] == undefined) {
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value));
    };
    this.remove = (key) => {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {

            var current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) { //{11} 
                    table[position].remove(current.element); //{12} 
                    if (table[position].isEmpty()) { //{13}
                        table[position] = undefined; //{14}
                    }
                    return true;
                }
                current = current.next;
            }
            //check in case first or last element
            if (current.element.key === key) { //{16}
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    };
    this.get = (key) => {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {

            //iterate linked list to find key/value
            var current = table[position].getHead();

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            //check in case first or last element
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };
    this.print = () => {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(table[i].size());
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
myhash.put('Roko', 'roko@dogmail.com');
myhash.put('Jamie', 'jamie@email.com');
myhash.put('Jonathan', 'jonathan@email.com');
myhash.put('Sue', 'sue@email.com');

myhash.print(); //return all linked list and their size >>[1][3]

console.log(myhash.remove('Jamie')); //remove Jamie
console.log(myhash.get('Jamie')); //>> undefined
myhash.print(); //return all linked list and their size >>[1][2]