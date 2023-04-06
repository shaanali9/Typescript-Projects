const isNumber = (num:any):boolean=>{
    const maybeNumber = parseInt(num);
    const isNum:boolean = !isNaN(maybeNumber);
    return isNum;
};

const isOperator = (operator:string):boolean=>{
    switch(operator)
    {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
};

export {isNumber,isOperator}