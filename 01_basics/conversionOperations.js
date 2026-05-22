let score ="30aaa"
console.log(typeof score)
let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log(valueinNumber)

// if the string contains non-numeric characters, the conversion will result in NaN (Not a Number). In this case, "30aaa" cannot be fully converted to a number, so valueinNumber will be NaN.
// "33"=> 33
// "33aaa"=> NaN