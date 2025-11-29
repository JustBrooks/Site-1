import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./pages/Welcome";
import MiniGame from "./pages/MiniGame";
import Profile from "./pages/Profile";
import Challenges from "./pages/Challenges";
import Shop from "./pages/Shop";


function App() {
  return (
    <Router>
      <NavBar />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/minigame" element={<MiniGame />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
