import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const New = ({ quiz }) => {
  const navigate = useNavigate();

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleRadioChange = (id, selectedOption) => {
    setSelectedAnswers({ ...selectedAnswers, [id]: selectedOption });
  };

  const calculateScore = async (quiz, selectedAnswers) => {
    const questions = quiz.questions;
    let tempScore = 0;
    questions.forEach((question) => {
      let id = question.id.toString();
      const selectedAnswer = selectedAnswers[id];
      const correctAnswer = question.rightAnswer;

      if (selectedAnswer === correctAnswer) {
        tempScore++;
      }
    });
    alert("Your score is: " + tempScore);
    let body = {
      quiz: quiz,
      score: tempScore,
    };
    const res = await axios.post("http://localhost:8080/score", body);
    console.log(res.data);
    navigate("/score");
  };

  const handleSubmit = () => {
    calculateScore(quiz, selectedAnswers);
  };

  if (!quiz || !quiz.questions) {
    return <div>Loading...</div>;
  }

  const questions = quiz.questions;
  const renderedQuestions = questions.map((question, index) => {
    return (
      <div className="mb-2 p-2 bg-white" key={question.id}>
        <p>
          {index + 1}. {question.questionTitle}
        </p>
        <div className="options">
          <input
            type="radio"
            name={question.id}
            onChange={() => handleRadioChange(question.id, question.option1)}
          />
          &nbsp; {question.option1}
          <br />
          <input
            type="radio"
            name={question.id}
            onChange={() => handleRadioChange(question.id, question.option2)}
          />
          &nbsp; {question.option2}
          <br />
          <input
            type="radio"
            name={question.id}
            onChange={() => handleRadioChange(question.id, question.option3)}
          />
          &nbsp; {question.option3}
          <br />
          <input
            type="radio"
            name={question.id}
            onChange={() => handleRadioChange(question.id, question.option4)}
          />
          &nbsp; {question.option4}
          <br />
        </div>
      </div>
    );
  });

  return (
    <div className="body my-1 mx-2">
      <div className="first p-3">
        <p>
          <strong>Important Notice</strong>
        </p>
        <p>
          We are monitoring all the activity, so please do not change the tab.
        </p>
      </div>

      <div className="second">
        <div className="header px-2 py-1">
          <h3>{quiz.quizCategory} Online Examination</h3>
          <small>Programming category: {quiz.quizCategory}</small>
          <p>Number of Questions: 10</p>
        </div>
        <div className=" my-1">{renderedQuestions}</div>

        <div className="text-center third">
          <button className="btn btn-secondary" onClick={handleSubmit}>
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default New;
