import "./App.css";
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";
import Home from "./pages/Home";
import UpdateContact from "./components/UpdateContact/UpdateContact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./components/ContactDetails/ContactDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<UpdateContact />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
