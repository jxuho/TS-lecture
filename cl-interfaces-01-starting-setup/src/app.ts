// class Department {
//   name: string; // field of the class. object를 생성하면 사용할 key.

//   constructor(n: string) {
//     // class를 사용해서 object가 생성됐을 때 실행되는 함수.
//     this.name = n;
//   }

//   describe() {
//     console.log("Department: " + this.name);
//   }
// }

// const accounting = new Department("Accounting");
// accounting.describe();  // 'Department: Accounting'

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe();  // 'Department: undeinfed'



// 위 코드에서 describe는 accounting객체의 describe method 주소를 가르킨다(포인터)
// 하지만, this는 일반적으로 해당 method를 호출한 대상을 의미하고, 여기서는 accountingCopy를 가르킨다.
// 하지만, accountingCopy를 정의할 때, name property를 정의하지 않았으므로, 'Department: undefined'가 출력된다.
// 이를 해결하기 위해서, TS에서 Department class의 descibe method에 this를 인자로 전달할 수 있다


class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {  // 위에서 발생한 문제를 해결하기 위해 method에 this 인자를 전달하고 type을 Department class로 지정한다.
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe();  

const accountingCopy = { describe: accounting.describe };
accountingCopy.describe();  
// describe method를 정의할 때, 인자로 'this: Department'를 지정하면 에러가 발생한다.
// 해당 에러를 해결하기 위해서는 accountingCopy를 정의할 때, name property를 별도로 정의하면 된다.