const quizArr = [
  {
    id: 1,
    question: "Which HTTP status code indicates that the server successfully processed the request, but is not returning any content?",
    options: {
      A: "200",
      B: "204",
      C: "301",
      D: "404",
    },
    answer: "B",
  },
  {
    id: 2,
    question: "Which of the following is NOT a valid JavaScript data type?",
    options: {
      A: "Undefined",
      B: "Boolean",
      C: "Float",
      D: "Object",
    },
    answer: "C",
  },
  {
    id: 3,
    question: "Which HTML attribute is used to define inline styles?",
    options: {
      A: "style",
      B: "class",
      C: "styless",
      D: "none",
    },
    answer: "A",
  },
  {
    id: 4,
    question: "Which of the following is used to define a grid container in CSS Grid Layout?",
    options: {
      A: "display: block;",
      B: "display: flex;",
      C: "display: grid;",
      D: "display: inline-grid",
    },
    answer: "C",
  },
  {
    id: 5,
    question: "How do you create a function in JavaScript?",
    options: {
      A: "function:myFunction()",
      B: "new.function(myFunction)",
      C: "function myFunction()",
      D: "create.function(myFunction)",
    },
    answer: "C",
  },
  {
    id: 6,
    question:
      "In CSS, what does the box-sizing: border-box; property do?",
    options: {
      A: " Sets only the padding to be included in the width and height",
      B: "Sets only the border to be included in the width and height",
      C: "Sets only the padding to be included in the width and height",
      D: "Sets the width and height to include padding and border",
    },
    answer: "A",
  },
  {
    id: 7,
    question: "Which attribute is used to specify that an input field must be filled out before submitting the form?",
    options: {
      A: "mandatory",
      B: "validate",
      C: "required",
      D: "need",
    },
    answer: "C",
  },
  {
    id: 8,
    question: "Which element is used to specify a list of pre-defined options for an <input> element in HTML5?",
    options: {
      A: "datalist",
      B: "select",
      C: "option",
      D: "choice",
    },
    answer: "A",
  },
  {
    id: 9,
    question:
      "Which CSS property is used to apply a shadow effect to text?",
    options: {
      A: "text-shadow",
      B: "box-shadow",
      C: "border-shadow",
      D: "shadow-text",
    },
    answer: "A",
  },
  {
    id: 10,
    question: "What is the difference between let and var?",
    options: {
      A: "let and var are same",
      B: "let has block scope and var has function scope",
      C: "var has block scope and let has function scope",
      D: "let is used to declare constant and var is used to declare variable",
    },
    answer: "B",
  },
  {
    id: 11,
    question: "Which CSS property is used to create space between the elements of a flex container?",
    options: {
      A: "gap",
      B: "flex-gap",
      C: "flex-space",
      D: "flex-between",
    },
    answer: "A",
  },
  {
    id: 12,
    question: "What is the difference between == and ===?",
    options: {
      A: "== checks for equality and === checks for identity",
      B: "== checks for identity and === checks for equality",
      C: "== and === checks for equality",
      D: "== and === checks for identity",
    },
    answer: "A",
  },
  {
    id: 13,
    question: "What is the correct way to check if a variable is an array?",
    options: {
      A: "Array.isArray(myArray)",
      B: "myArray instanceof Array",
      C: "myArray.isArray()",
      D: "typeof myArray === 'array'",
    },
    answer: "A",
  },
  {
    id: 14,
    question: "What is the correct way to declare a class in javascript?",
    options: {
      A: "class MyClass{}",
      B: "function MyClass(){}",
      C: "new MyClass(){}",
      D: "MyClass: function(){}",
    },
    answer: "A",
  },
  {
    id: 15,
    question: "What is the purpose of the alt attribute in an <img> tag?",
    options: {
      A: "To specify the image URL",
      B: "To provide alternative text for an image",
      C: "To define the image size",
      D: "To specify the image alignment",
    },
    answer: "B",
  },
  {
    id: 16,
    question:
      "What is the correct way to convert a string to a number in javascript?",
    options: {
      A: "parseInt(string)",
      B: "parseFloat(string)",
      C: "Number(string)",
      D: "string - 0",
    },
    answer: "C",
  },
  {
    id: 17,
    question: "Which HTML5 attribute is used to specify that an element should be visible only when it is in full-screen mode?",
    options: {
      A: "allowfullscreen",
      B: "allowfullscreen",
      C: "mozfullscreen",
      D: "webkitfullscreen",
    },
    answer: "A",
  },
  {
    id: 18,
    question: "What is the difference between null and undefined?",
    options: {
      A: "null and undefined are same",
      B: "null is an assignment value and undefined is a default value",
      C: "undefined is an assignment value and null is a default value",
      D: "null is an object and undefined is not an object",
    },
    answer: "B",
  },
  {
    id: 19,
    question:
      "Which of the following elements is used to create an interactive widget for drawing on a web page in HTML5?",
    options: {
      A: "draw",
      B: "svg",
      C: "paint",
      D: "canvas",
    },
    answer: "D",
  },
  {
    id: 20,
    question:
      "Which CSS property is used to specify the space between the border of an element and its content?",
    options: {
      A: "typeof myVariable === 'object'",
      B: "myVariable instanceof Object",
      C: "Object.isObject(myVariable)",
      D: "myVariable.constructor === Object",
    },
    answer: "D",
  },
];
