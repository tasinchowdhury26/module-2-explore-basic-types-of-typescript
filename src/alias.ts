type NurseType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: NurseType = {
  name: "Phoebe",
  age: 21,
  profession: "Nurse",
  address: "Cumilla",
};

type OperationType = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation: OperationType) => {
  return operation(num1, num2);
};

calculate(3, 4, (a, b) => a + b);
calculate(3, 4, (a, b) => a - b);
calculate(3, 4, (a, b) => a * b);
calculate(3, 4, (a, b) => a / b);
