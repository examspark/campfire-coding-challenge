import styled from "styled-components";

const Centered = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100rem;
`;
const CenteredLayout: React.FC<React.PropsWithChildren> = (props) => {
  return <Centered>{props.children}</Centered>;
};

export default CenteredLayout;
