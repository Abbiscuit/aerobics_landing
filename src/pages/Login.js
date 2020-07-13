import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Login = props => {
  const [credentials, setCrendentials] = React.useState({
    email: '',
    password: '',
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(credentials);
    setCrendentials({
      email: '',
      password: '',
    });
    props.history.push('/admin');
  };

  const onChange = e => {
    setCrendentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Section bgColor="#dadada">
        <Title bottom={'16'}>ログイン</Title>
        <Form onSubmit={onSubmit}>
          <Input
            type="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="メールアドレス"
          />
          <Input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="パスワード"
          />
          <Button type="submit">続ける</Button>
        </Form>
        <LinkText to="/admin-signup">アカウントをお持ちでない方</LinkText>
      </Section>
    </div>
  );
};

export default Login;

const Section = styled.section`
  background-color: ${props => props.bgColor || '#fff'};
  padding: 16px;
  margin: 0 auto;
  width: 560px;
  /* margin-bottom: 16px; */
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 1;
  text-align: center;
  margin-bottom: ${props => `${props.bottom}px` || '0'};
  color: #222;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Input = styled.input`
  height: 40px;
  margin-bottom: 16px;
  font-size: 16px;
  padding: 0 8px;
`;

const Button = styled.button`
  margin: 0 auto 16px;
  background-color: #0d88bc;
  max-width: 234px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #fafafa;

  &:hover {
    background-color: rgba(13, 136, 150);
  }
`;

const LinkText = styled(Link)`
  text-align: center;
  display: inline-block;
  width: 100%;
  font-size: 12px;
  text-decoration: underline;
`;
