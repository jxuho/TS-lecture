class Department {
  // private readonly id: string;
  // private name: string;

  constructor(private readonly id:string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    this.id = 'd2'  // readonly : 에러 발생
    console.log(`Department: ${this.id}: ${this.name}`);
  }
}

const accounting = new Department('d1', "Accounting");
accounting.describe()
