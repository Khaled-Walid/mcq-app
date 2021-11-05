import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Choice from "./Choice";

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
  { question: "5 + 5 + 5 = ?", choices: [1, 200, 15, 40], correct: 15 },
];

function NameCard(props) {
  const classes = useStyles();
  const choiceList = questions[0].choices.map((choice) => {
    return <Choice value={choice}></Choice>;
  });
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
              {questions[0].question}
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
