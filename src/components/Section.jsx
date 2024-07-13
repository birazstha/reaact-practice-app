import styled from "styled-components";

const Container = styled.div`
  padding: 10px 40px;
`;

export default function Section({ children }) {
  return <Container>{children}</Container>;
}
