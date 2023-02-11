
class CalcButton{
    constructor(type, value){
        this.type = type;
        this.value = value;
    }

    activateBtn(){
        console.log("BUTTON ACTIVATED");
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
        console.log("Number Function Firing");
    }
    operatorFunction(){
        console.log("Operator Function Firing");
    }
    clearFunction(){
        console.log("ClearFunction Firing");
    }
    equalFunction(){
        console.log("Equal Function Firing");
    }
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
    new CalcButton("operator","="),
    new CalcButton("operator","+")
]
//SET THE BUTTON TO THE CORESPONDING CLASS
const btnClear = document.querySelector("#clearBtn");
btnClear.addEventListener("click", function(){
    console.log(CalcBtnArray[0].type);
    console.log(CalcBtnArray[0].value);
    CalcBtnArray[0].activateBtn();
})

const btnDelete = document.querySelector("#deleteBtn");
btnDelete.addEventListener("click", function(){
    console.log(CalcBtnArray[1].type);
    console.log(CalcBtnArray[1].value);
    CalcBtnArray[1].activateBtn();
})

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function(){
    console.log(CalcBtnArray[2].type);
    console.log(CalcBtnArray[2].value);
    CalcBtnArray[2].activateBtn();
})

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", function(){
    console.log(CalcBtnArray[3].type);
    console.log(CalcBtnArray[3].value);
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
    console.log(CalcBtnArray[10].type);
    console.log(CalcBtnArray[10].value);
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