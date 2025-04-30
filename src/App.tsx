import "./App.css";
import Desktop from "./components/Desktop";

/* TODO:
  - Update Portfolio about!!!
  - utilize isMobileFriendly property
  - Fix Padding on top mobile view status bar
  - Fix view now link on Portfolio about.
  - Fix dead images in THE CORE post-mortem!
*/
function App() {
  // const loc = window.location;
  // const { pathname } = loc;

  // if (pathname !== "/") {
  //   const { protocol, host } = loc;

  //   window.location.href = `${protocol}//${host}/`;
  // }

  return (
    <div className="App">
      <Desktop />
    </div>
  );
}

export default App;
