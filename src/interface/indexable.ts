interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

console.log(myStr);

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NotOkay {
  [x: number]: Dog;
  [x: string]: Dog;
}

let myAnimal: NotOkay;
