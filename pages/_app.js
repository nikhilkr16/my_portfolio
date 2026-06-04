// Import styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <> 
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-7EDB8YZ6T4"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7EDB8YZ6T4');
        `}
      </script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
