function add(n1: number, n2:number): number {
  return n1 + n2;
}

function printResult(num:number) {
  console.log('Result: ' + num);
}

// console.log(printResult(add(5,12)));  // undefined
// printResult(add(5, 12));  // Result: 17



// callback의 type 지정
function addAndHandle(n1:number, n2:number, cb: (num:number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (a) => {
  console.log(a);
  return 10;  // void로 정의됐지만, return값은 신경쓰지 않음.
})


// return값의 type이 void로 지정되었으므로, 에러 발생
function printInput(value: any): void {
  console.log(value)
  return "hello";
}
 
// undefined는 return 가능. JS에서 아무 것도 return하지 않으면 undefined를 반환하기 때문.
function printInput2(value: any): void {
  console.log(value)
  return undefined;
}
