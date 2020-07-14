import React from 'react';
import Header from './components/Header';
import styled from 'styled-components';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { Switch, Route, Redirect } from 'react-router-dom';
import Frame from './components/layouts/Frame';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';

function App() {
  const [currentUser, setCurrentUser] = React.useState('user');
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
          <Route
            exact
            path="/about"
            render={props => <About {...props} message={message} />}
          />
          <Route
            exact
            path="/admin"
            render={props => {
              return currentUser ? (
                <Admin {...props} />
              ) : (
                <Redirect to="/admin-login" />
              );
            }}
          />
          <Route exact path="/admin-login" component={Login} />
          <Route exact path="/admin-signup" component={Signup} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  padding: 36px;
`;
