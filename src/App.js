import React, { useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import NameCard from "./components/NameCard";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";

function App() {
  const [currentCard, setCurrentCard] = useState("name");

  function cardSwitcher(card) {
    setCurrentCard(card);
  }
  return (
    <>
      {currentCard === "name" && <NameCard></NameCard>}
      {currentCard === "question" && <QuestionCard></QuestionCard>}
      {currentCard === "result" && <ResultCard></ResultCard>}
    </>
  );
}

export default App;
