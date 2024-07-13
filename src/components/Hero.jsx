import styled from "styled-components";
import Section from "./Section";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

const Description = styled.div`
  flex-grow: 2;
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionText = styled.h1`
  font-size: 50px;
`;

export default function Hero() {
  return (
    <Section>
      <Container>
        <Description>
          <h3>Welcome to my portfolio</h3>
          <DescriptionText>
            Hi, I'm <br /> <p style={{ color: "#ed3b59" }}>Biraj Shrestha</p>
          </DescriptionText>
        </Description>
        <ImageContainer>
          <img
            src="https://www.birajshrestha.com.np/uploads/files/1708487051.png"
            alt=""
          />
        </ImageContainer>
      </Container>
    </Section>
  );
}
