import blue from "material-ui/colors/blue";
import pink from "material-ui/colors/pink";
import red from "material-ui/colors/red";
import createMuiTheme from "material-ui/styles/createMuiTheme";

const BlueTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
  },
});

export default BlueTheme;
