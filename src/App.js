import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { Switch, Route } from 'react-router-dom';
import Frame from './components/layouts/Frame';

function App() {
  const message =
    '夏本番間近！！24時間限定ディスカウントクーポンで最大50%オフ！';

  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <Home {...props} message={message} />;
            }}
          />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route
            exact
            path="/admin"
            render={props => {
              return <Admin {...props} />;
            }}
          />
        </Switch>
      </Container>
    </div>
  );
}

/* Temporary (remove later 👇) */
const About = () => (
  <Frame>
    <h1>About</h1>
  </Frame>
);

export default App;

const Container = styled.div`
  padding: 36px;
`;
