import { Link } from "react-router-dom";
import styled from "styled-components";

import { HStack } from "./Stack";

import { VStack } from ".";

const Styled = styled(Link)`
  display: block;
  border-radius: 0.5rem;
  text-decoration: none;
  color: inherit;
  border: solid 1px #ddd;
  padding: 1.5rem;
  align-items: center;
  transition:
    border 0.2s,
    background-color 0.2s;

  &:hover {
    border: solid 1px rebeccapurple;
    box-shadow: 0 0 0 0.25rem rgba(102, 51, 153, 0.1);
  }

  svg {
    display: block;
    fill: #333;
  }
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-weight: 400;
`;
const StyledDescription = styled.p`
  color: #666;
  margin: 0;
`;

export const LinkCard = (props: {
  title: string;
  to: string;
  description: string;
  icon?: React.ReactElement;
}) => {
  return (
    <Styled to={props.to}>
      <HStack gap="1.5rem" centered>
        {props.icon}
        <VStack gap="0.5rem">
          <StyledTitle>{props.title}</StyledTitle>
          <StyledDescription>{props.description}</StyledDescription>
        </VStack>
      </HStack>
    </Styled>
  );
};
