/** 个人信息 */
interface User {
  name: string;
  age: number;
  sex?: string;
}

const person: User = {
  name: "123",
  age: 12,
};

interface Cat {
  name: string;
  run(): void;
  (name: string): void;
}

interface Fish {
  name: string;
  swim(): void;
}

function isFish(animal: Cat | Fish) {
  if (typeof (animal as Cat).run === "function") {
    return true;
  }
}
