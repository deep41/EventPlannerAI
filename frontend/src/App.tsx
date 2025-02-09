import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import "./App.css";
import { fetchMessage } from "./lib/api";
import { Route, Routes } from "react-router";

const App = () => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchMessage()
      .then((data) => setMessage(data.message))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};


const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default App;