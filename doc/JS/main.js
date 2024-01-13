function Create(question, choices, answer) {
  // this class generate all the inst in jq mechanizmm ;)
  var obj = {};
  obj.question = question;
  obj.choices = choices;
  obj.answer = answer;
  obj.add = add;
  return obj;
}
var HTMLquestions = [];
var CSSquestions = [];
var JSquestions = [];

function add(data, obj) {
  data.push(obj);
}

var inst1 = Create(
  "HTML is what type of language ?",
  [
    "Scripting Language",
    "Markup Language",
    "Programming Language",
    "Network Protocol",
  ],
  2
);
var inst2 = Create(
  "HTML uses :",
  [
    "User defined tags",
    "Pre-specified tags",
    "Fixed tags defined by the language",
    "Tags only for linking",
  ],
  3
);
var inst3 = Create(
  "The year in which HTML was first proposed _______.",
  ["1990", "1980", "2000", "1995"],
  1
);

add(HTMLquestions, inst1);
add(HTMLquestions, inst2);
add(HTMLquestions, inst3);

inst4 = Create(
  "If we want define style for an unique element, then which css selector will we use ?",
  ["Id", "text", "class", "name"],
  1
);

inst5 = Create(
  "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
  ["margin", "clear", "float", "padding"],
  2
);
inst6 = Create(
  "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack ?",
  ["d-inex", "s-index", "x-index", "z-index"],
  4
);

add(CSSquestions, inst4);
add(CSSquestions, inst5);
add(CSSquestions, inst6);

inst7 = Create(
  "Which of the following is true about variable naming conventions in JavaScript?",
  [
    "JavaScript variable names must begin with a letter or the underscore character.",
    "JavaScript variable names are case sensitive.",
    "Both of the above.",
    " None of the above.",
  ],
  3
);

inst8 = Create(
  " Which of the following is a server-side Java Script object?",
  ["Function", "File", "FilleUpload", "Data"],
  2
);
inst9 = Create(
  "Java script can be used for Storing the form's contents to a database file on the server",
  ["False", "True", "both", "none"],
  1
);

add(JSquestions, inst7);
add(JSquestions, inst8);
add(JSquestions, inst9);
