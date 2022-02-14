function combine(
    input1: number | string, 
    input2: number | string,
    // allow only two possible value strings:
    resultConversion: 'as-number' | 'as-text'
    ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = combine(31, 26, 'as-number')
console.log(combinedAges)

const combinedNames = combine('Ismail', 'Anna', 'as-text')
console.log(combinedNames)