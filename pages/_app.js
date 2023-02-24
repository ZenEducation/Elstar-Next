// import "@/styles/globals.css";
// import GlobalStyles from "@/styles/GlobalStyles";
// import type { AppProps } from 'next/app'
// import react from "react";
import React from "react";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
// import GlobalStyles from "../styles/GlobalStyles";
import "../index.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
