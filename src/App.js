import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from "./New";
import { useState } from "react";
import Result from "./Result";

function App() {
  const [quiz, setQuiz] = useState({});

  const setData = (data) => {
    setQuiz(data);
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setData={setData} />} />
          {quiz && <Route path="quiz" element={<New quiz={quiz} />} />}
          <Route path="/score" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
