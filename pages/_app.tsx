import { globalStyles } from "@styles/global";

export default function Application({ Component, pageProps }) {
  globalStyles();
  return <Component {...pageProps} />;
}
