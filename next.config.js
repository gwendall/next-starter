const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  publicRuntimeConfig: {
    graphqlBackend: null,
  },
};
