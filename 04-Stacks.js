/* STACK */
/* es una colección ordenada de objetos que siguen
una estructura de pila o torre donde los elementos más nuevos
se acomodan hasta arriba y los viejos en la base.
Al ejecutar una acción el elemento de arriba recibe la interacción [LIFO]*/

// creando un Stack:

function Stack() {

    var items = []; // un array donde almacenaremos el stack

    //propiedades y metodos aqui

    // añade un elemento al stack
    this.push = function(element) {
            items.push(element)
        }
        // elimina el ultimo un elemento del stack
    this.pop = function() {
        return items.pop()
    };
    //consulta el ultimo elemento añadido al stack
    this.peek = function() {
            return items[items.length - 1];
        }
        //consulta si el stack esta vacio
    this.isEmpty = function() {
            return items.length == 0;
        }
        //consulta el tamaño del stack
    this.size = function() {
            return items.length;
        }
        //elimina todos los elementos del stack
    this.clear = function() {
            items = [];
        }
        //un helper para imprimir el contenido del stack
    this.print = function() {
        console.log(items.toString());
    }
}

// Una vez que nuestra clase esta definida la probamos
var stack = new Stack(); //instanciamos
console.log(stack.isEmpty()) //checamos si esta vacía >>True

// Añadimos algunos elementos
stack.push(5);
stack.push(8);

console.log(stack.peek()); //Devuelve el ultimo elemento añadido >>8

stack.push(11); //+11
console.log(stack.size()) //Devuelve el tamaño >>3
console.log(stack.isEmpty()) // >>False | no esta vacío
stack.push(15) //+15

stack.pop(); //eliminamos los ultimos items añadidos
stack.pop();
console.log(stack.size()) //>>2
stack.print() //solo quedan 2 elementos >>5,8

//Ahora que sabemos usar nuestro Stack resolvamos algunos problemas del Computer Science
/* DECIMAL to BINARY */
/* realizaremos la conversion de numeros decimales a binarios */
function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2); //obtenemos el residuo rem
        remStack.push(rem); //lo guardamos
        decNumber = Math.floor(decNumber / 2) //actualizamos el num decimal
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }

    return binaryString;
}

console.log(`Dec-Bin: ${divideBy2(10)}`) //1010

//Incluso podemos cambiar la base y obtener una conversión personalizada
function customDivide(decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF'

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base); //obtenemos el residuo rem
        remStack.push(rem); //lo guardamos
        decNumber = Math.floor(decNumber / base) //actualizamos el num decimal
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; //digits[rem]->digits[5] y digits[10]
    }

    return baseString;
}

console.log(`Dec-Hexa: ${customDivide(90, 16)}`)