import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Button from "./components/Button";
import ExternalLink from "./components/ExternalLink";
import PaginationWrapper from "./components/PaginationWrapper";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <ExternalLink href="https://www.github.com">Github</ExternalLink>
      <Router>
        <Switch>
          <Route path="/" exact component={UsersList} />
          <Route path="/user/:userId" component={UserDetails} />
        </Switch>
      </Router>

      <PaginationWrapper page="middle">
        <Button>Page 1</Button>
        <Button primary>Page 3</Button>
      </PaginationWrapper>
    </MainWrapper>
  );
}

export default App;
