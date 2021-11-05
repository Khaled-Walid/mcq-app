import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Choice from "./Choice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gotoResult } from "../features/cardSwitcherSlice";
import {
  incrementScore,
  selectQuestions,
} from "../features/questioncard/questionSlice";

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

function QuestionCard() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = useSelector(selectQuestions);
  const question = questions[currentQuestionIndex];

  const classes = useStyles();
  const dispatch = useDispatch();
  const choiceList = question.choices.map((choice) => {
    return (
      <Choice key={choice} onClick={handleSubmitAnswer} value={choice}></Choice>
    );
  });

  function handleSubmitAnswer(e) {
    if (e.target.value === question.correct.toString()) {
      dispatch(incrementScore());
    }
    if (currentQuestionIndex < questions.length - 1) {
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
              {question.question}
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
