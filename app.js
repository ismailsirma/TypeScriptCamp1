function combine(input1, input2, 
// allow only two possible value strings:
resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(31, 26, 'as-number');
console.log(combinedAges);
var combinedNames = combine('Ismail', 'Anna', 'as-text');
console.log(combinedNames);
