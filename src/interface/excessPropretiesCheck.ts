const createAnySquare = (config: SquareConfig2): { color: string; area: number } => {
  const newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
};

const myOptionalSqaure = createAnySquare({ color: "black" });

/**
 * 객체 리터럴은 다른 변수에 할당할 때나 인수로 전달할 때, 특별한 처리를 받고,
 * 초과 프로퍼티 검사 (excess property checking)를 받습니다.
 * 만약 객체 리터럴이 "대상 타입 (target type)"이 갖고 있지 않은 프로퍼티를 갖고 있으면, 에러가 발생합니다.
 * 에러는 다음과 같습니다 .
 *
 * let mySquare = createSquare({ colour: "red", width: 100 });
 *
 * 위와 같은 프로퍼티를 넘겨 줬을 경우 colour는 SquareConfig 에 선언되지 않은 변수로 에러가 나게됩니다.
 * 이런 경우 해결법은 세 가지입니다.
 */

//첫번째는 타입 단언 입니다.
let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);

//두번째는 인덱스 서명 방식입니다.
interface SquareConfig2 {
  color?: string;
  width?: number;
  [propName: string]: any;
}

const rightMySquare = createAnySquare({ coluor: "hello" });

//세번째 방식은 객체를 다른 변수에 할당하는 것 단 이경우에는 공통 프로퍼티가 있어야한다 아래와 같은 경우에는 width가 공통 프로퍼티다. 하지만 이방법은 사용하지 않는게 좋다.(사실상 대부분 버그)
let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare(squareOptions);
