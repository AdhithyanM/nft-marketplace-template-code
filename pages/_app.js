import "../styles/globals.css";

// INTERNAL IMPORT
import { Footer, NavBar } from "../components/components-index";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
