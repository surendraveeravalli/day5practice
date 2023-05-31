//ADD
var sum=(function(a,b) {
    return a+b;
  })(2,8);
  console.log(sum);


  //SUB

  var sub=(function(a,b) {
    return a-b;
  })(9, 3);
  console.log(sub);
  
  

// MUL

   var mul=(function(a, b) {
    return a*b;
  })(7,2);
  console.log(mul); 

   //DIV

   var division = (function(a, b) {
    return a / b;
  })(20, 5);
  
  console.log(division);


//EVEN NUMBERS

(function() {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8,];
  var evenNum = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNum.push(numbers[i]);
    }
  }
  console.log(evenNum);
})();


//6.....FINDING ODD

(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8,];
    const oddNum = [];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        oddNum.push(numbers[i]);
      }
    }
  
    console.log(oddNum);
  })();

  
  // DIV BY 5


  (function() {
    const numbers = [15,12,45,56,89,65,35,80];
    const div = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 === 0) {
          div.push(numbers[i]);
        }
      }
    
      console.log(div);
    })();