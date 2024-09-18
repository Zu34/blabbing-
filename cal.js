
/*function log(message) {
  console.log(message);
}*/

  let flag = 0;
  
  function isNumber(char) {
    return /^\d$/.test(char);
  }
  
  /*function updateDisplay() {
    screen.value = screenValue;
}*/

 

  document.getElementById("answer").readOnly = true;
  let screen = document.getElementById("answer");
  buttons = document.querySelectorAll("button");
  let screenValue = "";
  let lastScreenValue = "";
  let maxItems = 9;
  let isSign = true;
  
/*/ Function to handle trigonometric operations
function trigOperation(operation) {
  // Get the value from the screen
  let inputValue = parseFloat(screen.value);
  console.log("Input value:", inputValue); // Log the input value
  
  // Check if the input value is a valid number
  if (!isNaN(inputValue)) {
      // Convert degrees to radians if the operation is sin, cos, or tan
      if (operation !== 'sin' && operation !== 'cos' && operation !== 'tan') {
          inputValue = inputValue * (Math.PI / 180);
          radians = degrees * (Math.PI / 180);
          console.log("Input value in radians:", inputValue); // Log the input value in radians
      }

      // Perform the specified trigonometric operation
      let result;
      switch (operation) {
          case 'sin':
              result = Math.sin(inputValue);
              break;
          case 'cos':
              result = Math.cos(inputValue);
              break;
          case 'tan':
              result = Math.tan(inputValue);
              break;
          default:
              console.error("Invalid operation");
              return;
      }

      // Update the screen value with the result
      screen.value = result;
      console.log(`${operation.toUpperCase()} of ${inputValue} is ${result}`);
  } else {
      // Display an error message or handle invalid input
      console.error("Invalid input value");
  }
}*/

/*// Event listeners for trigonometric buttons
document.getElementById("sin").addEventListener("click", function() {
  trigOperation('sin');
});

document.getElementById("cos").addEventListener("click", function() {
  trigOperation('cos');
});

document.getElementById("tan").addEventListener("click", function() {
  trigOperation('tan');
});*/


  for (item of buttons) {
    item.addEventListener("click", (e) => {
      buttonText = e.target.innerText;
      if (buttonText == "X" && !isSign) {
        if (flag == 1) {
          flag = 0;
        }
        buttonText = "*";
            isSign = true;
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "AC") {
            if (flag == 1) {
                flag = 0;
            }
            screenValue = "";
            screen.value = screenValue;
            screen.classList.remove("negative"); // Remove negative class
            isSign = true;
        } else if (buttonText == "=") {
            checkForBracketMulti();
            if (parseFloat(screen.value) < 0) {
                screen.classList.add("negative");
            } else {
                screen.classList.remove("negative");
            }
      } else if(buttonText=="(" || buttonText==")") {
        if(flag==1){
          flag =0;
        }
        screenValue+=buttonText;
        screen.value=screenValue;
      } 
      else if (isNumber(buttonText)) {
        if (flag == 1) {
          screenValue = buttonText;
          flag = 0;
        } else {
          screenValue += buttonText;
        }
        screen.value = screenValue;
        isSign = false;
        screen.classList.remove("negative"); // Remove negative class
      } else {
        if (flag == 1) {
          flag = 0;
        }
        if (!isSign) {
          screenValue = screen.value + buttonText;
          screen.value = screenValue;
          isSign = true;
        }
        screen.classList.remove("negative"); // Remove negative class
      }
    });
  }


 document.getElementById("pi").addEventListener("click", function() {

    // Append the value of pi to the calculator's display
    screenValue += Math.PI;
    screen.value = screenValue;
    // Set isSign to false since pi is a number
    isSign = false;
}); 

  

document.getElementById("sqr").addEventListener("click", function() {
  // Get the value from the screen and calculate the square root
  let result = Math.sqrt(parseFloat(screen.value));
  // Update the screen value with the result
  screen.value = result;
});

/*document.getElementById("sin").addEventListener("click", function() {
  // Get the value from the screen and calculate the sine
  let result = Math.sin(parseFloat(screen.value));
  // Update the screen value with the result
  screen.value = result;
});*/

//radians = degrees * (Math.PI / 180);

/*document.getElementById("sin").addEventListener("click", function() {
  // Get the value from the screen
  let inputValue = parseFloat(screen.value);
  
  // Check if the input value is a valid number
  if (!isNaN(inputValue)) {
      // Convert degrees to radians
      let radians = inputValue * (Math.PI / 180); // Conversion here
      // Calculate the sine
      let result = Math.sin(radians);
      // Update the screen value with the result
      screen.value = result;
      console.log(`sin of ${inputValue} degrees is ${result}`);
  } else {
      // Display an error message or handle invalid input
      console.error("Invalid input value");
  }
});*/

/*// Function to compute the logarithm of a given value
function computeLogarithm(value) {
  // Check if the value is a valid number and greater than 0
  if (!isNaN(value) && value > 0) {
      return Math.log(value);
  } else {
      return "Invalid input"; // Return an error message for invalid input
  }
}

// Event listener for the log button
document.getElementById("log").addEventListener("click", function() {
  // Get the value from the screen
  let inputValue = parseFloat(screen.value);
  // Compute the logarithm of the input value
  let result = computeLogarithm(inputValue);
  // Display the result on the screen
  screen.value = result;
});

// Function to log messages along with the current calculator state
function logCalculator(message) {
  console.log(`[Calculator Log] ${message}`);
  console.log(`[Calculator State] Screen Value: ${screen.value}, Flag: ${flag}, Is Sign: ${isSign}, Screen Value: ${screenValue}`);
}*/



  document.addEventListener("keydown", function (event) {
    // Check if the pressed key is the backspace key
    if (event.key === "Backspace") {
        deleteLastEntry();
    }
    // Check if the pressed key is the enter key
    else if (event.key === "Enter") {
        // Perform calculation similar to when "=" button is clicked
        checkForBracketMulti();
        if (parseFloat(screen.value) < 0) {
            screen.classList.add("negative");
        } else {
            screen.classList.remove("negative");
        }
        flag = 1; // Reset the flag
    }
});

