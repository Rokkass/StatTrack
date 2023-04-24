import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 42px;
  margin-left: 40px;

  li {
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    width: 100%;
  }

  @media (max-width: 1024px) {
    gap: 16px;
  }
`;
