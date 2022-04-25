function vowelsAndConsonants(s) {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    var text = s.split('');
    const result = [];
    const result2 = [];
    var check = false

    for (var i = 0; i < text.length; i++) {
        for (let vocal of vowels) {
            if (vocal == text[i]) {
                result.push(text[i])
                var check = true;
                break;
            } else {
                check = false;
            }
        }
        if (!check) {
            result2.push(text[i])
        }
    }

    return result.concat(result2)
}

var fin = vowelsAndConsonants('javascriptloops');
console.log(fin)