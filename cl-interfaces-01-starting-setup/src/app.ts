class Department {
  name: string; // field of the class. object를 생성하면 사용할 key.

  constructor(n: string) {
    // class를 사용해서 object가 생성됐을 때 실행되는 함수.
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();

console.log("end");

const accountingCopy = { describe: accounting.describe };

accountingCopy.describe();
// 위 코드에서 describe는 accounting객체의 describe method 주소를 가르킨다(포인터)
// 하지만, this는 일반적으로 해당 method를 호출한 대상을 의미하고, 여기서는 accountingCopy를 가르킨다.
// 하지만, accountingCopy를 정의할 때, name property를 정의하지 않았으므로, 'Department: undefined'가 출력된다.