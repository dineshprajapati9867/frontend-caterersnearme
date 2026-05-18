import { Routes, Route,BrowserRouter } from "react-router-dom";

import CaterersPage from "./pages/CaterersPage";
import CatererDetailsPage from "./pages/CatererDetailsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>

    <BrowserRouter>
     <Navbar/>

    <Routes>
      <Route
        path="/"
        element={<CaterersPage />}
      />

      <Route
        path="/caterers/:id"
        element={<CatererDetailsPage />}
      />
    </Routes>
    <Footer/>
        </BrowserRouter>
            </>
  );
}

export default App;