import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";

function Arcel({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Arcel</title>
    </Head>
    <Component {...pageProps} /></>
  );
} export default Arcel;
