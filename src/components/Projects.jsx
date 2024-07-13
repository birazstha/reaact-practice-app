import styled from "styled-components";
import Section from "./Section";
import ProjectDetail from "./ProjectDetail";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 2rem;
`;

export default function Projects() {
  return (
    <Section>
      <Title>My Projects</Title>
      <Container>
        <ProjectDetail />
        <ProjectDetail />
        <ProjectDetail />
        <ProjectDetail />
      </Container>
    </Section>
  );
}
