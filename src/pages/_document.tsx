import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class Documents extends Document {
  static async getInitialProps(ctx: DocumentContext){
    const initialProps = await Document.getInitialProps(ctx)

    return {...initialProps}
  }

  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Documents