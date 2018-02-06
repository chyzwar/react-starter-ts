import createMuiTheme from 'material-ui/styles/createMuiTheme';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';


const BlueTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
  },
});

export default BlueTheme;