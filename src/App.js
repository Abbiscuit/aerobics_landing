import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Banner from './components/Banner';
import HeaderLogoBar from './components/HeaderLogoBar';
import Menu from './components/Menu';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Banner />
        <HeaderLogoBar />
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Container>
    </div>
  );
}

/* Temporary (remove later 👇) */
const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

export default App;

const Container = styled.div`
  padding: 36px;
`;
