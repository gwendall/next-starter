import App, { Container } from 'next/app';
import React from 'react';
import withApolloClient from '~/lib/apollo/with-apollo-client';
import { ApolloProvider } from 'react-apollo';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class AppSuperWithApollo extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

class AppSuper extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default (publicRuntimeConfig.graphqlBackend
  ? withApolloClient(AppSuperWithApollo)
  : AppSuper);
