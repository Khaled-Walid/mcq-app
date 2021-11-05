import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { setName, selectName } from "../features/namecard/nameSlice";
import { gotoQuestion } from "../features/cardSwitcherSlice";

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

function NameCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  const handleChange = (e) => dispatch(setName(e.target.value));
  const handleClick = () => dispatch(gotoQuestion());

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="Enter your name.."
            className={classes.textField}
            onChange={handleChange}
            value={name}
          />
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Take test
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default NameCard;
