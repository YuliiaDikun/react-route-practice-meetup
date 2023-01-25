import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/newmeetup" element={<NewMeetup />} />
        <Route path="/favotites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
