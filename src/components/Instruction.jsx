import { StyledInstruction } from "./styles/Instruction.styled.js";
import { Container } from "./styles/Container.styled.js";
import { Image } from "./styles/Image.styled.js";
import { Stack } from "./styles/Stack.styled.js";
import { data } from "../assets/data/data.js";

const Instruction = () => {
  return (
    <StyledInstruction id="howItWorks">
      <Container g="0">
        <Stack>
          <img
            src="src/assets/images/article_tag-2.svg"
            alt=""
            style={{ marginBottom: "20px" }}
            id="#AboutUs"
          />
          <h1>Building the best space for collaboration.</h1>
          <p>
            Add a Viewer to your team so they can see what you see everything
            you share, or invite people to individual documents. It&apos;s up to
            you. Stakeholders can check out designs in their web browser, test
            prototypes and leave feedback for free.
          </p>
          {data.map((item) => (
            <div style={{ display: "flex" }} key={item.id}>
              <div style={{ marginRight: "20px" }}>
                <img src={item.img} alt="" />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Stack>
        <div style={{ width: "40%" }}>
          <Image
            src="src/assets/images/illustration_3.png"
            alt="image of woman hugging little globe"
            w="490px"
            h="700px"
          />
        </div>
      </Container>
    </StyledInstruction>
  );
};

export default Instruction;
