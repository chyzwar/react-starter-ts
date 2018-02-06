import createMuiTheme from "material-ui/styles/createMuiTheme";
import teal from "material-ui/colors/teal";
import pink from "material-ui/colors/pink";
import red from "material-ui/colors/red";


const TealTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink,
    error: red,
  },
});

export default TealTheme;