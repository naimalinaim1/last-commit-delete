const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`;

// before es6 multiline
const multiline = 'First line text \n' + 
'Second line code \n' +
'Third line code';
console.log(multiline + '\n');


// after es6 multiline
const newMultiline = `First line
Second line
Third line
Fourth line`;
console.log(newMultiline);

const a = 1;
const b = 2;
// before es6 
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b);
console.log(summary);
// after es6
const newSummary = `sum of: ${a} and ${b} is: ${a+b}`;
console.log(newSummary);

