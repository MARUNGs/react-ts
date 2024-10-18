import React, { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");

  // event의 type을 설정해보자.
  // 어디에 타입이 어딨는지 알고 싶다면 구글링을 하도록 해...
  const onChange = (event: React.FormEvent<HTMLInputElement>) =>
    // currentTarget VS target ?
    // 둘다 같은 쓰임새지만 React + TS 환경에서는 currentTarget으로 선언해야 한다.
    setValue(event.currentTarget.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="username"
        />
        <button>login</button>
      </form>
    </div>
  );
}
