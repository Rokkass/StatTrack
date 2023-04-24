import { StyledHero } from "./styles/Hero.styled.js";
import { Container } from "./styles/Container.styled.js";
import { Image } from "./styles/Image.styled.js";
import { Input } from "./styles/Input.styled.js";
import { Button } from "./styles/Button.styled.js";
import { Contact } from "./styles/Contact.styled.js";
import { Stack } from "./styles/Stack.styled.js";

const Hero = () => {
  return (
    <StyledHero>
      <Container g="0">
        <Stack>
          <h1>Always Track & Analyze Your Business Statistics To Succeed.</h1>
          <p>
            A better way to manage your sales, team, clients & marketing — on a
            single platform. Powerful, affordable & easy.
          </p>
          <Contact>
            <Input placeholder="Enter your email" />
            <Button>Get started</Button>
          </Contact>
          <div style={{ display: "flex", gap: "20px" }}>
            <img src="src/assets/images/m_visa.svg" alt="visa logo" />
            <img
              src="src/assets/images/m_mastercard.svg"
              alt="mastercard logo"
            />
            <img src="src/assets/images/m_paypal.svg" alt="paypal logo" />
          </div>
        </Stack>
        <div style={{ width: "40%" }}>
          <Image
            src="src/assets/images/illustration_1.png"
            alt="image of man standing on a lather"
            w="550px"
            h="580px"
          />
        </div>
      </Container>
    </StyledHero>
  );
};

export default Hero;
