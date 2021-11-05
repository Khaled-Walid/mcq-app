import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectName } from '../features/namecard/nameSlice';

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
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardContent >
          <Typography variant="h6" gutterBottom component="div">
            Hi {name},
            <br></br>
            The test is finished.
            <br></br>
            Your result:
            4 out of 5
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default NameCard;
