// ternary operator
const age: number = 19;

const isAdult = age >= 18 ? "yes, adult" : "not adult";

// console.log(age, isAdult);

//Nullish Coalescing Operator works on null and undefined value
const isAuthenticatedUser = "";

const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
// console.log({ userName }, { userName2 });

type Hooman = {
  name: string;
  age: number;
  address: {
    city: "some city";
    road?: "";
    country: "some mans land";
  };
};

const person1: Hooman = {
  name: "Manuel",
  age: 35,
  address: {
    city: "some city",
    country: "some mans land",
  },
};
const road = person1?.address?.road ?? "Homeless";
console.log({ road });
