// type addFn = (a: number, b: number) => number;
interface addFn {
  (a: number, b: number): number; // is a custom function type
}

let add: addFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 31;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(phrase: string) {
    if (this.name) console.log(phrase + " " + this.name);
    else console.log("Hi!");
  }
}

let user1: Greetable;

user1 = new Person("Abdi!");

user1.greet("Hi there, I'm");
console.log(user1);
