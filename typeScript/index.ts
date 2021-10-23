type Combinable = number | string;
type inputType = "ADMIN" | "USER";
enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
const person: {
  name: string;
  age: number;
  role: inputType;
} = {
  name: "kittu",
  age: 26,
  role: Role.ADMIN,
};

let k: any;
let p: unknown;
let q: undefined | Function;

const person2 = Object.create(person);
person2.name = "koti";

person2.role = "normaluser";
console.log(person2.role);

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

let add: Function;

const combine = (a: number, b: number): void => {
  console.log(a + b);
};

add = combine;

add(1, 4);

let subtract: (x: number, y: number) => void;

const takeOut = (a: number, b: number): void => {
  console.log(a - b);
  return;
};

subtract = takeOut;

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
