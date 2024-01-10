import { useState, useEffect } from "react";
import axios from "axios";

const Result = () => {
  const [scores, setScores] = useState({});

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/score");
    setScores(response.data);
  };

  useEffect(() => {
    fetchData();
    console.log(scores);
  }, []);

  const renderedScores = Array.isArray(scores)
    ? scores.map((score) => {
        return (
          <div className="bg-white my-2 p-2" key={score.id}>
            <p style={{ fontSize: "2rem" }}>{score.quiz.quizCategory}</p>
            <p>
              <small>
                Attempted Date:{" "}
                {new Date(score.quiz.quizDate).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                })}
              </small>
            </p>
            <p>
              This is a {score.quiz.quizCategory} quiz. This contains questions
              related to {score.quiz.quizCategory}
            </p>
            <strong>Marks Obtained: {score.score}</strong>
            <br />
            <strong>Max Marks: 10</strong>
          </div>
        );
      })
    : null;

  return (
    <div className="container">
      <p
        style={{ fontSize: "2rem", display: "block" }}
        className="my-2 p-2 bg-white"
      >
        You have attempted the following quiz
      </p>
      {renderedScores}
    </div>
  );
};

export default Result;
