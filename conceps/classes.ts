abstract class Department {
  static fiscalYear = 2020;
  // private readonly name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // console.log(this.fiscalYear)
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value!");
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Top") return;
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Abdi");
console.log("Employee 1: ", employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["King", "Chali", "Hidi"]);

it.addEmployee("Top");
it.addEmployee("Manner");
it.addEmployee("Anna");

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.mostRecentReport = "Your end report here!";
accounting.addReport("Something went wrong");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Top"); // Will not return since it already exist
accounting.addEmployee("Reidar");

// accounting.getReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const itCopy = { name: "No name", describe: it.describe };

// itCopy.describe(); // This turn out to be undefined
