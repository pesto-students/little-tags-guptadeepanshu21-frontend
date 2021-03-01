import { FormattedMessage, defineMessages, injectIntl } from "react-intl";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

const messages = defineMessages({
  helloWorld2: {
    id: 'app.hello_world2',
    defaultMessage: 'Hello World 2!',
  },
});

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
    </div>
  );
}

export default injectIntl(App);
