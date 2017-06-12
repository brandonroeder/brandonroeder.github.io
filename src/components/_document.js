import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    // Hack to prevent unstyled flash with styled-components.
    // From https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>Brandon Roeder</title>
          <link rel="author" type="text/plain" href="/humans.txt" />
          <meta property="og:site_name" content="Brandon Roeder" />
          <meta property="og:title" content="Brandon Roeder" />
          <meta property="og:type" content="profile" />
          <meta property="og:locale" content="en_US" />
          <link rel="canonical" href="http://brandonsroeder.com" />
          <meta property="og:url" content="http://brandonsroeder.com" />
          <meta property="og:image:type" content="image/png" />
          <meta property="profile:first_name" content="Brandon" />
          <meta property="profile:last_name" content="Roeder" />
          <meta property="profile:gender" content="male" />
          <meta property="profile:username" content="brandonscott" />
          <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/619254/777982/css/fonts.css" />
          <link rel="stylesheet" type="text/css" href="/static/base.css" />
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
