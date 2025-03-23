import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const nonce = Math.random().toString(36).substr(2); // або інший метод для генерації nonce
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={`script-src 'self' 'nonce-${nonce}' 'strict-dynamic';`} />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
