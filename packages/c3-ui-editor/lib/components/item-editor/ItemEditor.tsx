import styled from "styled-components";

const StyledPlaceholder = styled.div`
  padding: 5rem;
  text-align: center;
  border: dashed 2px #ccc;
`;

const StyledCode = styled.span`
  background-color: #f0f0f0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0 0.3rem;
`;

export const ItemEditor = () => {
  return (
    <StyledPlaceholder>
      <p>
        This serves as a placeholder for a component that is responsible for
        presenting an item editing interface to the content creator.
      </p>
      <p>
        This component is located at:
        <StyledCode>
          ./packages/c3-ui-editor/lib/components/item-editor/ItemEditor.tsx
        </StyledCode>
        .
      </p>
    </StyledPlaceholder>
  );
};
