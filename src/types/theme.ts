/**
 * 내가 정의했던 타입으로 styled-component의 타입 설정
 */

import { DefaultTheme } from "styled-components";

const lightTheme: DefaultTheme = {
  bgColor: "whitesmoke",
  textColor: "#232332",
};

const darkTheme: DefaultTheme = {
  bgColor: "#232332",
  textColor: "whitesmoke",
};

const themeAll = { lightTheme, darkTheme };

export default themeAll;
