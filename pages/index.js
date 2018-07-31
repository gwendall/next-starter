import React from 'react';
import styled from 'styled-components';

export default () => (
  <Layout>
    <h1>Next.js starter</h1>
    <div>That's a dope app</div>
  </Layout>
);

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
