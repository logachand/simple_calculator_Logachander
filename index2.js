// let output=document.getElementById("output")


// function display(num){
//     output.value+=num;
// }

// function check(){
//     var res = [];

// 		if(document.getElementById("output").value.includes("+")){
// 		res = document.getElementById("output").value.split('+');
//         console.log(res);
// 		return parseInt(res[0]) + parseInt(res[1]);
// 		}
		
// 		else if(document.getElementById("output").value.includes("-")){
// 		res = document.getElementById("output").value.split('-');
//         console.log(res);
// 		return parseInt(res[0]) - parseInt(res[1]);
// 		}
		
// 		else if(document.getElementById("output").value.includes("/")){
// 		res = document.getElementById("output").value.split('/');
//         console.log(res);
// 		return parseInt(res[0]) / parseInt(res[1]);
// 		}
		
// 		else if(document.getElementById("output").value.includes("*")){
// 		res = document.getElementById("output").value.split('*');
//         console.log(res);
// 		return parseInt(res[0]) * parseInt(res[1]);
// 		}
		
// }
// function calculator(){
//     try{
//         var a=check()
// 		// var temp = a ;
// 		// console.log(temp)
// 		localStorage.setItem("Calculation of the Every Output :",a)	
//         document.getElementById('output').value=a;
		
//     }
//     catch{
//         alert("Invalid Input")
//     }
// }

// let store=[]
// store.localStorage.setItem("new",a)

// function Clear(){
//     output.value = "";
// }
   
// function del(){
//     output.value=output.value.slice(0,-1);
// }



let output = document.getElementById("output");

function display(num) {
  output.value += num;
}

function calculator() {
  try {
    const expression = output.value;
    const result = calculateExpression(expression);
    output.value = result;
    localStorage.setItem("Answersss", result); //local storage
    sessionStorage.setItem("Answers :",result); //session Storage
  } catch (error) {
    alert("Invalid Input");
  }
}

function calculateExpression(expression) {
  const operators = ['+', '-', '*', '/'];
  const numbers = expression.split(/[\+\-\*\/]/);
  console.log(numbers);  // it gives number with string type and remove all operators in expression

  // Parse the numbers and operators
  const parsedNumbers = numbers.map(Number);
  console.log(parsedNumbers); // it gives numbers only from the expression
  const parsedOperators = expression.split('').filter(char => operators.includes(char));   // it returns oprators only
  console.log(parsedOperators);


  // Calculate based on BODMAS rule
  while (parsedOperators.includes('*') || parsedOperators.includes('/')) {
    const index = parsedOperators.findIndex(op => op === '*' || op === '/');
    const operator = parsedOperators[index];
    const prevNumber = parsedNumbers[index];
    const nextNumber = parsedNumbers[index + 1];

    switch (operator) {
      case '*':
        parsedNumbers.splice(index, 2, prevNumber * nextNumber);
        break;
      case '/':
        if (nextNumber === 0) {
          throw new Error('Division by zero');
        }
        parsedNumbers.splice(index, 2, prevNumber / nextNumber);
        break;
    }

    parsedOperators.splice(index, 1);
  }

  while (parsedOperators.includes('+') || parsedOperators.includes('-')) {
    const index = parsedOperators.findIndex(op => op === '+' || op === '-');
    const operator = parsedOperators[index];
    const prevNumber = parsedNumbers[index];
    const nextNumber = parsedNumbers[index + 1];

    switch (operator) {
      case '+':
        parsedNumbers.splice(index, 2, prevNumber + nextNumber);
        break;
      case '-':
        parsedNumbers.splice(index, 2, prevNumber - nextNumber);
        break;
    }

    parsedOperators.splice(index, 1);
  }

  return parsedNumbers[0];
}

function Clear() {
  output.value = "";
}

function del() {
  output.value = output.value.slice(0, -1);
}


