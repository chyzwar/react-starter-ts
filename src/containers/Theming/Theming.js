import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ThemeProvider } from 'react-jss';

const Theming = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

Theming.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.object.isRequired,
    type: PropTypes.string.isRequire,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

const mapStateToProps = ({ theme }) => ({
  theme,
});

export default connect(mapStateToProps)(Theming);

