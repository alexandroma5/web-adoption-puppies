import { container } from "/styles/jss/nextjs-material-kit.js";

import imagesStyle from "/styles/jss/nextjs-material-kit/imagesStyles.js";

const sectionStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...container,
    textAlign: "center !important"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  link: {
    textDecoration: "none"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0",
    textAlign: "center"
  },
};

export default sectionStyle;
