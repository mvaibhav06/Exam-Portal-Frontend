import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ setData }) => {
  const navigate = useNavigate();

  const fetchData = async (category) => {
    const response = await axios.get(
      `http://localhost:8080/quiz/create?category=${category}`
    );
    setData(response.data);
  };

  const handleButtonClick = (category) => {
    fetchData(category);
    navigate("/quiz");
  };

  return (
    <div className="container bg-white my-2">
      <div className="row gap-2 justify-content-center ">
        <div className="col-4 quiz custom-margin my-2">
          <p>Java Basics</p>
          <br />
          <p>
            When we consider a Java Program, it can be defined as a collection
            of objects that communicate via invoking each other methods...
          </p>
          <br />
          <p>10 Questions &nbsp;&nbsp;&nbsp; Max Marks 100</p>
          <div className="text-center my-2">
            <button
              className="btn btn-primary mx-2"
              onClick={() => handleButtonClick("java")}
            >
              Start
            </button>
            <button className="btn btn-info">View</button>
          </div>
        </div>

        <div className="col-4 quiz my-2">
          <p>String Handling</p>
          <br />
          <p>
            The Java String is immutable which means it cannot be changed.
            Whenever we change any string, a new instance is created. For
            mutable...
          </p>
          <br />
          <p>10 Questions &nbsp;&nbsp;&nbsp; Max Marks 100</p>
          <div className="text-center my-2">
            <button
              className="btn btn-primary mx-2"
              onClick={() => handleButtonClick("string")}
            >
              Start
            </button>
            <button className="btn btn-info">View</button>
          </div>
        </div>

        <div className="col-4 quiz custom-margin">
          <p>Current Affairs</p>
          <br />
          <p>
            If you are aspiring for a government job or a position in a bank, it
            is essential for you to be well-versed in current affairs. To check
            this out...
          </p>
          <br />
          <p>10 Questions &nbsp;&nbsp;&nbsp; Max Marks 100</p>
          <div className="text-center my-2">
            <button
              className="btn btn-primary mx-2"
              onClick={() => handleButtonClick("current")}
            >
              Start
            </button>
            <button className="btn btn-info">View</button>
          </div>
        </div>

        <div className="col-4 quiz custom-margin">
          <p>Python Programming</p>
          <br />
          <p>
            This is a Python Programming quiz. This contains Questions related
            to Python.
          </p>
          <br />
          <p>10 Questions &nbsp;&nbsp;&nbsp; Max Marks 100</p>
          <div className="text-center my-2">
            <button
              className="btn btn-primary mx-2"
              onClick={() => handleButtonClick("python")}
            >
              Start
            </button>
            <button className="btn btn-info">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
