// ADD

function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var ad = add(4);
  console.log(ad(2)); 

  
  //SUB

  function sub(x) {
    return function(y) {
      return x - y;
    };
  }
  
  var minus = sub(3);
  console.log(minus(5));


//MUL



function multi(x) {
return function(y) {
  return x * y;
};
}

var mul = multi(5);
console.log(mul(3)); 


//DIV

function div(x) {
return function(y) {
  return x / y;
};
}

var divtwo = div(66);
console.log(divtwo(6));
