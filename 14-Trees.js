/* TREES */
/*Los Trees o árboles son una estructura de datos no secuencial
que sigue un modelo jerárquico, como el que podemos encontrar en 
árboles genialógicos o en la organización de una compañía */

/*Trees Terminology */
/*Un árbol consiste en nodos con relación padre-hijo.
cada nodo tiene un padre excepto el primero.

+El nodo top se llama root.
+Los nodos internos contienen al menos un hijo.
+Los nodos externos no tienen hijos.

+Los nodos tienen ancestros y descendientes. up-down.

+Un subtree contiene un nodo y descendientes.
+La profundidad de un nodo consiste en el numero de ancestros de dicho nodo. up
+La altura de un árbol consiste en la profundidad máxima de cada nodo.
*/

/* Tipos de Árboles */

/* Binary Tree 
Un árbol binario tendrá como máximo 2 hijos por cada nodo.
un hijo a la izquierda y otro a la derecha */

/* Search Tree
Un árbol de búsqueda permite almacenar nodos con los valores pequeños
a la izquierda y los valores grandes a la derecha. */

/*                 BINARY SEARCH TREE                                  */
/*              [ left ][ Key ][ rigth ] 
                /                       \ 
    [ left ][ key ][ rigth ]   [ left ][ key ][ rigth ]                 */


function BinarySearchTree() {

    /*  Constructor */
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    /* Variables */
    var root = null;

    /* Methods */
    this.insert = (key) => {

        var newNode = new Node(key); //{1}

        if (root == null) { //{2}
            root = newNode;
        } else {
            insertNode(root, newNode); //{3}
        }
    };

    this.search = (key) => {
        return searchNode(root, key); //{1}
    };

    /* Traversing */
    /* Consiste en recorrer y aplicar una función en cada nodo del Tree */
    this.inOrderTraverse = (callback) => { //Ascendente menor a mayor
        inOrderTraverseNode(root, callback); //{1}
    };

    this.preOrderTraverse = (callback) => { //De izq a derecha jerárquica
        preOrderTraverseNode(root, callback);
    };

    this.postOrderTraverse = (callback) => {
        postOrderTraverseNode(root, callback);
    };

    this.min = () => {
        return minNode(root);
    };

    this.max = () => {
        return maxNode(root);
    };

    this.remove = (key) => {
        root = removeNode(root, key); //{1}
    };

    /* Private Functions */
    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) { //{4}
            if (node.left === null) { //{5}
                node.left = newNode; //{6}
            } else {
                insertNode(node.left, newNode); //{7}
            }
        } else {
            if (node.right === null) { //{8}
                node.right = newNode; //{9}
            } else {
                insertNode(node.right, newNode); //{10}
            }
        }
    };

    var inOrderTraverseNode = function(node, callback) {
        if (node !== null) { //{2}
            console.log(node)
            inOrderTraverseNode(node.left, callback); //{3}
            console.log(node);
            callback(node.key); //{4}
            inOrderTraverseNode(node.right, callback); //{5}

        }
        console.log('nulo')
    }

    var preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key); //{1}
            preOrderTraverseNode(node.left, callback); //{2}
            preOrderTraverseNode(node.right, callback); //{3}
        }
        console.log('nacho');
    }

    var postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback); //{1}
            postOrderTraverseNode(node.right, callback); //{2}
            callback(node.key) //{3}
        }
    }

    var minNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node.key;
        }
        return null;
    }

    var maxNode = function(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }
            return node.key;
        }
        return null;
    }

    var searchNode = function(node, key) {
        if (node === null) { //{2}
            return false;
        }
        if (key < node.key) { //{3}
            return searchNode(node.left, key); //{4}
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    var removeNode = function(node, key) {
        if (node === null) { //{2}
            return null;
        }

        if (key < node.key) { //{3}
            node.left = removeNode(node.left, key); //{4}
            return node; //{5}
        } else if (key > node.key) { //{6}
            node.right = removeNode(node.right, key); //{7}
            return node; //{8}
        } else { // key is equal to node.key

            //case 1: a leaf node
            if (node.left === null && node.right === null) { //{9}
                node = null; //{10}
                return node; //{11}
            }

            //case 2: a node with only 1 child
            if (node.left === null) { //{12}
                node = node.right; //{13}
                return node; //{14}
            } else if (node.right === null) {
                node = node.left; //{16}
                return node; //{17}
            }

            //case 3: a node with 2 children
            var aux = findMinNode(node.right); //{18}
            node.key = aux.key; //{19}
            node.right = removeNode(node.right, aux.key) //{20}
            return node; //{21}
        }
    }

    var findMinNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }
            return node;
        }
        return null;
    }
};

//Callback function
function printNode(value) {
    console.log(value);
};


//Using BinarySearchTree
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

console.log('[ In Order Traverse ]');
tree.inOrderTraverse(printNode);
console.log('[ Pre Order Traverse ]');
tree.preOrderTraverse(printNode);
console.log('[ Post Order Traverse ]');
tree.postOrderTraverse(printNode);

console.log(tree.search(15)); //>>True;
console.log(tree.remove(15));
console.log(tree.search(15)); //>>false;
tree.postOrderTraverse(printNode);