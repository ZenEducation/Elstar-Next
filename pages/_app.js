import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "../index.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store";
import Theme from "components/template/Theme";
import mockServer from "../mock";
import appConfig from "configs/app.config";
import "../locales";

const environment = process.env.NODE_ENV;
if (appConfig.enableMock) {
  mockServer({ environment });
}
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Theme>
            <Component {...pageProps} />
          </Theme>
        </PersistGate>
      </Provider>
    </>
  );
}
