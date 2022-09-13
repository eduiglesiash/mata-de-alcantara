import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-N2XE3Z4VWB`}></script>
        <script dangerouslySetInnerHTML={
          {
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'update', { 'analytics_storage': 'granted' });

          gtag('js', new Date());

          function getCookie() {
            const value = "; " + document.cookie;
            const parts = value.split("; CookieConsent=");
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

          //comprobamos el consentimiento
          if( getCookie() === 'true' ) {
              gtag('consent', 'update', {
              'analytics_storage': 'granted'
              });
          }
          gtag('config', '${process.env.GOOGLE_ANALYTICS}}', { page_path: window.location.pathname });`
          }
        }>

        </script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Montserrat:wght@200;400;700&family=Satisfy&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
