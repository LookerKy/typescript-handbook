interface Pointer {
  readonly x: number;
  readonly y: number;
}

const p1: Pointer = { x: 10, y: 100 };
/**
 * p1.x = 100; //error
 */
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
/** 
ro[0] = 12; // 오류!
ro.push(5); // 오류!
ro.length = 100; // 오류!
a = ro; // 오류!
*/
//재할당은 가능
a = ro as number[];
a = <Array<number>>ro;
a[0] = 1; // not error
