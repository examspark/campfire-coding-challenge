import "styled-components";
import { AnyObject } from "../api";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AnyObject {}
}
