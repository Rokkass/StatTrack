import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme, bg }) => bg || theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme, color }) => color || theme.colors.white};
  cursor: pointer;
  font-family: "Regular", sans-serif;
  font-size: 18px;
  height: 52px;
  line-height: 26px;
  padding: 0 10px;
  text-align: center;
  white-space: nowrap;
  width: 145px;

  &:hover {
    background-color: ${({ theme, hover }) => hover || theme.colors.grey};
    color: ${({ theme, hoverColor }) => hoverColor || theme.colors.dark};
  }
`;
