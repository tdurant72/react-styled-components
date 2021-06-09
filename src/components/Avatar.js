import React from "react";
import styled from "styled-components";
import ExternalLink from "./ExternalLink";

const StyledImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.primary.dark};
`;
const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 2rem;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.primary.dark};
  background-color: ${(props) => props.theme.colors.primary.light};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
    transform: scale(1.05);
  }
`;
const AvartarTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary.contrastText};
`;

const Avatar = ({ imageUrl, username, href }) => {
  return (
    <AvatarWrapper>
      <StyledImage src={imageUrl} alt={username} />
      <AvartarTitle>{username}</AvartarTitle>
      <ExternalLink href={href}>Github Profile</ExternalLink>
    </AvatarWrapper>
  );
};
export default Avatar;
