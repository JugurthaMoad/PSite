import { Routes, Route, Link } from "react-router-dom";

import Nav from "./components/navigation/Nav";
import Screen from "./components/Screen";
import Home from "./components/Home";
function App() {
  return (
    <Screen>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Screen>
  );
}

export default App;
