import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNav from "./components/Layout/MainNav";
function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/newmeetup" element={<NewMeetup />} />
        <Route path="/favotites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
