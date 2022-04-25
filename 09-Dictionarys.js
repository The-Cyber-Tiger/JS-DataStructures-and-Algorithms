/* DICTIONARIES */
/*Los diccionarios como los sets almacenan valores únicos e irrepetibles,
sin embargo los diccionarios se enfocan en una estructura [key, value], 
resaltando la funcionalidad de poder buscar un elemento por su 'key'. */

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

//Using the Dictionary class
var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsonsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf')) //->true
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.remove('John')

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());