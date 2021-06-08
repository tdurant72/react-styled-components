import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Button from "./components/Button";
import ExternalLink from "./components/ExternalLink";
import PaginationWrapper from "./components/PaginationWrapper";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <MainWrapper>
      <ExternalLink href="https://www.google.com">Google</ExternalLink>
      <ExternalLink href="https://www.yahoo.com">Yahoo</ExternalLink>
      <PaginationWrapper page="middle">
        <Button>Page 1</Button>
        <Button primary>Page 3</Button>
      </PaginationWrapper>
    </MainWrapper>
  );
}

export default App;
