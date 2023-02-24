import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store";
import Theme from "components/template/Theme";
// import Layout from "components/layout";
import mockServer from "../mock";
import appConfig from "configs/app.config";
import "../locales";
import dynamic from "next/dynamic";

const environment = process.env.NODE_ENV;

if (appConfig.enableMock) {
  mockServer({ environment });
}
function App() {
  const Layout = dynamic(() => import("components/layout"), {
    ssr: false,
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Theme>
            <Layout />
          </Theme>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
