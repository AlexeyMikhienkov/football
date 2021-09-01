import '../styles/globals.css'
import '../styles/components.scss'
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
