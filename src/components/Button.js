import React from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
        opacity:0;
    }
    100% {
        opacity: 1;
    }
`;

const StyleButton = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.base};
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 3px;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${(props) => props.theme.colors.main};
      color: ${(props) => props.theme.colors.white};
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.main};
  }

  @media ${(props) => props.theme.mediaQueries.below768} {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

const Button = ({ primary, bgColor, children }) => {
  return (
    <StyleButton primary={primary} bgColor={bgColor}>
      {children}
    </StyleButton>
  );
};
export default Button;
