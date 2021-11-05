import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

function Choice(props) {
  return (
      <FormControlLabel
        value={props.value}
        control={<Radio />}
        label={props.value}
      />
  );
}

export default Choice;