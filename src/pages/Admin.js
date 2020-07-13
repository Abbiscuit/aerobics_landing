import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import OutsideLink from '../components/OutsideLink';

const Admin = () => {
  const [preview, setPreview] = React.useState({
    content: '',
    rate: '',
  });

  const handleChange = e => {
    setPreview({ ...preview, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Section dashed="true">
        <Title>Welcome back, Owner!</Title>
      </Section>
      <Section bgColor={'salmon'}>
        <p>
          新しいメッセージが届きました <Span>123</Span> 件
        </p>
      </Section>
      <Section>
        <SubTitle bottom={16}>プロモーション設定</SubTitle>
        <Label htmlFor="content">内容 </Label>
        <Input
          type="text"
          name="content"
          value={preview.content}
          onChange={handleChange}
          bottom={16}
        />

        {preview.content ? (
          <React.Fragment>
            <p>プレビュー（下記のように表示されます）</p>
            <Banner message={preview.content} to={'/admin'} />
          </React.Fragment>
        ) : null}

        <Button to="admin-settings" top={16}>
          設定
        </Button>
      </Section>
      <Section>
        <SubTitle bottom={16}>ユーザー管理</SubTitle>
        <Section dashed bgColor={'#fafafa'}>
          <p>鈴木健太</p>
        </Section>
        <Section dashed bgColor={'#fafafa'}>
          <p>斎藤彩香</p>
        </Section>
        <Section dashed bgColor={'#fafafa'}>
          <p>藤井恵奈</p>
        </Section>
        <Button to="admin-settings" top={16}>
          ユーザー一覧
        </Button>
      </Section>
      <Section>
        <SubTitle>決済管理</SubTitle>
        <p></p>
        <OutsideLink href={'https://stripe.com/jp'} top={16}>
          Stripe管理画面
        </OutsideLink>
      </Section>
    </div>
  );
};

export default Admin;

const Section = styled.section`
  background-color: ${props => props.bgColor || '#fff'};
  padding: 16px;
  margin-bottom: 16px;
  border: ${props =>
    props.dashed ? '1px dashed rgba(0,0,0,.2)' : '1px solid rgba(0,0,0,.2)'};
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 1;
  margin-bottom: ${props => `${props.bottom}px` || '0'};
  color: #222;
`;

const Span = styled(Link)`
  font-size: 120%;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: ${props => `${props.bottom}px` || '0'};
  color: #222;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 0 8px;
  margin-bottom: ${props => `${props.bottom}px` || '0'};
  color: #222;
`;

const Label = styled.label`
  color: #222;
`;
