/* My linked list */

const myLinkedList = function() {

    //Constructor
    var Nodex = function(data) {
        this.data = data;
        this.next;
    }

    //Variables
    var head = null;
    var length = 0;

    /* --MÉTODOS-- */

    /* Agregar nodo al final de la lista */
    this.append = function(data) {
        var nodo = new Nodex(data), //Instanciamos un nuevo nodo
            current; //variable posicional

        if (head === null) { //Si no tenemos head significa que no hay nodos creados
            head = nodo; //simplemente asignamos la variable head a nuestro nodo y ya esta creado
        } else { //Si ya existe un head tenemos que linkear la propiedad .next del último nodo al nuevo nodo para unir la cadena de nodos

            //Para eso asignamos current a head para iterar desde el inicio
            current = head;

            while (current.next) {
                /* Cuando lleguemos a la etiqueta .next donde es null significa que no hay nodo linkeado
                por lo tanto estamos posicionados ante el último nodo */
                current = current.next //guardamos la posición
            }

            /* Una vez que estamos posicionados en el último nodo solo linkeamos la propiedad .next del nodo anterior al nuevo nodo */
            current.next = nodo;
            // console.log(head.data) //>>El primer nodo
            // console.log(current.data) //>> Nodo previo
            // console.log(nodo.data) //>>ultimo nodo
        }

        length++; //Actualizamos el size de nuestra lista
        return nodo.data;
    }

    /* Eliminar Nodo en base a su posición */
    this.removeAt = function(position) {

        if (position > -1 && position < length) {
            var current = head, //empezamos por el inicio
                previous, //variables posicionales
                index = 0; //variables posicionales
            // console.log(head) //Primer nodo
            if (position === 0) {
                /*Si la posicion es = 0 significa que eliminamos el primer nodo */
                head = current.next //Por lo tanto asignamos el head al .next que linkea al nodo siguiente
                    /*La memoria se encarga automaticamente de limpiar el nodo eliminado*/
                    // console.log(head) //Ahora el nodo es reemplazado y el nodo que le seguía pasa a ser el head
            } else {
                while (index++ < position) { //iteramos, el anterior es el actual y el actual es el siguiente hasta que llegamos...
                    previous = current //Nodo anterior al nodo que quieres eliminar
                    current = current.next //Nodo al que apunta ese nodo anterior(el que quieres eliminar)
                }
                previous.next = current.next // Entonces el .next del Nodo anterior va a linkear al nodo que apuntaba el eliminado
            }
            length--;
            return current.data

        } else {
            return null;
        }
    }

    /* Insertar un nodo en cierta posición */
    this.insert = function(position, data) {

        if (position >= 0 && position <= length) { //Filtramos parametros validos
            var nodo = new Nodex(data), //instanciamos y declaramos variables
                index = 0,
                current = head, //empezamos por el inicio
                previous;

            if (position === 0) { //Si la posicion a insertar es la inicial...
                nodo.next = current //linkeamos el nodo inicial al nodo que desplazamos
                head = nodo; //etiquetamos el nodo insertado como el nuevo head
            } else {
                while (index++ < position) { //iteramos hasta una posición anterior
                    previous = current;
                    current = current.next;
                }
                //Una vez posicionados insertamos el nuevo nodo
                previous.next = nodo; //linkeamos .next del nodo previo a nuestro nuevo nodo
                nodo.next = current; //linkeamos .next del nuevo nodo al nodo que le sigue
            }
            length++;

            return nodo.data;
        } else {
            return null;
        }
    }

    /* Retornar la Lista como String */
    this.toString = function() {
        var current = head,
            string = '';

        while (current) {
            string = current.data;
            current = current.next;
        }
        return string;
    };

    /* Retornar el índice de un elemento */
    this.indexOf = function(data) {
        var current = head,
            index = -1;

        while (current) {
            index++;
            if (data === current.data) {
                return `El Nodo: ${data} está en la pos-> ${index}`;
            }
            current = current.next;
        }


        return 'No existe';
    }

    /* Para eliminar un nodo por su data */
    this.remove = function(data) {
        var index = this.indexOf(data);
        return this.removeAt(index);
    }

    /* Para saber si esta vacía la lista */
    this.isEmpty = function() {
        return length === 0;
    }

    /* Para saber el tamaño de la lista */
    this.size = function() {
        return length;
    }

    /* Para conocer el Header */
    this.getHead = function() {
        return head.data;
    }

    this.printList = function() {
        list = [];
        current = head;
        while (current.next) {
            // console.log(current.data);
            list.push(current.data);
            current = current.next
        }
        list.push(current.data);
        return list.toString()
    }
}

var mylist = new myLinkedList();
console.log(`Nodo: ${mylist.append(13)} añadido correctamente!`)
console.log(`Nodo: ${mylist.append(77)} añadido correctamente!`)
console.log(`Nodo: ${mylist.append(14)} añadido correctamente!`)
console.log(`Linked List: ${mylist.printList()}`);
console.log(`El Nodo:  ${mylist.removeAt(1)} ha sido eliminado`);
console.log(`Linked List: ${mylist.printList()}`);
console.log(`El nodo:  ${mylist.insert(0,0)} ha sido añadido`);
console.log(`El size list es de: ${mylist.size()}`);
console.log(mylist.indexOf(14))
console.log(`Lista vacía?: ${mylist.isEmpty()}`);
console.log(`El size list es de: ${mylist.size()}`);
console.log(`La cabecera es: ${mylist.getHead()}`);