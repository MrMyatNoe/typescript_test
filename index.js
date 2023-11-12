var approximate = 100;
var fill = "0";
function squareTechniqueOne(input) {
    var squareTemp = 0;
    var result = "0";
    if (input >= 76 && input < 100) {
        squareTemp = approximate - input;
        var calculate = squareTemp * squareTemp;
        var substract = input - squareTemp;
        result = "".concat(substract).concat(calculate);
        if (result.length == 3) {
            result = "".concat(substract).concat(fill).concat(calculate);
        }
        var first = result.substring(0, 2);
        if (result.length == 5) {
            var last = result.substring(3, 5);
            var charNumber = result.charAt(2);
            var temp = Number(first) + Number(charNumber);
            console.log("substring result is ", first, last, charNumber, temp);
            result = "".concat(temp).concat(last);
        }
    }
    else if (input >= 100 && input <= 125) {
        squareTemp = input - approximate;
        var calculate = squareTemp * squareTemp;
        var plus = squareTemp + input;
        result = "".concat(plus).concat(calculate);
        var first = result.substring(0, 3);
        if (result.length == 6) {
            var last = result.substring(4, 6);
            var charNumber = result.charAt(3);
            var temp = Number(first) + Number(charNumber);
            result = "".concat(temp).concat(last);
        }
        if (result.length == 4) {
            var last = result.substring(3, 4);
            result = "".concat(first).concat(fill).concat(last);
        }
    }
    return result;
}
console.log(squareTechniqueOne(100));
