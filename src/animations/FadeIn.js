import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const FadeIn = styled.div`
  animation: ${fadeInAnimation} 1s ease-in 1;
`;

export default FadeIn;
