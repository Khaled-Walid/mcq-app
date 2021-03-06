import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectName } from "../slices/nameSlice";
import {
  selectQuestions,
  selectScore,
} from "../slices/questionSlice";

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
  textField: {
    width: "100%",
  },
});

function ResultCard() {
  const classes = useStyles();
  const name = useSelector(selectName);
  const score = useSelector(selectScore);
  const questions = useSelector(selectQuestions);
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" gutterBottom component="div">
            Hi {name},<br/>
            The test is finished.
            <br/>
            Your result:&nbsp;
            {score} out of {questions.length}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ResultCard;
