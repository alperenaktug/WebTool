import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Documents from "./Components/Documents";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
