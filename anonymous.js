//ADD
function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  console.log(add(5)(5)); 


  // SUB

  function sub(x) {
    return function(y) {
      return x - y;
    };
  }
  
  console.log(sub(8)(3)); 

  

  // MUL

  function mul(x) {
  return function(y) {
    return x * y;
  };
}

console.log(mul(6)(7)); 



// DIV

function div(x) {
    return function(y) {
      return x / y;
    };
  }
  
  console.log(div(60)(6)); 