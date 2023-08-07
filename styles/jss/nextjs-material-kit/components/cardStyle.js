import {
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "/styles/jss/nextjs-material-kit.js";

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardCarousel: {
    overflow: "hidden",
  },
  cardPrimary: {
    // color: "#fff",
    background: primaryColor,
  },
  cardInfo: {
    // color: "#fff",
    background: infoColor,
  },
  cardSuccess: {
    // color: "#fff",
    background: successColor,
  },
  cardWarning: {
    // color: "#fff",
    background: warningColor,
  },
  cardDanger: {
    // color: "#fff",
    background: dangerColor,
  },
};

export default cardStyle;
