import React from "react";
// import Circle from "./components/Circle";

import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div className="App">
      {/* <Circle bgColor="teal" borderColor="yellow" /> */}
      {/* <Circle bgColor="tomato" /> */}

      <div>
        <Container>
          <H1>Wow!</H1>
        </Container>
      </div>
    </div>
  );
}

export default App;
