/** 전개 연산자를 이용한 배열 요소 확장*/

/** 1. 배열 합치기 */
const arr = [3, 4, 5];

const arr2 = [1, 2, ...arr];

console.log(`arr2 : ${arr2}`);

/**2. 배열 디스트럭처링  */

let [first, ...second] = [1, 2, 3];
console.log(first);
console.log(second);

/** 전개 연산자를 이용한 객체 요소 확장 */

let obj = { c: 3, d: 4, e: 5 };

let obj2 = { a: 1, b: 2, ...obj };

console.log(obj2);

let numGroup = { n1: 1, n2: 2, n3: 3 };

let { n2, ...n5 } = numGroup;

console.log(n2);
console.log(n5);
