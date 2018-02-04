import React from 'react';

import { connect } from 'react-redux';
import { ThemeProvider } from 'react-jss';

const ThemeProvider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);


const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps)(ThemeProvider);

