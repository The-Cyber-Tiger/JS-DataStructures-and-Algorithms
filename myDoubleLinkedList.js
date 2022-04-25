/* My Double Linked List */

var myDoubleLinkedList = function() {

    /* Constructor */
    var Nodo = function(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    /* Variables */
    var head = null;
    var tail = null;
    var length = 0;

    /* Metodos */
    this.insert = function(position, data) {
        if (position >= 0 && position <= length) {

            var nodo = new Nodo(data),
                current = head,
                previous,
                index = 0;

            /*Analizamos los escenarios posibles*/
            if (position === 0) {
                if (!head) { //Si la lista esta vacía
                    head = nodo;
                    tail = nodo;
                } else { //Si ya existe un head, recorremos el primer nodo
                    current.prev = nodo; //<-linkeamos el .prev al nuevo nodo
                    nodo.next = current; // linkeamos-> el nuevo nodo al desplazado
                    head = nodo; // Por último asiganos el pointer Head al nuevo nodo
                }
            } else if (position === length) { //Si es el último nodo
                current = tail //nos posicionamos
                current.next = nodo; //linkeamos-> el .next del n. actual al nodo nuevo
                nodo.prev = current; // <-linkeamos el .prev del n. nuevo al actual
                tail = nodo; //reasignamos el pointer tail al nuevo y ultimo nodo
            } else { //Si agregamos un nodo en medio
                while (index++ < position) { //nos posicionamos un nodo antes
                    previous = current; //previous es el nodo anterior
                    current = current.next //current es el nodo al que apunta el .next del nodo de enmedio
                }

                /* [.prev|previous|.next] - [.prev|nodo|.next] - [.prev|current|.next] */
                previous.next = nodo; //linkeamos-> el .next del nodo previo al nodo insertado
                nodo.prev = previous; //<-linkeamos el .prev del nodo insertado al nodo previo

                current.prev = nodo; //<-linkeamos el .prev del nodo que le sigue al nodo insertado
                nodo.next = current;
            }
            length++;
            return nodo.data


        } else {
            return false;
        }
    }

    this.removeAt = function(position) {

        /* Filtramos los params */
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;

            /* Analizamos los posibles escenarios(3) */
            if (position === 0) { //eliminar el primer elemento(1)
                head = current.next //recorremos el pointer head al .next del siguiente nodo| si no existe se hace null
                if (length === 1) {
                    tail = null;

                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) { //ultimo nodo(2)
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else { //nodo de en medio(3)
                while (index++ < position) { //iteramos hasta posicionarnos un nodo antes del que queremos eliminar
                    previous = current; //previous nodo izq
                    current = current.next //current.next es el nodo sig al que queremos eliminar
                }
                previous.next = current.next; //linkeamos-> el .next del nodo previo hacia el current.next que es el nodo sig. al elim
                current.next.prev = previous; //<-linkeamos .prev del current.next hacia el nodo previo al elim
            }

            length--;
            return current.data;
        } else {
            return false;
        }
    }

}

var myDouble = new myDoubleLinkedList();
console.log(myDouble.insert(0, 13));
console.log(myDouble.insert(1, 77));
console.log(myDouble.insert(2, 14));
console.log(myDouble.insert(3, 78));

console.log(myDouble.removeAt(1));
console.log(myDouble)