import { StyledList } from "./styles/List.styled.js";
const List = () => {
  return (
    <StyledList>
      <li
        onClick={() => {
          document
            .querySelector("#aboutUs")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        About us
      </li>
      <li
        onClick={() => {
          document
            .querySelector("#howItWorks")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        How it works
      </li>
      <li
        onClick={() => {
          document
            .querySelector("#pricing")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Pricing
      </li>
      <li
        onClick={() => {
          document
            .querySelector("#faqs")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        FAQs
      </li>
    </StyledList>
  );
};

export default List;
