import { useEffect } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { images } from "./components/data";
import { preloadImages } from "./components/utils";
import { globalStyles } from "./styles/global";

function Root() {
  globalStyles();

  useEffect(() => {
    preloadImages(images);
  }, []);

  return <App />;
}

ReactDOM.render(<Root />, document.getElementById("root"));
