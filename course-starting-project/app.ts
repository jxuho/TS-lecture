// TS가 type infer함. => 가장 권장할만 함.
const person1 = {
  name: "Juho",
  age: 26
}
console.log(person1.name);



// person2가 object라는 것만 지정했기 때문에, property에 접근할 때 오류 출력함.
const person2: object = {
  name: "Juho",
  age: 26
}
console.log(person2.name);



// person3 object의 key-type을 지정
const person3: {
  name: string;
  age: number;
} = {
  name: "Juho",
  age: 26
}
console.log(person3.name);
