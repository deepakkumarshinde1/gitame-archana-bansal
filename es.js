function* createTokens(value) {
  let start = 1;

  while (start <= value) {
    yield start;
    start++;
  }
}

let token = createTokens(10);
console.log(token.next());
console.log(token.next());
console.log(token.next());
console.log(token.next());
console.log(token.next());
console.log(token.next());
console.log(token.next());
console.log(token.next());
console.log(token.next());
console.log(token.next());
console.log(token.next());
console.log(token.next());

let object = {
  "New York": "USA",
  Paris: "France",
  Dhaka: "Bangladesh",
};
console.log(Object.entries(object));
let map = new Map(Object.entries(object));
console.log(map);
console.clear();

let array1 = [10, 20, 30, 40, 50];
let iterator = array1[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let myIterator = {
  data: [10, 20, 30, 40, 50],
  [Symbol.iterator]() {
    let index = 0;
    let data = this.data;
    return {
      next() {
        if (index < data.length) {
          return {
            value: data[index++],
            done: false,
          };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};
console.clear();
let int = myIterator[Symbol.iterator]();

console.log(int.next());
console.log(int.next());
console.log(int.next());
