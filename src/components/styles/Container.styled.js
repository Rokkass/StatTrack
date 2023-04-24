import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.bg || "transparent"};
  display: flex;
  flex-direction: ${(props) => props.fd || "row"};
  gap: {
    (props)=> props.g || "20px"
  };
  justify-content: ${(props) => props.s || "space-between"};
  max-width: ${(props) => props.mw || "100%"};
  width: ${(props) => props.w || "100%"};
`;
