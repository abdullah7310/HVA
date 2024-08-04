const input = require("readline-sync")
function greetDefault(name = "Guest") {
    return `Hello, ${name}!`;
  }
  const result = greetDefault();
  console.log(result);