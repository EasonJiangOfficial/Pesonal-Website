import React, { useEffect } from 'react'
import AOS from 'aos';
import { AppProps } from 'next/app'
import '../styles/globals.css'
import "../../public/fonts/cubano.css"
import { use } from 'react'

function MyApp({ Component, pageProps }:AppProps) {
  useEffect(() => {
    AOS.init({
    });
  },[]);

  return <Component {...pageProps} />
}

export default MyApp
