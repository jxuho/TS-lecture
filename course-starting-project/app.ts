function add(n1: number, n2:number): number {
  return n1 + n2;
}

function printResult(num:number) {
  console.log('Result: ' + num);
}

console.log(printResult(add(5,12)));  // undefined
printResult(add(5, 12));  // Result: 17
