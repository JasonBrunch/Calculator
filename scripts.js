let slot1 = undefined;
let slot2 = undefined;
let operatorSlot = undefined;


const slot1Butt = document.querySelector("#slot1butt");
const slot2butt = document.querySelector("#slot2butt");
const opSlotButt = document.querySelector("#slot3butt");

slot1Butt.addEventListener("click", function(){
    testFunction();
})

function testFunction()
{
    
    slot1Butt.innerHTML = "Slot1:" + slot1;
    slot2butt.innerHTML = "Slot2: " + slot2;
    opSlotButt.innerHTML = "OpSlot: " + operatorSlot;
}





class CalcButton{
    constructor(type, value){
        this.type = type;
        this.value = value;
    }

    activateBtn(){
        
        if(this.type == "number")
        {
            this.numberFunction();
        }
        if(this.type == "operator"){
            this.operatorFunction();
        }
        if(this.type == "clearBtn"){
            this.clearFunction();
        }
        if(this.type == "equal"){
            this.equalFunction();
        }
        if(this.type == "decimal"){
            console.log("DECIMAL PUSHED");
        }
    }
    numberFunction(){
        
        //IF PREVIOUS NUMBER IS NOT AN OPERATOR//STORE NUMBER IN SLOT
        
        if(slot1 == undefined)
        {
            
            slot1 = this.value;
            console.log("NUMBER FUNCTION - SLOT1 IS undefined - SET TO " + this.value);
            displayNumber(this.value);
        }
        //IF OPERATOR SLOT IS TAKEN DO EQUATION OF SLOT1 NUMBER - OPERATOR - SLOT2 NUMBER = TOTAL
        else if(slot1 != "undefined")
        {
            
            //CHECK IS OPERATOR EXISTS OR ADDING 2 NUMBERS TOGETHER - OPERATOR DOES NOT EXIST
            if(operatorSlot == "undefined")
            {
                console.log("Slot1 is not undefinde and operator slot is undefined");
                slot1 = slot1 + this.value;
                
                //DISPLAY WHAT THE OPERATOR RETURNS
                displayNumber(slot1);
                //STORE IN SLOT 1 AND CLEAR SLOT 2 AND OPERATOR
                
            }
            //OPERATOR DOES EXIST
            else if(operatorSlot != "undefined")
            {
          
                
                slot2 = this.value;
                let displayString = slot1 + operatorSlot + slot2;
                displayNumber(displayString);
            }
        }
    }
    
    operatorFunction(){
    
        //IF OPERATOR SLOT TAKEN DO NOTHING
        if(operatorSlot != undefined)
        {
            return;
        }
        if(operatorSlot == undefined)
        {
            operatorSlot = this.value;
            let specialDisplayString = slot1 + this.value;
            displayNumber(specialDisplayString);
            return;
        }




    }
    clearFunction(){
        console.log("ClearFunction Firing");
        //CLEAR SLOT 1, 2 AND OPERATOR SLOT
        slot1 = undefined;
        slot2 = undefined;
        operatorSlot = undefined;
        displayNumber("");
        
    }
    equalFunction(){
        console.log("Equal Function Firing");
        if(slot1 != undefined && slot2 != undefined && operatorSlot != undefined)
        {
            console.log("EQUAL FUNCTION OPERATING");
            let operation = operate(operatorSlot,slot1,slot2);
            slot1 = operation;
            slot2 = undefined;
            operatorSlot = undefined;
            displayNumber(operation);

        }
        
    }
}
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
      
        return add(a, b)
      case '−':
        return substract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
}
function add(a, b) {
    return a + b
  }
  
  function substract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }
  


function displayNumber(stringy){
    //GET THE DISPLAY AND FILL IT WITH THE NUMBER
    const screen = document.querySelector("#screen");
    screen.innerHTML = stringy;
   
}


