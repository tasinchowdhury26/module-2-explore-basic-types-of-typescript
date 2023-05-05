// regular function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
add(32);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const person: {
  name: string;
  age: number;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Jonah",
  age: 24,
  balance: 1300,
  addBalance(money: number) {
    console.log(`Balance after adding: ${this.balance + money}`);
  },
};

// person.addBalance(65);

const greetings = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend} \n`));
};
greetings("Jacob", "Jonah", "Miley");

// function generateAdder(a: number): (b: number) => number {
//   return function (b: number) {
//     return a + b;
//   };
// }
// const addTwo = generateAdder(2);
// console.log(addTwo(3));
// console.log(addTwo(5));
