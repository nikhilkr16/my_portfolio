// Import styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <> 
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MXWWR72EJ0"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MXWWR72EJ0');
        `}
      </script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;