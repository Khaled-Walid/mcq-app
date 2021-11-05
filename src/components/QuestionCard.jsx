import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Choice from "./Choice";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { gotoResult } from "../features/cardSwitcherSlice";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "fit-content",
    margin: "10% auto",
  },
});

const questions = [
  { question: "1 + 1 + 1 = ?", choices: [1, 2, 3, 4], correct: 3 },
  { question: "2 + 2 + 2 = ?", choices: [2, 4, 6, 8], correct: 6 },
  { question: "3 + 3 + 3 = ?", choices: [9, 18, 20, 22], correct: 9 },
  { question: "4 + 4 + 4 = ?", choices: [10, 12, 13, 14], correct: 12 },
  { question: "5 + 5 + 5 = ?", choices: [1, 15, 40, 200], correct: 15 },
];

function shuffle(inputArray) {
  const array = [...inputArray];
  const shuffled = [];
  while (array.length !== 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    shuffled.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return shuffled;
}
const shuffledQuestions = shuffle(questions);
const shuffledChoices = shuffledQuestions.map((question) => {
  return shuffle(question.choices);
});

function NameCard(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResultScore, setUserResultScore] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const choiceList = shuffledChoices[currentQuestionIndex]?.map((choice) => {
    return (
      <Choice
        key={choice}
        onClick={submitAnswerHandler}
        value={choice}
      ></Choice>
    );
  });

  function submitAnswerHandler(e) {
    if (e.target.value === shuffledQuestions[currentQuestionIndex].correct) {
      setUserResultScore((prev) => {
        return prev + 1;
      });
    }
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => {
        return prev + 1;
      });
    } else {
      dispatch(gotoResult());
    }
  }
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              sx={{
                fontSize: "1.5em",
                color: "black",
              }}
            >
              {shuffledQuestions[currentQuestionIndex]?.question}
            </FormLabel>
            <RadioGroup aria-label="question" name="radio-buttons-group">
              {choiceList}
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  );
}

export default NameCard;
