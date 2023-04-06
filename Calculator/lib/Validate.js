const isNumber = (num) => {
    const maybeNumber = parseInt(num);
    const isNum = !isNaN(maybeNumber);
    return isNum;
};
const isOperator = (operator) => {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
};
export { isNumber, isOperator };
