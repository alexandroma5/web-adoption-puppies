import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Typography(props) {
  const classes = useStyles();
  const { children, color, fontWeight, textAlign, variant } = props;

  let textStyle;

  // Determinar el color del texto
  if (color === "primary") {
    textStyle += " " + classes.primaryText;
  } else if (color === "info") {
    textStyle += " " + classes.infoText;
  } else if (color === "success") {
    textStyle += " " + classes.successText;
  } else if (color === "warning") {
    textStyle += " " + classes.warningText;
  } else if (color === "danger") {
    textStyle += " " + classes.dangerText;
  } else if (color === "white") {
    textStyle += " " + classes.whiteText;
  }

  // Determinar el peso del texto
  if (fontWeight === "bold") {
    textStyle += " " + classes.boldText;
  } else if (fontWeight === "regular") {
    textStyle += " " + classes.regularText;
  }

  // Determinar la alineación del texto
  const textAlignStyle = { textAlign };

  // Determinar el tipo del texto
  const Element = variant || "div";

  return (
    <Element className={`${textStyle} ${classes.textAlign}`} style={textAlignStyle}>
      {children}
    </Element>
  );
}

Typography.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "white"]),
  fontWeight: PropTypes.oneOf(["bold", "regular"]),
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
  variant: PropTypes.string
};