const CalcBtnArray = [
    new CalcButton("clearBtn","CLEAR"),
    new CalcButton("deleteBtn","DELETE"),
    new CalcButton("number","7"),
    new CalcButton("number","8"),
    new CalcButton("number","9"),
    new CalcButton("operator","/"),
    new CalcButton("number","4"),
    new CalcButton("number","5"),
    new CalcButton("number","6"),
    new CalcButton("operator","*"),
    new CalcButton("number","1"),
    new CalcButton("number","2"),
    new CalcButton("number","3"),
    new CalcButton("operator","-"),
    new CalcButton("decimal","."),
    new CalcButton("number","0"),
    new CalcButton("equal","="),
    new CalcButton("operator","+")
]
//SET THE BUTTON TO THE CORESPONDING CLASS
const btnClear = document.querySelector("#clearBtn");
btnClear.addEventListener("click", function(){
  
    CalcBtnArray[0].activateBtn();
})

const btnDelete = document.querySelector("#deleteBtn");
btnDelete.addEventListener("click", function(){
 
    CalcBtnArray[1].activateBtn();
})

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function(){
  
    CalcBtnArray[2].activateBtn();
})

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", function(){

    CalcBtnArray[3].activateBtn();
})

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", function(){
    console.log(CalcBtnArray[4].type);
    console.log(CalcBtnArray[4].value);
    CalcBtnArray[4].activateBtn();
})
const btnDivide = document.querySelector("#btnSlash");
btnDivide.addEventListener("click", function(){
    console.log(CalcBtnArray[5].type);
    console.log(CalcBtnArray[5].value);
    CalcBtnArray[5].activateBtn();
})

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function(){
    console.log(CalcBtnArray[6].type);
    console.log(CalcBtnArray[6].value);
    CalcBtnArray[6].activateBtn();
})

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function(){
    console.log(CalcBtnArray[7].type);
    console.log(CalcBtnArray[7].value);
    CalcBtnArray[7].activateBtn();
})

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function(){
    console.log(CalcBtnArray[8].type);
    console.log(CalcBtnArray[8].value);
    CalcBtnArray[8].activateBtn();
})

const btnX = document.querySelector("#btnx");
btnX.addEventListener("click", function(){
    console.log(CalcBtnArray[9].type);
    console.log(CalcBtnArray[9].value);
    CalcBtnArray[9].activateBtn();
})

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function(){

    CalcBtnArray[10].activateBtn();
})

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function(){
    console.log(CalcBtnArray[11].type);
    console.log(CalcBtnArray[11].value);
    CalcBtnArray[11].activateBtn();
})

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function(){
    console.log(CalcBtnArray[12].type);
    console.log(CalcBtnArray[12].value);
    CalcBtnArray[12].activateBtn();
})

const btnMinus = document.querySelector("#btn-");
btnMinus.addEventListener("click", function(){
    console.log(CalcBtnArray[13].type);
    console.log(CalcBtnArray[13].value);
    CalcBtnArray[13].activateBtn();
})

const btnDecimal = document.querySelector("#btnDecimal");
btnDecimal.addEventListener("click", function(){
    console.log(CalcBtnArray[14].type);
    console.log(CalcBtnArray[14].value);
    CalcBtnArray[14].activateBtn();
})

const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", function(){
    console.log(CalcBtnArray[15].type);
    console.log(CalcBtnArray[15].value);
    CalcBtnArray[15].activateBtn();
})

const btnEquals = document.querySelector("#btnEquals");
btnEquals.addEventListener("click", function(){
    console.log(CalcBtnArray[16].type);
    console.log(CalcBtnArray[16].value);
    CalcBtnArray[16].activateBtn();
})

const btnPlus = document.querySelector("#btnPlus");
btnPlus.addEventListener("click", function(){
    console.log(CalcBtnArray[17].type);
    console.log(CalcBtnArray[17].value);
    CalcBtnArray[17].activateBtn();
})


/* STOLLEN CODE
function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }

  */