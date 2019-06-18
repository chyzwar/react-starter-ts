import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const BlueTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey,
    error: red,
  },
});

export default BlueTheme;
