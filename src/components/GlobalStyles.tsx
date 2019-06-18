import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { WithStyles } from "@material-ui/core/styles";

const decorate = withStyles({
  "@global": {
    "html": {
      height: "100%",
      minHeight: "100%",
      width: "100%",
      minWidth: "100%",
    },
    "body": {
      height: "100%",
      minHeight: "100%",
      width: "100%",
      minWidth: "100%",
    },
    "#root": {
      height: "100%",
      minHeight: "100%",
      width: "100%",
      minWidth: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
});

interface GlobalStylesProps {
  children?: React.ReactNode;
}

const DecoratedClass = decorate<GlobalStylesProps>(
  class GlobalStyles extends React.Component<GlobalStylesProps & WithStyles<"@global">> {
    public render() {
      return this.props.children || null;
    }
  },
);

export default DecoratedClass;
