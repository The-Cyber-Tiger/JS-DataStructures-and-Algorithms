/* DOUBLE LINKED LIST */
/*una lista doble a diferencia de la simple es capaz de apuntar hacia ambos sentidos */

var DoubleLinkedList = function() {

    /* Constructor */
    var Nodo = function(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    /* Variables */
    var head,
        tail,
        length = 0;

    /* Metodos */
    this.insert = function(position, data) {
        if (position >= 0 && position <= length) { //validamos los params
            //instanciamos
            var nodo = new Nodo(data),
                current = head,
                previous,
                index = 0;

            /* Analizamos los escenarios posibles */
            if (position === 0) {

                if (!head) {
                    head = nodo;
                    tail = nodo;
                } else {
                    nodo.next = current;
                    current.prev = nodo;
                    head = nodo;
                }

            } else if (position === length) {
                current = tail;
                current.next = nodo
                nodo.prev = current;
                tail = nodo;
            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = nodo;
                nodo.prev = previous;

                nodo.next = current;
                current.prev = nodo;
            }
            length++;
            return nodo.data;
        } else {
            return false;
        }
    }

    this.removeAt = function(position) {

        /* Validamos los params */
        if (position > -1 && position <= length) {
            var current = head,
                previous,
                index = 0;

            /* Analizamos los posibles escenarios */
            if (position === 0) { //first node
                head = current.next
                if (length === 1) { //unique node
                    tail = null;
                } else {
                    head.prev = null
                }
            } else if (position === length - 1) { //last node
                current = tail;
                tail = current.prev
                tail.next = null;
            } else { //middle node
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return nodo.data;


        } else {
            return false
        }

    }
}

var myDouble = new DoubleLinkedList();
console.log(myDouble.insert(0, 13))
console.log(myDouble.insert(1, 77))
console.log(myDouble.insert(2, 14))
console.log(myDouble.insert(3, 79))
console.log(myDouble.insert(3, 78))