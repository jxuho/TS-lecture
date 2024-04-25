
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  readonly name?: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if(n) this.name = n;
  }

  greet(phrase: string) {
    if(this.name) {console.log(phrase + " " + this.name);}
    else {
      console.log('hi');
      
    }
  }
}

let user1: Greetable;
let user2: Person;

user1 = new Person("Max");
user2 = new Person("Juho")

user1.greet("Hi there - I am");
console.log(user1);

// type AddFn = (a: number, b: number) => number;
// let add: AddFn;
// add = (n1, n2) => {
// 	return n1 + n2;
// }

interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;
add = (n1, n2) => {
	return n1 + n2;
}

