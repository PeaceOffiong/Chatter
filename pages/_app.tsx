import "tailwindcss/tailwind.css";
import { AppProvider } from "../context/globalContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Component {...pageProps} />;
      </AppProvider>
    </>
  );
}

export default MyApp;
