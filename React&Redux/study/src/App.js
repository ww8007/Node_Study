import logo from "./logo.svg";
import "./App.css";

const data = [
  { title: "Node", value: 0 },
  { title: "React", value: 1 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {data.map((id) => {
        <>
          <p key={id.value}>{id.title}</p>
        </>;
      })}
    </div>
  );
}

export default App;
