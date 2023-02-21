import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Error from "./pages/Error";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/newmeetup" element={<NewMeetup />} />
        <Route path="/favotites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
