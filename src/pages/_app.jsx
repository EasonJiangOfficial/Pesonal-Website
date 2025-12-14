import React, { useEffect } from 'react';
import AOS from 'aos';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
  <>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp;