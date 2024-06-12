
function add(num1, num2) {
 let answer = num1 + num2
 return answer
}
function sub(num1, num2) {
 let answer = num1 - num2
 return answer
}
function mult(num1, num2) {
 let answer = num1 * num2
 return answer
}
function div(num1, num2) {
 let answer = num1 / num2
 return answer
}
function power(num1, num2) {
 let answer = num1 ** num2
 return answer
}
function mod(num1, num2) {
 let answer = num1 % num2
 return answer
}
function root(num1) {
 let answer = Math.sqrt(num1)
 return answer
}
function fact(num1) {
  factRes = num1 
  for (let i = 1; i < num1; i++){
    factRes = factRes * (num1 - i) 
  } 
  return factRes
}

function calculate(expression) {
 const tokens = expression.split(' ')
  if (tokens.length === 1) {
    alert(`Error: one input`)
    return
  }

  if (tokens.length > 3) {
    alert('Error: too many inputs')
    return
  }

    if(tokens[0] === `sqrt`) {
      operator = tokens[0]
      num = tokens[1] 
      num = Number(num)
      
      if(Number.isNaN(num)) {
        alert(`Error: input is not a number`)
        return
      }

      result = root(num)
      return result
    }
    if(tokens[0] === `!`) {
      operator = tokens[0]
      num = tokens[1] 
      num = Number(num)
      
      if(Number.isNaN(num)) {
        alert(`Error: input is not a number`)
        return
      }
      if(!Number.isInteger(num)) {
        alert(`Error: input is not an integer`)
        return
      }
      if(num < 0 ) {
        alert(`Error: input is not positive`)
        return
      }

      

      result = fact(num)
      return result
    }

    num1 = tokens[0] 
    operator = tokens[1] 
    num2 = tokens[2] 
    num1 = Number(num1)
    num2 = Number(num2)

      if(Number.isNaN(num1)) {
        alert(`Error: input is not a number`)
        return
      }

      if(Number.isNaN(num2)) {
        alert(`Error: input is not a number`)
        return
      }

      if(operator === `+`) {
        result = add(num1, num2)
        return result
      } 

      if(operator === `-`) {
        result = sub(num1, num2)
        return result
      }

      if(operator === `*`) {
        result = mult(num1, num2)
        return result
      }

      if(operator === `/`) {
        result = div(num1, num2)
        return result
      }

      if(operator === `^`) {
        result = power(num1, num2)
        return result
      }

      if(operator === `%`) {
        result = mod(num1, num2)
        return result
      } 
    else {
      alert(`Valid Formats: "num + num", "num - num", "num * num", "num / num", "num ^ num ", "num % num", "sqrt(num), ! num"`)
      return
    }
  }


/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
