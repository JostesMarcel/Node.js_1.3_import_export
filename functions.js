function calc(par1, par2, par3) {
    var number1 = par1;
    var operator;
    var number2;
    if (typeof par2 === 'string') {
        operator = par2;
    } else {
        number2 = par2;
        operator = par3;
    }
    if (typeof operator === "undefined") {
        return "wrong data provided"
        } else {
        if (operator == "+") {
        return number1 + (number2 || 0);
        } else if (operator == "-") {
        return number1 - (number2 || 0);
        } else if (operator == "*") {
        return number1 * (typeof number2 === 'undefined' ? 1 : 0);
        } else if (operator == "/") {
        return number1 / (typeof number2 === 'undefined' ? 1 : 0);
        }
    }
}

module.exports = {calc}