import styled from "styled-components";

export const Image = styled.img`
  height: {(props)=> props.h || "auto"};
  max-width: {(props)=> props.w || "500px"};
  width: 100%;
`;
