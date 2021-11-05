import React from "react";
import NameCard from "./features/components/NameCard";
import QuestionCard from "./features/components/QuestionCard";
import ResultCard from "./features/components/ResultCard";
import { useSelector } from 'react-redux';
import { selectCurrentCard } from './features/slices/cardSwitcherSlice';

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
