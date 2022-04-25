var fibo = [];
fibo[1] = 1;
fibo[2] = 1;

for (var x = 3; x < 20; x++) {
    fibo[x] = fibo[x - 1] + fibo[x - 2];
}

for (var i = 1; i < fibo.length; i++) {
    console.log(fibo[i]);
}

// Jugando con splice

var box = []

for (var i = 0; i < 12; i++) {
    box[i] = i;
    console.log(box[i]);
}

console.log(box)

box.shift()
console.log(box)
box.pop()
console.log(box)
box.splice(0, 3)
console.log(box)
box.splice(0, 0, 1, 2, 3)
console.log(box)