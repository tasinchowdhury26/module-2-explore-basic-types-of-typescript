const search = (value: string | null) => {
  if (value === null) {
    console.log(`There is nothing to search!`);
  } else {
    console.log(`Searching .. .`);
  }
};
search(null);

const getSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    console.log(`Speed is ${(speed * 1000) / 3600} ms^-1`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    console.log(`Speed is ${(parseFloat(value) * 1000) / 3600} ${unit}`);
  }
};

getSpeed(10);
getSpeed(`10 kmph`);

const throwErr = (message: string): never => {
  throw new Error(message);
};
console.log(throwErr(`This funtion will never return anything`));
