/* SETS */
/* Son una colección de elementos no ordenados e irrepetibles */

var Set = function() {

    /* Items */
    var items = {};

    /* Methods */
    this.add = (value) => {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }
    this.remove = (value) => {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };
    this.has = (value) => { return items.hasOwnProperty(value); }
    this.clear = () => { items = {}; }
    this.size = () => { return Object.keys(items).length; }
    this.values = () => { return Object.keys(items); }

    /* Set Operations */
    /*{1:Union, 2:Intersection, 3:Difference, 4:Subset}*/

    /*La Unión es el conjunto A y B en un nuevo conjunto C */
    this.union = (otherSet) => {
        var unionSet = new Set(); //{1}

        var values = this.values(); //{2}
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values(); //{3}
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet;
    }

    /*La Interseccion es el conjunto de elementos que existen en A y en B*/
    this.intersection = (otherSet) => {
        var intersectionSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    /*La Diferencia es el conjunto que existe en A pero no en B */
    this.difference = (otherSet) => {
        var differenceSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        return differenceSet;
    };

    /*El Subconjunto A esta contenido dentro de B */
    this.subset = (otherSet) => {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }

}

//Using the Set class
var set = new Set();

set.add(1);
console.log(set.values()); //->["1"]
console.log(set.has(1)); //->true
console.log(set.size()); //->1

console.log(set.values()); //->["1","2"]
console.log(set.has(2)); //->true
console.log(set.size()); //->2

set.remove(1);
console.log(set.values()); //->["2"]

set.remove(2);
console.log(set.values()); //->[]

/* Using Set Operators */

//[ A u B ] | Union
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(3); //sí otra vez el 3
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB);
console.log(unionAB.values()); //->["1","2","3","4","5","6"];

//[A u B ] | Intersection
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

var intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

//[ A - B ] | Difference
var differenceAB = setA.difference(setB);
console.log(differenceAB.values());

//[ A c B ] | Subset    *nota: la 'c' debería de ir subrayada
var setA = new Set();
setA.add(1);
setA.add(2);

var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.subset(setB)); //->true
console.log(setA.subset(setC)); //->false