function deleteLastEntry() {
    let value = document.getElementById("answer").value;
    document.getElementById("answer").value = value.substr(0, value.length - 1); 
}
  
window.onerror = function (message, source, lineno, colno, error) {
  // Check if the error message indicates a trigonometric function error
  if (message.includes("Math.sin") || message.includes("Math.cos") || message.includes("Math.tan")) {
      // Handle trigonometric function errors separately
      alert("Error occurred during trigonometric operation. Please check your input.");
  } else {
      // Handle other types of errors
      alert("An error occurred. Please input a valid expression.");
  }

  // Clear the screen and remove negative class
  screenValue = "";
  screen.value = screenValue;
  screen.classList.remove("negative");
  console.clear(); // Clear console if needed

  // Prevent the default browser error handling
  return true;
};




 /* window.onerror = function () {
    alert("PLEASE INPUT VALID EXPRESSION");
    screenValue = "";
    screen.value = screenValue;
    screen.classList.remove("negative"); // Remove negative class
    console.clear();
  };
  */
  // ... (same code as before)
  
  function checkForBracketMulti() {
    // ... (same code as before)
  
    if (eval(screenValue) !== undefined) {
      screen.value = eval(screenValue);
      lastScreenValue = screenValue;
      screenValue = screen.value;
      if (parseFloat(screen.value) < 0) {
        screen.classList.add("negative");
      } else {
        screen.classList.remove("negative");
      }
      // ... (same code as before)
    }
    flag = 1;
  }
  
  

  /*document.getElementById("sin").addEventListener("click", function() {
    // Get the value from the screen and calculate the sine
    let result = Math.sin(parseFloat(screen.value));
    // Update the screen value with the result
    screen.value = result;
}); */

/*document.getElementById("sin").addEventListener("click", function() {
  // Get the value from the screen
  let inputValue = parseFloat(screen.value);
  
  // Check if the input value is valid
  if (!isNaN(inputValue)) {
      // Calculate the sine and update the screen value with the result
      let result = Math.sin(inputValue);
      screen.value = result;
  } else {
      // If the input value is not valid, display an error message
      screen.value = "Error: Invalid input";
  }
});*/


/*// Event listener for the power button
document.getElementById("power").addEventListener("click", function() {
  // Get the value from the screen
  let inputValue = parseFloat(screen.value);
  
  // Prompt the user to enter the power
  let power = prompt("Enter the power:");

  // Convert the power to a number
  power = parseFloat(power);

  // Check if both the input value and power are valid numbers
  if (!isNaN(inputValue) && !isNaN(power)) {
      // Calculate the power
      let result = Math.pow(inputValue, power);
      // Update the screen value with the result
      screen.value = result;
  } else {
      // If either the input value or power is not a valid number, display an error message
      screen.value = "Error: Invalid input";
  }
});*/



// Event listener for the power button
document.getElementById("power").addEventListener("click", function() {
  // Get the value from the screen
  let inputValue = parseFloat(screen.value);

  // Check if the input value is a valid number
  if (!isNaN(inputValue)) {
      // Set the screen value to indicate that the user should enter the power
      screen.value = "Enter the power:";
  } else {
      // If the input value is not a valid number, display an error message
      screen.value = "Error: Invalid input";
  }
});
// Event listener for the input event on the answer screen
document.getElementById("answer").addEventListener("input", function() {
  // Get the entered power from the screen and convert it to a number
  let power = parseFloat(screen.value);

  // Check if the entered power is a valid number
  if (!isNaN(power)) {
      // Get the input value from the screen
      let inputValue = parseFloat(screen.value);

      // Calculate the power
      let result = Math.pow(inputValue, power);

      // Update the screen value with the result
      screen.value = result;
  } else {
      // If the entered power is not a valid number, display an error message
      screen.value = "Error: Invalid power";
  }
});

/*function calculate() {
    // Your existing calculate function code here...
    
    // Integration of trigonometric functions array
    for (i = 0; i < crProcArray.length; i++) {
        const A = crProcArray[i]; // Get the current function
        
        // Check if the function is one of the trigonometric functions
        if (trigFunctions.includes(A)) {
            if (!(i + 1 < crProcArray.length)) {
                return "Error"; // Not enough arguments
            }
            
            const B = parseFloat(crProcArray[i + 1]); // Get the argument
            
            if (isNaN(B)) {
                return "Error"; // Argument is not a valid number
            }
            
            // Perform trigonometric operation based on the function
            if (A === "sin") {
                // Calculate sine
                crProcArray[i] = Math.sin(B);
            } else if (A === "cos") {
                // Calculate cosine
                crProcArray[i] = Math.cos(B);
            } else if (A === "tan") {
                // Calculate tangent
                crProcArray[i] = Math.tan(B);
            }
            
            // Remove the argument from the array
            crProcArray.splice(i + 1, 1);
        }
    }
}*/

  