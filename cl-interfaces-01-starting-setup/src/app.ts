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