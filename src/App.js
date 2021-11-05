import React from "react";
import "./App.css";
import NameCard from "./components/NameCard";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";
import { useSelector } from 'react-redux';
import { selectCurrentCard } from './features/cardSwitcherSlice';

function App() {
  const currentCard = useSelector(selectCurrentCard);
  return (
    <>
      {currentCard === "name" && <NameCard></NameCard>}
      {currentCard === "question" && <QuestionCard></QuestionCard>}
      {currentCard === "result" && <ResultCard></ResultCard>}
    </>
  );
}

export default App;
