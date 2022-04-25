/* LINKED LISTS */
/*las listas son colecciones dinamicas de elementos 
que a diferencia de un array que se almacena contigua y secuencialmente, 
en una lista los elementos se comportan como nodos ligados entre sí,
cada nodo contiene su data y un espacio de memoria 'link' apuntando al siguiente elemento. 
el primer nodo de una lista recibe el nombre de Head y el último Tail */

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
            index = -1;

        while (current) { //{2}
            if (element === current.element) {
                return index; //{3}
            }
            index++; //{4}
            current = current.next; //{5}
        }
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

var list = new LinkedList();
list.append(15)
list.append(10)
console.log(list.size())
list.remove(10)
console.log(list.size())