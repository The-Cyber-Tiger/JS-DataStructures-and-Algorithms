/* GRAPHS */
/*Son una estructura de datos no linear que cumple con el modelo abstracto 
de una red de nodos (vertex) interconectados por lineas o aristas (edges)

Un grafo G esta compuesto por:
    G = (V, E)
° V: Set de vertices
° E: Set de aristas conectados a los vertices V

                 (__A__)
                /    \   \
            (_B_) (_C_)__(_D_)
            /   \     \ /    \
         (_E_) (_F_) (_G_)   (_H_)
           |
         (_I_)
 */

/* Terminología de grafos
+ Los vertices interconectados por aristas se llaman: "Vertices Adyacentes".
+ El 'degree' o grado de un Vertice consiste en el num. de vertices adyacentes.
ex: A tiene un grado 3 | E tiene un grado 2.
+ Un 'path' o camino es una secuencia consecutiva de Vertices.
+ Un 'Simple path' no contiene Vertices repetidos.
ex: A-D-G 
+ Un 'cycle' es un 'path' que retorna al Vertice inicial.
ex: A-D-C-A
+ Un grafo es 'acyclic' si no contiene ciclos.

+ Los Grafos pueden tener dirección o no. ('Directed or Undirected').
+ Un Grafo puede estar 'strongly connected' fuertemente conectado si
existe un camino en ambas direcciones entre los vertices. ex: C y D.
 
*/

function Graph() {

    /*Propiedades */
    var vertices = []; //{1}
    var adjList = new Dictionary(); //{2}

    /*Constructor */
    this.addVertex = function(v) {
        vertices.push(v); //{3}
        adjList.set(v, []); //{4}
    };

    this.addEdge = function(v, w) {
        adjList.get(v).push(w); //{5}
        adjList.get(w).push(v); //{6}
    };

    this.toString = function() {
        var s = '';
        for (var i = 0; i < vertices.length; i++) { //{10}
            s += vertices[i] + '->';
            var neighbors = adjList.get(vertices[i]); //{11}
            for (var j = 0; j < neighbors.length; j++) { //{12}
                s += neighbors[j] + '';
            }
            s += '\n'; //{13}
        }
        return s;
    };
}

function Dictionary() {

    /* Items */
    var items = {};

    /* Methods */

    //Agrega un nuevo elemento
    this.set = (key, value) => { items[key] = value; };

    //Elimina un elemento buscando su key
    this.remove = (key) => {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    //Revisa si el key existe
    this.has = (key) => { return key in items };

    //Busca el key de un elemento en particular 
    this.get = (key) => { return this.has(key) ? items[key] : udefined };
    this.clear = () => { items = {}; };
    this.size = () => { return Object.keys(items).length; };
    this.keys = () => { return Object.keys(items); };
    this.values = () => {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
    this.getItems = () => { return items; }
}

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //{7}
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());