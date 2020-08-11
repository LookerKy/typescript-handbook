interface SquareConfig {
  color?: string;
  width?: number;
}

const createSquare = (config: SquareConfig): { color: string; area: number } => {
  const newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
};

const mySqaure = createSquare({ color: "black" });

/**
 * 인터페이스의 모든 프로퍼티가 필요한 것은 아닙니다. 어떤 조건에서만 존재하거나 아예 없을 수도 있습니다.
 * 선택적 프로퍼티들은 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는 "option bags" 같은 패턴을 만들 때 유용합니다.
 * 선택적 프로퍼티를 가지는 인터페이스는 다른 인터페이스와 비슷하게 작성되고, 선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 ?를 붙여 표시합니다.
 * 선택적 프로퍼티의 이점은 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서, 사용 가능한 속성을 기술하는 것입니다.
 * 예를 들어, createSquare안의 color 프로퍼티 이름을 잘못 입력하면, 오류 메시지로 알려줍니다
 */
