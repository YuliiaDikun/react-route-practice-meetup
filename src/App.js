import { Routes, Route, Navigate } from "react-router-dom";
import AllMeetups from "./pages/AllMeetup";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import Error from "./pages/Error";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/newmeetup" element={<NewMeetup />} />
        <Route path="/favotites" element={<Favorites />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Route>
    </Routes>
  );
}

export default App;
