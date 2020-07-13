import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <Section dashed>
        <Title>Welcome back, Owner!</Title>
      </Section>
      <Section bgColor={'salmon'}>
        <p>
          新しいメッセージが届きました <Span>123</Span> 件
        </p>
      </Section>
      <Section>
        <h3>プロモーション設定</h3>
        {/* <form
          onSubmit={e => {
            e.preventDefault();
            message = 'submitted';
            console.log(message);
          }}
        >
          <input type="text" onChange={e => console.log(e.target.value)} />
          <button type="submit">申請</button>
        </form> */}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          necessitatibus natus fugit dolorem vitae? Quas voluptas ipsa beatae
          eligendi, deserunt optio iusto ut adipisci odit a mollitia ex harum
          voluptatibus. Sapiente autem corporis pariatur! Tempora, dolore.
          Fugit, est. Earum, nemo, ipsa nesciunt ratione eos beatae distinctio
          voluptatibus fugiat aperiam tempora debitis ipsam quibusdam doloribus,
          culpa voluptates cupiditate eveniet. Eius, soluta? Beatae
          necessitatibus sint sapiente, nulla impedit neque explicabo
          reprehenderit temporibus perferendis aut qui sequi quo cumque
          veritatis earum aperiam saepe vitae minima corrupti dolores amet
          omnis. Totam facilis officia debitis. Ipsum cumque, rerum doloremque
          dolore optio iure aspernatur exercitationem laboriosam? Placeat
          dignissimos iure eveniet eaque expedita soluta et quo neque veritatis
          aspernatur culpa, labore odit? Accusamus ipsum sit reiciendis quod?
          Quam, cum adipisci. Ea recusandae consectetur possimus nemo facere
          debitis officiis ut natus illo! Repellat praesentium eum molestias,
          illo laborum, ipsam ex ab impedit obcaecati omnis a quasi possimus
          animi. Voluptate, commodi. Quis maiores animi expedita autem
          necessitatibus quos ipsa illum repudiandae sit velit corrupti
          consectetur ad totam, repellat, repellendus minima impedit rerum
          provident hic harum alias. Accusantium, reprehenderit autem. Quasi,
          hic ipsum explicabo mollitia rerum, eaque velit quis porro qui
          nesciunt cupiditate voluptates dolore. Odit possimus ipsa eos
          temporibus distinctio, tempora quos deserunt similique error
          voluptates. Pariatur, laboriosam totam. Illum error culpa minima
          architecto dolor possimus dignissimos. Esse, sapiente dolores. Nostrum
          non at doloremque molestias nemo ullam. Deleniti, corporis dolores
          omnis nemo molestiae nobis obcaecati repudiandae facere quaerat
          delectus? Exercitationem minima, voluptate quasi rerum explicabo et
          dignissimos, velit numquam quae deleniti repudiandae hic earum
          molestiae libero sunt nam perspiciatis fuga? Facilis doloribus
          laudantium debitis voluptate. Et aut quas neque. Ab, totam
          reprehenderit. Corporis inventore perspiciatis cum nam nobis! Sequi
          deserunt quisquam neque fuga magni tempore quasi placeat blanditiis,
          maiores, ipsa quibusdam vitae dolore repellendus iure laudantium
          provident reiciendis incidunt.
        </p>
        <Button to="admin-settings" top={16}>
          設定
        </Button>
      </Section>
      <Section>
        <h3>ユーザー管理</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          necessitatibus natus fugit dolorem vitae? Quas voluptas ipsa beatae
          eligendi, deserunt optio iusto ut adipisci odit a mollitia ex harum
          voluptatibus. Sapiente autem corporis pariatur! Tempora, dolore.
          Fugit, est. Earum, nemo, ipsa nesciunt ratione eos beatae distinctio
          voluptatibus fugiat aperiam tempora debitis ipsam quibusdam doloribus,
          culpa voluptates cupiditate eveniet. Eius, soluta? Beatae
          necessitatibus sint sapiente, nulla impedit neque explicabo
          reprehenderit temporibus perferendis aut qui sequi quo cumque
          veritatis earum aperiam saepe vitae minima corrupti dolores amet
          omnis. Totam facilis officia debitis. Ipsum cumque, rerum doloremque
          dolore optio iure aspernatur exercitationem laboriosam? Placeat
          dignissimos iure eveniet eaque expedita soluta et quo neque veritatis
          aspernatur culpa, labore odit? Accusamus ipsum sit reiciendis quod?
          Quam, cum adipisci. Ea recusandae consectetur possimus nemo facere
          debitis officiis ut natus illo! Repellat praesentium eum molestias,
          illo laborum, ipsam ex ab impedit obcaecati omnis a quasi possimus
          animi. Voluptate, commodi. Quis maiores animi expedita autem
          necessitatibus quos ipsa illum repudiandae sit velit corrupti
          consectetur ad totam, repellat, repellendus minima impedit rerum
          provident hic harum alias. Accusantium, reprehenderit autem. Quasi,
          hic ipsum explicabo mollitia rerum, eaque velit quis porro qui
          nesciunt cupiditate voluptates dolore. Odit possimus ipsa eos
          temporibus distinctio, tempora quos deserunt similique error
          voluptates. Pariatur, laboriosam totam. Illum error culpa minima
          architecto dolor possimus dignissimos. Esse, sapiente dolores. Nostrum
          non at doloremque molestias nemo ullam. Deleniti, corporis dolores
          omnis nemo molestiae nobis obcaecati repudiandae facere quaerat
          delectus? Exercitationem minima, voluptate quasi rerum explicabo et
          dignissimos, velit numquam quae deleniti repudiandae hic earum
          molestiae libero sunt nam perspiciatis fuga? Facilis doloribus
          laudantium debitis voluptate. Et aut quas neque. Ab, totam
          reprehenderit. Corporis inventore perspiciatis cum nam nobis! Sequi
          deserunt quisquam neque fuga magni tempore quasi placeat blanditiis,
          maiores, ipsa quibusdam vitae dolore repellendus iure laudantium
          provident reiciendis incidunt.
        </p>
        <Button to="admin-settings" top={16}>
          設定
        </Button>
      </Section>
      <Section>
        <h3>決済管理</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          necessitatibus natus fugit dolorem vitae? Quas voluptas ipsa beatae
          eligendi, deserunt optio iusto ut adipisci odit a mollitia ex harum
          voluptatibus. Sapiente autem corporis pariatur! Tempora, dolore.
          Fugit, est. Earum, nemo, ipsa nesciunt ratione eos beatae distinctio
          voluptatibus fugiat aperiam tempora debitis ipsam quibusdam doloribus,
          culpa voluptates cupiditate eveniet. Eius, soluta? Beatae
          necessitatibus sint sapiente, nulla impedit neque explicabo
          reprehenderit temporibus perferendis aut qui sequi quo cumque
          veritatis earum aperiam saepe vitae minima corrupti dolores amet
          omnis. Totam facilis officia debitis. Ipsum cumque, rerum doloremque
          dolore optio iure aspernatur exercitationem laboriosam? Placeat
          dignissimos iure eveniet eaque expedita soluta et quo neque veritatis
          aspernatur culpa, labore odit? Accusamus ipsum sit reiciendis quod?
          Quam, cum adipisci. Ea recusandae consectetur possimus nemo facere
          debitis officiis ut natus illo! Repellat praesentium eum molestias,
          illo laborum, ipsam ex ab impedit obcaecati omnis a quasi possimus
          animi. Voluptate, commodi. Quis maiores animi expedita autem
          necessitatibus quos ipsa illum repudiandae sit velit corrupti
          consectetur ad totam, repellat, repellendus minima impedit rerum
          provident hic harum alias. Accusantium, reprehenderit autem. Quasi,
          hic ipsum explicabo mollitia rerum, eaque velit quis porro qui
          nesciunt cupiditate voluptates dolore. Odit possimus ipsa eos
          temporibus distinctio, tempora quos deserunt similique error
          voluptates. Pariatur, laboriosam totam. Illum error culpa minima
          architecto dolor possimus dignissimos. Esse, sapiente dolores. Nostrum
          non at doloremque molestias nemo ullam. Deleniti, corporis dolores
          omnis nemo molestiae nobis obcaecati repudiandae facere quaerat
          delectus? Exercitationem minima, voluptate quasi rerum explicabo et
          dignissimos, velit numquam quae deleniti repudiandae hic earum
          molestiae libero sunt nam perspiciatis fuga? Facilis doloribus
          laudantium debitis voluptate. Et aut quas neque. Ab, totam
          reprehenderit. Corporis inventore perspiciatis cum nam nobis! Sequi
          deserunt quisquam neque fuga magni tempore quasi placeat blanditiis,
          maiores, ipsa quibusdam vitae dolore repellendus iure laudantium
          provident reiciendis incidunt.
        </p>
        <Button to="admin-settings" top={16}>
          設定
        </Button>
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
`;

const Span = styled(Link)`
  font-size: 120%;
`;
