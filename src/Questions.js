const questions = [
  {
    question: 'Which of the following is not a primitive data type in JavaScript?',
    options: ['Number', 'String', 'Boolean', 'Object'],
    correctAnswer: 'Object',
  },
  {
    question: 'Which of the following is not a comparison operator in JavaScript?',
    options: ['==', '===', '!=', '=<'],
    correctAnswer: '=<',
  },
  {
    question: 'What is the output of the following code: var x = 5; console.log(x++);',
    options: ['4', '5', '6', 'Error'],
    correctAnswer: '5',
  },
  {
    question: 'What does the “NaN” value represent in JavaScript?',
    options: ['Not a number', 'Null value', 'Undefined value', 'Boolean value'],
    correctAnswer: 'Not a number',
  },
  {
    question: 'Which of the following is not a data type in JavaScript?',
    options: ['Boolean', 'String', 'Number', 'Character'],
    correctAnswer: 'Character',
  },
  {
    question: 'What is the correct syntax for a “for” loop in JavaScript?',
    options: [
      'for (var i = 0; i < 5; i++)',
      'for (i = 0; i < 5; i++)',
      'for (var i = 5; i > 0; i–)',
      'for (i = 5; i > 0; i–)',
    ],
    correctAnswer: 'for (var i = 0; i < 5; i++)',
  },
  {
    question: 'What is the output of the following code: console.log(2 ** 3);',
    options: ['5', '6', '8', '9'],
    correctAnswer: '8',
  },
  {
    question: 'What is the correct way to declare a variable in JavaScript?',
    options: ['var x = 5;', 'variable x = 5;', 'x = 5;', 'let x = 5;'],
    correctAnswer: 'let x = 5;',
  },
  {
    question: 'Which method can be used to round a number to the nearest integer in JavaScript?',
    options: ['Math.round()', 'Math.floor()', 'Math.ceil()', 'Math.trunc()'],
    correctAnswer: 'Math.round()',
  },
  {
    question: 'What is the output of the following code: console.log(typeof null);',
    options: ['undefined', 'null', 'object', 'string'],
    correctAnswer: 'object',
  },
  {
    question: 'What does the ‘typeof’ operator return for an array?',
    options: ['array', 'object', 'null', 'undefined'],
    correctAnswer: 'object',
  },
  {
    question: 'Which of the following is used to define a block of code in JavaScript?',
    options: ['Curly braces', 'Square brackets', 'Parentheses', 'Angle brackets'],
    correctAnswer: 'Curly braces',
  },
  {
    question: "What is the output of the following code: console.log('5' + 3);",
    options: ['8', '53', 'NaN', 'Error'],
    correctAnswer: '53',
  },
  {
    question: 'Which of the following is a falsy value in JavaScript?',
    options: ['0', "'0'", '[]', '{}'],
    correctAnswer: '0',
  },
  {
    question: "What will be the result of the following code: console.log(Boolean('false'));",
    options: ['true', 'false', 'null', 'undefined'],
    correctAnswer: 'true',
  },
  {
    question: 'Which of the following is not a valid JavaScript variable name?',
    options: ['_var', '$var', 'var', 'varName'],
    correctAnswer: 'var',
  },
  {
    question: 'What is the purpose of the `break` statement in JavaScript?',
    options: ['Exit a loop', 'Skip an iteration', 'Stop script execution', 'Jump to another loop'],
    correctAnswer: 'Exit a loop',
  },
  {
    question: 'Which keyword is used to define a constant in JavaScript?',
    options: ['var', 'let', 'const', 'static'],
    correctAnswer: 'const',
  },
  {
    question: "What is the output of the following code: console.log(1 == '1');",
    options: ['true', 'false', 'Error', 'undefined'],
    correctAnswer: 'true',
  },
  {
    question: 'Which function is used to parse a string to an integer in JavaScript?',
    options: ['parseInt()', 'parseFloat()', 'Number()', 'Integer()'],
    correctAnswer: 'parseInt()',
  },
  {
    question: 'What is the output of the following code: console.log(typeof NaN);',
    options: ['number', 'string', 'undefined', 'null'],
    correctAnswer: 'number',
  },
  {
    question: 'Which of the following is not an array method in JavaScript?',
    options: ['pop()', 'push()', 'shift()', 'replace()'],
    correctAnswer: 'replace()',
  },
  {
    question: 'What is the output of the following code: console.log([] + []);',
    options: ['undefined', 'null', '0', "'' (empty string)"],
    correctAnswer: "'' (empty string)",
  },
  {
    question: 'What does the ‘this’ keyword refer to in a JavaScript object method?',
    options: ['The global object', 'The object itself', 'The parent object', 'The window object'],
    correctAnswer: 'The object itself',
  },
  {
    question: 'What is the output of the following code: console.log(!!false);',
    options: ['true', 'false', 'null', 'undefined'],
    correctAnswer: 'false',
  },
  {
    question: 'What is the purpose of the `continue` statement in a loop?',
    options: ['Exit the loop', 'Skip the rest of the loop iteration', 'Stop script execution', 'Jump to another loop'],
    correctAnswer: 'Skip the rest of the loop iteration',
  },
  {
    question: 'What is the output of the following code: console.log(typeof undefined);',
    options: ['undefined', 'null', 'object', 'string'],
    correctAnswer: 'undefined',
  },
  {
    question: 'Which of the following methods is used to add an element to the beginning of an array in JavaScript?',
    options: ['push()', 'pop()', 'unshift()', 'shift()'],
    correctAnswer: 'unshift()',
  },
  {
    question: 'Which of the following is not a looping structure in JavaScript?',
    options: ['for', 'while', 'do-while', 'foreach'],
    correctAnswer: 'foreach',
  },
  {
    question: 'What is the output of the following code: console.log(null == undefined);',
    options: ['true', 'false', 'Error', 'undefined'],
    correctAnswer: 'true',
  },
  {
    question: 'Which of the following operators checks for strict equality in JavaScript?',
    options: ['==', '===', '!=', '!=='],
    correctAnswer: '===',
  },
  {
    question: 'What is the output of the following code: console.log([] == []);',
    options: ['true', 'false', 'undefined', 'Error'],
    correctAnswer: 'false',
  },
  {
    question: 'Which method is used to convert a string to lowercase in JavaScript?',
    options: ['toLowerCase()', 'toLower()', 'lowerCase()', 'lower()'],
    correctAnswer: 'toLowerCase()',
  },
  {
    question: 'What is the purpose of the `try...catch` block in JavaScript?',
    options: ['To handle errors', 'To define variables', 'To perform asynchronous operations', 'To loop through arrays'],
    correctAnswer: 'To handle errors',
  },
  {
    question: 'What is the output of the following code: console.log([] == "");',
    options: ['true', 'false', 'undefined', 'Error'],
    correctAnswer: 'true',
  },
  {
    question: 'Which of the following is a ternary operator in JavaScript?',
    options: ['?', '&&', '||', '??'],
    correctAnswer: '?',
  },
  {
    question: 'Which of the following is used to find the length of a string in JavaScript?',
    options: ['length()', 'size()', 'len()', 'length'],
    correctAnswer: 'length',
  },
  {
    question: 'What is the output of the following code: console.log(0 == false);',
    options: ['true', 'false', 'undefined', 'Error'],
    correctAnswer: 'true',
  },
  {
    question: 'Which method is used to remove the last element of an array in JavaScript?',
    options: ['pop()', 'push()', 'shift()', 'splice()'],
    correctAnswer: 'pop()',
  },
  {
    question: 'What is the output of the following code: console.log(null === undefined);',
    options: ['true', 'false', 'Error', 'undefined'],
    correctAnswer: 'false',
  },
  {
    question: 'Which of the following is not a valid JavaScript event?',
    options: ['onclick', 'onmouseover', 'onload', 'onhover'],
    correctAnswer: 'onhover',
  },
  {
    question: 'Which method can be used to combine two or more arrays in JavaScript?',
    options: ['concat()', 'merge()', 'join()', 'combine()'],
    correctAnswer: 'concat()',
  },
  {
    question: 'Which of the following methods is used to remove whitespace from the beginning and end of a string?',
    options: ['trim()', 'strip()', 'cut()', 'clean()'],
    correctAnswer: 'trim()',
  },
  {
    question: 'What does the `typeof` operator return for an undeclared variable?',
    options: ['undefined', 'null', 'object', 'Error'],
    correctAnswer: 'undefined',
  },
  {
    question: 'Which of the following is a way to create a new object in JavaScript?',
    options: ['Object.create()', 'Object.make()', 'Object.new()', 'Object.init()'],
    correctAnswer: 'Object.create()',
  },
  {
    question: 'What is the output of the following code: console.log([] + {});',
    options: ["'[object Object]'", "'[object Object]'", "''", "Error"],
    correctAnswer: "'[object Object]'",
  },
  {
    question: 'Which method is used to return a copy of a portion of an array?',
    options: ['slice()', 'splice()', 'copy()', 'part()'],
    correctAnswer: 'slice()',
  },
  {
    question: 'Which of the following is not a valid value for the `async` attribute in a script tag?',
    options: ['true', 'false', 'async', 'defer'],
    correctAnswer: 'async',
  },
];

export default questions;