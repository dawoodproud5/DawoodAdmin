import Home from "./components/home/Home";
import PrivateRoutes from "./PrivateRoutes";
import Admin from "./components/admin/Admin";
import Email from "./components/emails/Email";
import Clients from "./components/clients/Clients";
import NotFound from "./components/resuable/NotFound";
import Dashboard from "./components/dashboard/Dashboard";
import Candidates from "./components/candidates/Candidates";
import ClientDetail from "./components/clients/components/ClientDetail";
import CandidateDetail from "./components/candidates/components/CandidateDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/candidate/detail/:id" element={<CandidateDetail />} />
            <Route path="/client/detail/:id" element={<ClientDetail />} />
            <Route path="/candidates/info" element={<Candidates />} />
            <Route path="/clients/info" element={<Clients />} />
            <Route path="/clients/email" element={<Email />} />
            <Route path="/dashborad" element={<Dashboard />} />
            <Route path="/add/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
