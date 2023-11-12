const approximate: number = 100;
const fill: string = "0";

function squareTechniqueOne(input: number): string {
  let squareTemp: number = 0;
  let result: string = "0";
  if (input >= 76 && input < 100) {
    squareTemp = approximate - input;
    const calculate = squareTemp * squareTemp;
    const substract = input - squareTemp;
    result = `${substract}${calculate}`;
    if (result.length == 3) {
      result = `${substract}${fill}${calculate}`;
    }

    const first: string = result.substring(0, 2);
    if (result.length == 5) {
      const last: string = result.substring(3, 5);
      const charNumber: string = result.charAt(2);
      const temp = Number(first) + Number(charNumber);
      console.log("substring result is ", first, last, charNumber, temp);
      result = `${temp}${last}`;
    }
  } else if (input >= 100 && input <= 125) {
    squareTemp = input - approximate;

    const calculate = squareTemp * squareTemp;
    const plus = squareTemp + input;
    result = `${plus}${calculate}`;
    const first: string = result.substring(0, 3);

    if (result.length == 6) {
      const last: string = result.substring(4, 6);
      const charNumber: string = result.charAt(3);
      const temp = Number(first) + Number(charNumber);
      result = `${temp}${last}`;
    }

    if (result.length == 4) {
      const last: string = result.substring(3, 4);
      result = `${first}${fill}${last}`;
    }
  }
  return result;
}

export { squareTechniqueOne };
