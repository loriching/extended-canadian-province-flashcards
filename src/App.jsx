import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
import Form from './Form.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [side, setSide] = useState(0);
  const [correctness, setCorrectness] = useState("");

  const cardInfo = [
  {
      "province": "Alberta",
      "capital": "Edmonton"
  },
  {
      "province": "British Columbia",
      "capital": "Victoria"
  },
  {
      "province": "Manitoba",
      "capital": "Winnipeg"
  },
  {
      "province": "New Brunswick",
      "capital": "Fredericton"
  },
  {
      "province": "Newfoundland and Labrador",
      "capital": "St. John's"
  },
  {
      "province": "Nova Scotia",
      "capital": "Halifax"
  },
  {
      "province": "Ontario",
      "capital": "Toronto"
  },
  {
      "province": "Prince Edward Island",
      "capital": "Charlottetown"
  },
  {
      "province": "Quebec",
      "capital": "Quebec City"
  },
  {
      "province": "Saskatchewan",
      "capital": "Regina"
  },
  {
      "province": "Yukon",
      "capital": "Whitehorse"
  },
  {
      "province": "Nunavut",
      "capital": "Iqaluit"
  },
  {
      "province": "Northwest Territories",
      "capital": "Yellowknife"
  }
  ];

  const handleFlip = () => {
    setSide((prevSide) => (prevSide + 1) % 2);
    setCorrectness("");
  };

  const handlePrev = () => {
    if (count === 0) {
      setCount((prevCount) => (prevCount));
    }
    else {
      setCount((prevCount) => (prevCount - 1 + cardInfo.length) % cardInfo.length);
    }
    setSide(0);
    setCorrectness("");
  };

  const handleNext = () => {
    if (count === 12) {
      setCount((prevCount) => (prevCount));
    }
    else {
      setCount((prevCount) => (prevCount + 1) % cardInfo.length);
    }
    setSide(0);
    setCorrectness("");
  };

  const handleRandom = () => {
    let randomIndex = Math.floor(Math.random() * cardInfo.length);
    setCount(randomIndex);
    setSide(0);
    setCorrectness("");
  };

  const cardSides = {
    0: "province/territory",
    1: "capital city"
  }

  const handleCorrect = (resultMessage) => {
    if (resultMessage.toLowerCase().includes("incorrect")) {
      setSide(0);
    }
    else {
      setSide(1);
    }
    setCorrectness(resultMessage);
  }

  return (
    <>
      <div className="introduction">
        <h1>Learn the Canadian provinces/territories and capitals!</h1>
        <h4>Click each flashcard to flip between the provinces/territories and their capital cities. Click the buttons to navigate between flashcards. To quiz yourself, submit the answer into the box below and if it is correct the card will automatically flip over.</h4>
        <h5>These flashcards include the ten provinces and three territories of Canada, for <strong>13</strong> flashcards total.</h5>
      </div>
      <Card onClick={handleFlip} direction={side} flashcardInfo={cardInfo[count]} />
      
      <p className="flashcard-side-info">Currently seeing: {cardSides[side]}</p>

      <div className="card">
        <button onClick={handlePrev} disabled={count === 0}>
          Previous
        </button>

        <button onClick={handleNext} disabled={count === 12}>
          Next
        </button>

        <button onClick={handleRandom}>
          Random
        </button>
      </div>

      <div className="current-card-count">
        <p>{count+1} / 13</p>
      </div>

      <div>
        <Form correctAnswer={cardInfo[count].capital} onCorrect={handleCorrect}/>
      </div>

      <div>
        <p>{correctness}</p>
      </div>

    </>
  )
}

export default App;
