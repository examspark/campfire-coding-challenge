import { PropsWithChildren } from "react";
import styled from "styled-components";

type StackProps = {
  direction?: "row" | "column";
  $direction?: "row" | "column";
  gap?: "sm" | "md" | "lg" | string;
  $gap?: "sm" | "md" | "lg" | string;
  centered?: boolean;
  $centered?: boolean;
};

/**
 * The most primative container. Mostly just establishes very common styles like
 * `box-sizing`. Except in rare circumstances, all containers in this UI library
 * should inherit from this container.
 */
export const Box = styled.div`
  box-sizing: border-box;
`;

const Styled = styled(Box)<StackProps>`
  display: flex;
  flex-direction: ${(p) => p.$direction ?? "row"};

  ${(p) => {
    switch (p.$gap) {
      case "sm":
        return "gap: 0.5rem;";
      case "md":
        return "gap: 1rem;";
      case "lg":
        return "gap: 2rem;";
      default:
        if (typeof p.$gap === "string") {
          return `gap: ${p.$gap};`;
        }
    }
  }}

  ${(p) => {
    if (p.$centered) {
      return "align-items: center;";
    }
  }}
`;

/**
 * Simple view that positions elements along horizontal or vertical line. This
 * component is usually not used on its own, but rather `VStack` or `HStack`.
 * Naming is inspired by SwiftUI.
 */
const Stack = ({ children, ...props }: PropsWithChildren<StackProps>) => {
  return <Styled {...props}>{children}</Styled>;
};

/**
 * Simple view that positions elements along a vertical line. Naming is inspired
 * by SwiftUI.
 */
export const VStack = ({
  gap,
  centered,
  ...props
}: PropsWithChildren<StackProps>) => {
  return (
    <Stack $direction="column" $gap={gap} $centered={centered} {...props} />
  );
};

/**
 * Simple view that positions elements along horizontal line. Naming is inspired
 * by SwiftUI.
 */
export const HStack = ({
  gap,
  centered,
  ...props
}: PropsWithChildren<StackProps>) => {
  return <Stack $direction="row" $gap={gap} $centered={centered} {...props} />;
};
