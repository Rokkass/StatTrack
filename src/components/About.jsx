import { StyledHero } from "./styles/Hero.styled.js";
import { Container } from "./styles/Container.styled.js";
import { Image } from "./styles/Image.styled.js";
import { Stack } from "./styles/Stack.styled.js";
import { StyledAbout } from "./styles/About.styled.js";

const About = () => {
  return (
    <StyledAbout id="aboutUs">
      <Container g="0" fd="row-reverse">
        <Stack>
          <img
            src="src/assets/images/article_tag.svg"
            alt=""
            style={{ marginBottom: "20px" }}
            id="#AboutUs"
          />
          <h1>Faster, friendlier feedback loops make life easier.</h1>
          <p>
            Add a Viewer to your team so they can see what you see everything
            you share, or invite people to individual documents. It&apos;s up to
            you. Stakeholders can check out designs in their web browser, test
            prototypes and leave feedback for free.
          </p>
          <ul>
            <li>Shared Cloud Libraries, for a single source of truth</li>
            <li>Prototype previews for user testing and research</li>
            <li>Easy organization with projects</li>
            <li>Free developer handoff, right inside the browser</li>
            <li>Two-factor authentication and SSO</li>
          </ul>
        </Stack>
        <div style={{ width: "40%" }}>
          <Image
            src="src/assets/images/illustration_2.png"
            alt="image of woman hugging little globe"
            w="580px"
            h="500px"
          />
        </div>
      </Container>
    </StyledAbout>
  );
};

export default About;
