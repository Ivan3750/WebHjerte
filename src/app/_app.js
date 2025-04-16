import '../styles/globals.css'; // якщо є
import RouteLoader from "@/app/components/RouteLoader"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RouteLoader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
