import React, { useEffect } from 'react';
import AOS from 'aos';
import '../styles/globals.css';
import "../../public/fonts/cubano.css";

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