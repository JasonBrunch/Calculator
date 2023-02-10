
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
    new CalcButton("number","8"),
    new CalcButton("number","9"),
    new CalcButton("operator","/"),
    new CalcButton("number","4"),
    new CalcButton("number","5"),
    new CalcButton("number","6")

    /*
    
    
    {type: "number", value: "4"},
    {type: "number", value: "5"},
    {type: "number", value: "6"},
    {type: "operator", value: "*"},
    {type: "number", value: "1"},
    {type: "number", value: "2"},
    {type: "number", value: "3"},
    {type: "operator", value: "-"},
    {type: "decimal", value: "."},
    {type: "number", value: "0"},
    {type: "equal", value: "="},
    {type: "operator", value: "+"}
    */


]
//SET THE BUTTON TO THE CORESPONDING CLASS
const btnClear = document.querySelector("#clearBtn");
btnClear.addEventListener("click", function(){
    console.log("CLICK CLICK");
    console.log(CalcBtnArray[0].type);
    console.log(CalcBtnArray[0].value);
    CalcBtnArray[0].activateBtn();

})


