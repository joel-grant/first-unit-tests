// functions.js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function sayHello(name){
    if(name != 'Will') {
        return "Hi there " + name + "!";
    } else {
        return "No more testing Will!";
    }
}

function buildCar(color, type) {
    if (color === undefined && type === undefined) {
        return {}
    }
    
    return {
        color: color,
        type: type
    }
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar
}