/**
 * 인터페이스는 JavaScript 객체가 가질 수 있는 넓은 범위의 형태를 기술할 수 있습니다.
 * 프로퍼티로 객체를 기술하는 것 외에, 인터페이스는 함수 타입을 설명할 수 있습니다.
 **/

interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (source: string, subString: string): boolean => {
  const result = source.search(subString);
  return result > -1;
};

//매개변수의 이름이 같을 필요는 없습니다.
const hisSearch: SearchFunc = (src: string, sub: string): boolean => {
  const result = src.search(sub);
  return result > -1;
};

/**typescript는 매개변수의 위치에 대응하는 매개변수를 하나씩 검사합니다.
 * 그러므로 타입을 쓰지않고도 매개변수의 갯수와 return type만 일치한다면
 * 문맥상 타이핑(contextual typing)을 통해 타입추론이 가능합니다.
 **/
const herSearch: SearchFunc = (src, sub) => {
  const result = src.search(sub);
  return result > -1;
};
