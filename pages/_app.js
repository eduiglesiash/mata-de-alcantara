import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";
import HeaderWeb from '../components/headerWeb/HeaderWeb'
import Footer from '../components/footer/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter();


  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag(
        'config',
        process.env.GOOGLE_ANALYTICS,
        { page_path: url })
    };
    router.events.on('routerChangeComplete', handleRouteChange);

    return () => {
      router.events.off("routerChangeCOmplete", handleRouteChange)
    }
  }, [router.events]);

  return (
    <>
      <HeaderWeb />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <CookieConsent
        buttonText="Sí, utilizar cookies."
        onAccept={() => location.reload()}
        cookieName="CookieConsent"
        expires={14}
        enableDeclineButton="true"
        declineButtonText="No, no utilizar cookies"
        disableStyles={true}
        containerClasses='consent__container'
        contentClasses='consent__content'
        buttonWrapperClasses='consent__btn'
      >
        <h4>Gestionar al consentimiento de las cookies</h4>
        <p>Para ofrecer las mejores experiencias, utilizamos tecnologías como las cookies para almacenar y/o acceder a la información del dispositivo. El consentimiento de estas tecnologías nos permitirá procesar datos como el comportamiento de navegación o las identificaciones únicas en este sitio. No consentir o retirar el consentimiento, puede afectar negativamente a ciertas características y funciones. <Link href="politica-de-cookies"><a>Política de Cookies</a></Link>.</p>
        
      </CookieConsent>
    </>
  )
}

export default MyApp
