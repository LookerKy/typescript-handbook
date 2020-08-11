/** boolean */
const isDone: boolean = false;
/** boolean */

/** Number */
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
/** Number */

/** String */
const color: string = "blue";
/** String */

/** Array */
const list: number[] = [1, 2, 3];

const list2: Array<number> = [4, 5, 6];
/** Array */

/** Tuple 타입과 갯수가 고정이 됨 */
let tuple: [string, number];
tuple = ["hello", 123];

/** error case in tuple*/
// tuple = ["error", 1234, "like this"];
/** Tuple */

/** Enum */
enum Color {
  Red,
  Green,
  Blue,
}

const c: Color = Color.Green;

/** 1부터 카운트 */
enum Food {
  kimchi = 1,
  pasta,
  salad,
}

const d: Food = Food.pasta;

/** count 번호 직접 지정 */
enum Languages {
  C = 1,
  Java = 3,
  Python = 5,
}

const e: Languages = Languages.Java;

/** 번호에 위치한 내용 return */
enum company {
  samsung = 1,
  LG,
  HanHwa,
}

const f: string = company[2];
/** Enum */

/** Any */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists();
notSure.toFixed();

let prettySure: object = { hello: 4 };

const anyList: any[] = [1, "2", "free"];

anyList[1] = true;

/** Void  any의 반대 개념  반환 값이 없을 때 반환 타입을 표현하기 위해 쓰이는 것을 볼 수 있습니다:*/
const warnUser = (): void => {
  console.log("This is my warning message");
};
/** void형식의 변수를 선언하는 것은 유용 하지않음 null과 undifined 만 할당 할 수 있기 때문
 * --strictNullChecks 사용하지 않을 때만
 */
let unsable: void = undefined;
// unsable = null;
/** */

/** null & undifined
 * 기본적으로 null 과 undefined는 다른 모든 타입의 하위 타입니다. 이건, null과 undefined를 number 같은 타입에 할당할 수 있다는 것을 의미합니다.
 */
let u: undefined = undefined;
let n: null = null;
/** */

/** Never
 * 입은 절대 발생할 수 없는 타입을 나타냅니다. 예를 들어, never는 함수 표현식이나 화살표 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰입니다
 */

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
  throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
  return error("Something failed");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
  while (true) {}
}
/** */

/** object
 * object는 원시 타입이 아닌 타입을 나타냅니다. 예를 들어, number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지를 의미합니다.
 */
declare function create(o: object | null): void;

create({ prop: 0 }); // 성공
create(null); // 성공
/** */

/** Type 단언 (type assertions) */

//angle-bracket 방식 타입 단언
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

//as 방식 ** jsx를 사용할 경우 as방식만 사용 가능
let someValueAs: any = "this is a string";

let strAsLength: number = (someValueAs as string).length;
