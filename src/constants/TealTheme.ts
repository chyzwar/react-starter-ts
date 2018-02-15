import createMuiTheme from "material-ui/styles/createMuiTheme";
import teal from "material-ui/colors/teal";
import grey from "material-ui/colors/grey";
import red from "material-ui/colors/red";


const TealTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: grey,
    error: red,
  },
});

export default TealTheme;
