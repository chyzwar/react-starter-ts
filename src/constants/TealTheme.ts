import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";
import red from "@material-ui/core/colors/red";

const TealTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: grey,
    error: red,
  },
});

export default TealTheme;
