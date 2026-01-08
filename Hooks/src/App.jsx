import { useEffect, useState } from "react";

function Click() {
  let count = 0;

  function onClick() {
    count = count + 1;
  }
  return (
    <>
      <p>{count}/</p>
      <button onClick={onClick}>increase</button>
    </>
  );
}

function OnClick() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("increased");
  }, [count]);

  let click = () => {
    setCount(count + 1); // state which helps us to remember data in react
  };
  return (
    <>
      <h1>counter</h1>
      <p>{count}</p>
      <button onClick={click}>Increase</button>
      <p>{message}</p>
    </>
  );
}

// giving user input and displaying it

function Input() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const click = () => {
    setFullName(firstName + " " + lastName);
  };

  return (
    <>
      <h1>Giving user input and displaying it</h1>
      <input
        type="text"
        placeholder=" First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={click}>Enter</button>
      <p>{fullName}</p>
    </>
  );
}

// simple quizz app
function QuizzApp() {
  const questionsData = [
    {
      id: 1,
      question: "What is React?",
      options: [
        "A database",
        "A JavaScript library for building UI",
        "A backend framework",
        "An operating system",
      ],
      answerId: 1,
    },
    {
      id: 2,
      question: "Which hook is used for state in React?",
      options: ["useEffect", "useContext", "useState", "useRef"],
      answerId: 2,
    },
    {
      id: 3,
      question: "What does JSX stand for?",
      options: [
        "Java Syntax Extension",
        "JavaScript XML",
        "JSON XML",
        "Java Source Extension",
      ],
      answerId: 1,
    },
    {
      id: 4,
      question: "Why is key used in React lists?",
      options: [
        "For styling",
        "For API calls",
        "To uniquely identify elements",
        "To sort elements",
      ],
      answerId: 2,
    },
    {
      id: 5,
      question: "How do you pass props to a component?",
      options: [
        "<Comp props={data} />",
        "<Comp data={data} />",
        "<Comp(data)>",
        "<Comp = data />",
      ],
      answerId: 1,
    },
  ];
  const [questions, setQuestions] = useState(questionsData);
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedoption] = useState(null);
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  let currentquestion = questions[index];

  const onSubmit = (e) => {
    setSelectedoption(e);
    if (e === currentquestion.answerId) {
      setCount(count + 1);
    }
  };
  const OnNext = () => {
    if (index < questionsData.length - 1) {
      setIndex(index + 1);
      setSelectedoption(null);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div>
        <h1>Quiz Finished </h1>
        <p>
          Your Score: {count} / {questions.length}
        </p>
      </div>
    );
  }
  //let q = questionsData.map(()=>{questions[i].question})

  return (
    <div className="container">
      <h1>Quizz APP</h1>
      <div>
        <p className="question">{currentquestion.question}</p>
        <div>
          <ul className="options">
            {currentquestion.options.map((option, index) => {
              return (
                <li>
                  <button
                    key={index}
                    onClick={() => onSubmit(index)}
                    disabled={selectedOption != null}
                    className="option-button"
                  >
                    {option}
                  </button>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <button className="next-button" onClick={OnNext}>
          Next
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Click />
      <OnClick />
      <Input />
      <QuizzApp />
    </div>
  );
}

export default App;
