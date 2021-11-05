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
import { Button, CardActions } from "@mui/material";

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
  const [selectedChoice, setSelectedChoice] = useState(null);
  const questions = useSelector(selectQuestions);
  const question = questions[currentQuestionIndex];
  const classes = useStyles();
  const dispatch = useDispatch();

  const choiceList = question.choices.map((choice) => {
    return (
      <Choice
        key={choice}
        onClick={handleChoiceClick}
        value={choice}
        checked={selectedChoice === choice.toString()}
      ></Choice>
    );
  });

  function handleNext() {
    if (selectedChoice === question.correct.toString()) {
      dispatch(incrementScore());
    }
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedChoice(null);
      setCurrentQuestionIndex((prev) => {
        return prev + 1;
      });
    } else {
      dispatch(gotoResult());
    }
  }
  function handleChoiceClick(e) {
    setSelectedChoice(e.target.value);
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
        <CardActions>
          <Button size="small" onClick={handleNext}>
            Next
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default QuestionCard;
