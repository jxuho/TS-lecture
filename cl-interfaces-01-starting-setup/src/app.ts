class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  addEmployee(name: string) {
    this.employees.push(name);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string) {
    super(id, "accounting");
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }
}

const newDepartment = new ITDepartment("d1", ["juho, linh"]);
newDepartment.addEmployee("juho");
console.log(newDepartment);

const accountDepartment = new AccountingDepartment("d2");
accountDepartment.addEmployee("linh");
console.log(accountDepartment);
