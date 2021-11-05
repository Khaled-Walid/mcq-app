import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Choice from "./Choice";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { gotoResult } from "../features/cardSwitcherSlice";
import { incrementScore, selectQuestions } from '../features/questioncard/questionSlice';

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

function QuestionCard(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = useSelector(selectQuestions);
  const shuffledQuestionsRef = useRef(shuffle(questions));
  const shuffledQuestions = shuffledQuestionsRef.current;
  const shuffledChoicesRef = useRef(shuffledQuestions.map((question) => {
    return shuffle(question.choices);
  }));
  const shuffledChoices = shuffledChoicesRef.current;

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
    if (e.target.value === shuffledQuestions[currentQuestionIndex].correct.toString()) {
      dispatch(incrementScore());
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

export default QuestionCard;
