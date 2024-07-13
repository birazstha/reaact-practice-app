import styled from "styled-components";
import img from "../images/driving.jpg";

const Container = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  height: 350px;
  width: 300px;
  border-radius: 5px;
`;

const ProjectImageContainer = styled.div`
  height: 260px;
`;

const ProjectDescription = styled.div`
  text-align: center;
  padding: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectTitle = styled.h4``;

const ProjectDetails = styled.p``;

export default function ProjectDetail() {
  return (
    <Container>
      <ProjectImageContainer>
        <Image src={img} alt="" />
      </ProjectImageContainer>
      <ProjectDescription>
        <ProjectTitle>Driving School Management System</ProjectTitle>
        <ProjectDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          neque!
        </ProjectDetails>
      </ProjectDescription>
    </Container>
  );
}
