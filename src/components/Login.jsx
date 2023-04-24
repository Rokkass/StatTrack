import { Container } from "./styles/Container.styled.js";
import { Button } from "./styles/Button.styled.js";

const Login = () => {
  return (
    <Container mw="310px">
      <Button
        bg="transparent"
        color="#151515"
        hover="#151515"
        hoverColor="#ffffff"
      >
        Login
      </Button>
      <Button>Sign Up</Button>
    </Container>
  );
};

export default Login;
