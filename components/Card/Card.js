import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/components/cardStyle.js";

const useStyles = makeStyles(styles);

export default function Card(props) {
  const classes = useStyles();
  const { className, children, plain, carousel, color, ...rest } = props;

  let colorStyle;

  if (color === "primary") {
    colorStyle = classes.cardPrimary;
  } else if (color === "info") {
    colorStyle = classes.cardInfo;
  } else if (color === "success") {
    colorStyle = classes.cardSuccess;
  } else if (color === "warning") {
    colorStyle = classes.cardWarning;
  } else if (color === "danger") {
    colorStyle = classes.cardDanger;
  }

  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined
  });

  return (
    <div className={`${cardClasses} ${colorStyle}`} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
  ]),
};
