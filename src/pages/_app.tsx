import type { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import '../styles/vars.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
