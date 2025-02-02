import styled from "styled-components";

import { VStack } from "..";

const StyledH1 = styled.h1`
  font-weight: 400;
  margin: 0;
`;
const StyledSubtitle = styled.div`
  color: #666;
`;

export const PageTitle = (props: { title: string; subtitle?: string }) => {
  return (
    <VStack gap="1rem">
      {props.title && <StyledH1>{props.title}</StyledH1>}
      {props.subtitle && <StyledSubtitle>{props.subtitle}</StyledSubtitle>}
    </VStack>
  );
};
