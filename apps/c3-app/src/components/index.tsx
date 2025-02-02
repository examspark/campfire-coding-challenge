import React from "react";
import styled from "styled-components";

export type FCWithChildren<T = object> = React.FC<
  {
    children?: React.ReactNode;
  } & T
>;

const StyledVStack = styled.div<{
  gap?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.gap ?? "0"};
`;

export const VStack: FCWithChildren<{
  gap?: string;
}> = (props) => {
  return <StyledVStack {...props}>{props.children}</StyledVStack>;
};
