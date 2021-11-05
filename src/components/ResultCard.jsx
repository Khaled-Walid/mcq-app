import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectName } from '../features/namecard/nameSlice';
import { selectQuestions, selectScore } from "../features/questioncard/questionSlice";

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
    width: "100%"
  }
});

function NameCard(props) {
  const classes = useStyles();
  const name = useSelector(selectName);
  const score = useSelector(selectScore);
  const questions = useSelector(selectQuestions);
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardContent >
          <Typography variant="h6" gutterBottom component="div">
            Hi {name},
            <br></br>
            The test is finished.
            <br></br>
            Your result:&nbsp;
            {score} out of {questions.length}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default NameCard;
