import styled from "styled-components";
import { useState } from "react";

// Container 컴포넌트의 prop types 정의
interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

// div의 타입을 ContainerProps로 정의하였음.
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

export default function Circle({ bgColor, borderColor }: ContainerProps) {
  const [counter, setCounter] = useState(1);
  // 타입스크립트는 초기화된 값을 기준으로 자체적으로 타입을 추론한다.
  // 현재 numer형 1로 초기화했으므로 'hhhh'는 string형이기 때문에 삽입불가
  // setCounter('hhhh')
  console.log(counter);
  setCounter(0);

  // 더이상 bgColor의 오류가 발생하지 않음.
  return <Container bgColor={bgColor} borderColor={borderColor} />;
}
