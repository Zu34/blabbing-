let historybutton = document.getElementById('historybutton');
let history = document.getElementById('history');
let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let dis = document.getElementById('answer');
/*let displayCleared = false;
let num1 = 0; // the first number entered
let num2 = 0; // the second number entered */
let screenTotal = "";

function showHistory() {
    let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    let len = calcHistory.length;

    history.innerHTML = '';

    bar1.style.display = 'block';
    bar2.style.display = 'block';
    if (len === 0) {
        let historyItem = document.createElement('div');
        historyItem.innerHTML = "There's no history yet.";
        historyItem.className = 'historyelement his';
        historyItem.style.fontSize = '25px';
        history.appendChild(historyItem);
    } else {
        for (let index = len-1; index >= 0; index--) {
            const element = calcHistory[index];
            let historyItem = document.createElement('div');
            historyItem.className = 'historyelement';
            historyItem.innerHTML = `${element.lastScreenValue} = <span style="color: ${element.result < 0 ? 'red' : 'green'}">${element.result}</span>`;//Actually I have added this that makes red color in the history section .............
            history.appendChild(historyItem);
            if (index > 0) history.appendChild(document.createElement('hr'));
        }
    }

    history.style.display = 'block';
}

historybutton.addEventListener('click', showHistory);

function clearAll(){
    dis.value = ''; 
    screenTotal = "";
};
   /* carryOver = false;
    displayCleared = false;
    num1 = 0;
    num2 = 0;
    runningTotal = 0;
    screenTotal = "";
    display.innerHTML = "0";
}*/
   /* screenTotal = num1;
    document.getElementById('answer').innerHTML = "0";
    displayCleared = true;
  }

  function pressNum(num) { // when you press a number key
    if (displayCleared) { // has the "CE" button been pressed?
      screenTotal = num; // then make screenTotal = new entry
      displayCleared = false; // now forget about it
    } else {
      screenTotal = screenTotal + num; // otherwise, add the new entry to the end of screenTotal
    }
    display.innerHTML = screenTotal;
    if (carryOver) {
      num1 = carryNum;
      num2 = screenTotal + num;
      display.innerHTML = screenTotal;
      carryOver = false;
    }
  */

function hide(){
    history.style.display = 'none';
    bar1.style.display = 'none';
    bar2.style.display = 'none';
}
/*function deleteLastEntry() {
    let value = document.getElementById("answer").value;
    document.getElementById("answer").value = value.substr(0, value.length - 1); 
   /* let calcHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    if (calcHistory.length > 0) {
      calcHistory.pop(); 
      localStorage.setItem("calcHistory", JSON.stringify(calcHistory));
      showHistory(); // It open each time when u click on CE if u dont want then u can remove it ....
    }*/
  
 

bar1.addEventListener('click', hide);
bar2.addEventListener('click', hide);

