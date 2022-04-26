import ReactDOM from "react-dom";

import App from "./App";
import { globalStyles } from "./styles/global";

function Root() {
  globalStyles();
  return <App />;
}

ReactDOM.render(<Root />, document.getElementById("root"));
