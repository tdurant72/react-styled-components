import React from "react";
import styled from "styled-components";

const ExternalLink = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: violet;
  font-size: 1.5rem;
`;

export default ExternalLink;
