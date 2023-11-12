const oneHundred: number = 100;
const fill: string = "0";
const five: number = 5;
const ten: number = 10;

function square(input: number): string {
  let result: string = "";
  if (input % ten === five) {
    result = squareByFive(input);
  } else if (input < 50) {
    result = squareTechniqueFour(input);
  } else if (input >= 50 && input < 75) {
    result = squareTechniqueThree(input);
  } else if (input >= 76 && input < oneHundred) {
    result = squareTechniqueOne(input);
  } else if (input >= oneHundred && input <= 125) {
    result = squareTechniqueTwo(input);
  }
  return result;
}

function squareTechniqueOne(input: number): string {
  let squareTemp: number = 0;
  let result: string = "0";
  squareTemp = oneHundred - input;
  const calculate = squareTemp * squareTemp;
  const substract = input - squareTemp;
  result = `${substract}${calculate}`;
  if (result.length == 3) {
    result = `${substract}${fill}${calculate}`;
  }

  const first: string = result.substring(0, 2);
  if (result.length === five) {
    const last: string = result.substring(3, 5);
    const charNumber: string = result.charAt(2);
    const temp = Number(first) + Number(charNumber);
    console.log("substring result is ", first, last, charNumber, temp);
    result = `${temp}${last}`;
  }
  return result;
}

function squareTechniqueTwo(input: number): string {
  let squareTemp: number = 0;
  let result: string = "0";
  squareTemp = input - oneHundred;

  const calculate = squareTemp * squareTemp;
  const plus = squareTemp + input;
  result = `${plus}${calculate}`;
  const first: string = result.substring(0, 3);

  if (result.length === 6) {
    const last: string = result.substring(4, 6);
    const charNumber: string = result.charAt(3);
    const temp = Number(first) + Number(charNumber);
    result = `${temp}${last}`;
  }

  if (result.length == 4) {
    const last: string = result.substring(3, 4);
    result = `${first}${fill}${last}`;
  }
  return result;
}

function squareByFive(input: number): string {
  let squareByFive: number = five * five;
  let dividend: number = Math.floor(input / ten);
  console.log("square by five ", dividend);
  const first = dividend * ++dividend;
  return `${first}${squareByFive}`;
}

function squareTechniqueThree(input: number): string {
  const temp = input - 50;
  let first = 25 + temp;
  const second: string = String(temp * temp);
  let result = "";
  console.log("square by three ", input);
  const realSecond = second.charAt(0);
  if (second.length === 1) {
    result = `${first}${fill}${realSecond}`;
  }
  if (second.length === 3) {
    const returnSecond = second.substring(1, 3);
    const returnFirst = first + Number(realSecond);
    result = `${returnFirst}${returnSecond}`;
  }
  return result;
}

function squareTechniqueFour(input: number): string {
  const temp = 50 - input;
  const first = 25 - temp;
  const second: string = String(temp * temp);
  console.log("square by three ", input);
  return second.length === 1
    ? `${first}${fill}${second.charAt(0)}`
    : `${first}${second}`;
}

export { square };
