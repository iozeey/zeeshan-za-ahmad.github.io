import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
function Copyright(props) {
  const { title } = props;
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://cybros.dev/">
        {title}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, themeTitle } = props;

  return (
    <footer className={classes.root}>
      <hr />
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        {description}
      </Typography>
      <Copyright title={themeTitle} />
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  themeTitle: PropTypes.string,
};