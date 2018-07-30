import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          <title>Next.js Starter</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

injectGlobal`

  ${normalize()};

	*,
	*::before,
	*::after {
	  -moz-osx-font-smoothing: grayscale;
	  -webkit-font-smoothing: antialiased;
	  text-rendering: optimizeLegibility;
	  box-sizing: border-box;
	}

	html {
	  width: 100%;
	  height: 100%;
	  font-size: 62.5%;
	  font-size: calc(1em * .625);
	}

	body {
	  position: relative;
	  width: 100%;
	  height: 100%;
	  margin: 0;
	  font-style: normal;
	  font-weight: 400;
	  font-size: 1.5rem;
	  line-height: 1.4;
		background-color: rgb(240, 240, 240);
		color: rgba(0, 0, 0, .7);
		max-width: 100vw;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
	}

	/* Get rid of gap under images by making them display: inline-block; by default */
	img {
	  display: inline-block;
	  vertical-align: middle;
	  max-width: 100%;
		border: 0;
	}

	/* Remove Svg outline */
	svg {
	  outline: 0;
	}

	/* Reset <button> styles created by most browsers */
	button {
	  appearance: none;
	  padding: 0;
	  border: 0;
	  background: transparent;
	  outline: 0;
	  cursor: pointer;
	  line-height: 1;
	}

	ul,
	ol,
	dl,
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
	  margin: 0;
	  padding: 0;
	  font-family: inherit;
	  font-weight: 300;
	}

	b {
		font-weight: bold;
	}

	a {
    color: inherit;
    line-height: inherit;
    text-decoration: none;
    tap-highlight-color: transparent;
    cursor: pointer;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

	#__next {
	  height: 100%;
	}

`;
