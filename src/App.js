import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HealthPage from "./pages/HealthPage";
import SportPage from "./pages/SportPage";
import BusinessPage from "./pages/BusinessPage";
import SciencePage from "./pages/SciencePage";
import TechnologyPage from "./pages/TechnologyPage";
import EntertainmentPage from "./pages/EntertainmentPage";
import NotFoundPage from "./pages/NotFoundPage";
import { GlobalProvider } from "./context/GlobalContext";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import "./index.css";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="appContainer">
          <Header />
          <Navbar />
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/sport" element={<SportPage />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/science" element={<SciencePage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/entertainment" element={<EntertainmentPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
