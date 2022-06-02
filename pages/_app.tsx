import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="dev-14fejrp1.us.auth0.com"
      clientId="WzUCtyZpa9Qx65ZBQWcu1DTxePsDrUiq"
      redirectUri={"http://localhost:3000/"}
    >
      <Navigation />
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
