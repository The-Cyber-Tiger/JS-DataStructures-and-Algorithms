/* QUEUES */
/* es una colección ordenada de objetos
que sigue una estructura de fila o cola horizontal
donde el primer elemento en la fila es el primero
en recibir la ejecución de una acción [FIFO]*/

function Queue() {
    var items = [];

    /*Para agregar elementos al final, solo acepta
    elementos nuevos en la cola */
    this.enqueue = (element) => (
        items.push(element)
    )

    /*Para eliminar el primero elemento en la cola*/
    this.dequeue = () => {
        return items.shift();
    }

    /*Para saber cual elemento esta hasta delante en la cola */
    this.front = () => {
        return items[0];
    }

    /*Para saber si el array esta vacío */
    this.isEmpty = () => {
        return items.length == 0;
    };

    /*Para conocer el tamaño del array */
    this.size = () => {
        return items.length;
    }

    /*Para imprimir el array en string */
    this.print = () => console.log(items.toString());

}

//instanciamos
var queue = new Queue();
console.log(queue.isEmpty()) //>>True | esta vacío

//agregamos elementos
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");

//ejecutamos algunos comandos
queue.print(); //>>John,Jack,Camila
console.log(queue.size()); //>>3
console.log(queue.isEmpty()); //>> False
queue.dequeue();
queue.dequeue();
queue.print(); //>Camila

/*En los Queues muchas veces existen prioridades al momento de ser agregados
realicemos un ejemplo llamado Min-Priority-Queue */
function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.isEmpty = () => {
        return items.length == 0;
    };
    this.print = () => {
        console.log(items)
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);
        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }
        }
    }
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();

/* HOT POTATO - Circular Queue
un ejemplo basado en el juego de la papa caliente*/

const hotPotato = (nameList, num) => {

    var queue = new Queue();

    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    var eliminated = '';
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' fue eliminado por Hot Potato')
    }
    return queue.dequeue();
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('The winner is : ' + winner)