import TODO from "./components/TODO";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <section
        className="p-5"
        style={{ background: "linear-gradient(to right,white,#007bff" }}
      >
        <Routes>
          <Route path="/" element={<TODO />} />
          <Route path="/signin" element={<Auth />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
