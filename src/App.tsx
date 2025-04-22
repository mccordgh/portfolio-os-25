import "./App.css";
import Desktop from "./components/Desktop";

function App() {
  const loc = window.location;
  const { pathname } = loc;

  if (pathname !== "/") {
    const { protocol, host } = loc;

    window.location.href = `${protocol}//${host}/`;
  }

  return (
    <div className="App">
      <Desktop />
    </div>
  );
}

export default App
