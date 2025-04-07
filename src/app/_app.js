import '../styles/globals.css'; // якщо є
import RouteLoader from '../components/RouteLoader';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RouteLoader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
