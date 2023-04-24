import { StyledHeader, Nav } from "./styles/Header.styled.js";
import { Container } from "./styles/Container.styled.js";
import { Logo } from "./styles/Logo.styled.js";
import List from "./List.jsx";
import Login from "./Login.jsx";

function Header() {
  return (
    <StyledHeader>
      <Logo src="src/assets/images/LogoBlack.svg" />
      <Container>
        <Nav>
          <Container>
            <List />
            <Login />
          </Container>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
