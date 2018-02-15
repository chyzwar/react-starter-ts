import blue from "material-ui/colors/blue";
import red from "material-ui/colors/red";
import grey from "material-ui/colors/grey";
import createMuiTheme from "material-ui/styles/createMuiTheme";

const BlueTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey,
    error: red,
  },
});

export default BlueTheme;
