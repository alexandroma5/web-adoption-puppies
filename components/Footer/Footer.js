import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Button from "/components/CustomButtons/Button.js";
import Favorite from "@material-ui/icons/Favorite";

import styles from "/styles/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont, background } = props;
  
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  // Agregar estilos para el color de fondo
  const backgroundStyle = { background };

  return (
    <footer className={footerClasses} style={backgroundStyle}> {/* Aplicar el estilo de color de fondo */}
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <div
                href="https://www.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                ADÓPTAME
              </div>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              &copy; {1900 + new Date().getYear()}, hecho con {" "}
              <Favorite className={classes.icon} /> por{" "} by Creative Tim.
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
  background: PropTypes.string // Nueva propiedad para el color de fondo.
};
