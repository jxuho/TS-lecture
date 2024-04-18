function add(n1: number, n2:number): number {
  return n1 + n2;
}

function printResult(num:number) {
  console.log('Result: ' + num);
}

console.log(printResult(add(5,12)));  // undefined
printResult(add(5, 12));  // Result: 17


// function type
let combineValues: Function;

console.log(add(8,8));


// 함수의 인자와 return값의 type을 정함.
let combineValues2: (a: number, b: number) => number;

combineValues2 = add;
combineValues2 = printResult;
// combineValues = 5;
