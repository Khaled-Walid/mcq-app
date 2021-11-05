import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

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
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardContent >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="Enter your name.."
            className={classes.textField}
          />
        </CardContent>
        <CardActions>
          <Button size="small">Take test</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default NameCard;
