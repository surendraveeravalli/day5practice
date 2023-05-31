//ADD
function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  console.log(add(5)(3)); 


  // SUB

  function subtract(x) {
    return function(y) {
      return x - y;
    };
  }
  
  console.log(subtract(3)(5)); 

  

  // MUL

  function multiply(x) {
  return function(y) {
    return x * y;
  };
}

console.log(multiply(4)(6)); 



// DIV

function div(x) {
    return function(y) {
      return x / y;
    };
  }
  
  console.log(div(10)(5)); 