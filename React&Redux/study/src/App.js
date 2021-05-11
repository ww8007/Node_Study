import logo from "./logo.svg";
import "./App.css";

const Head = (props) => <h1>{props.title}</h1>;

function App() {
  return <Head title="this is title"></Head>;
}

export default App;
