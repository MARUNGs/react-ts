/**
 * styled-components를 내가 정의한 타입으로 변경하였음
 */

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
  }
}
