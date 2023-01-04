const calculator = {
    plus: function (a, b){
        return a + b;
    },
    minus: function (a, b){
        return a - b;
    },
    mul: function (a, b){
        return a ** b;
    },
    div: function (a, b){
        return a / b;
    },
};

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);
const mulResult = calculator.mul(10, minusResult);
const divResult = calculator.div();

console.log(plusResult);
console.log(minusResult);

