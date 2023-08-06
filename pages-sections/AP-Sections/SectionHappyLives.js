import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Typography from "/components/Typography/Typography.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBlogs() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div className={classes.section}>
      <div>
        <GridContainer justify="center">
          <GridItem xs={10} sm={10} md={10}>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
                <img
                style={{height: "40px", width: "40px"}}
                src="/img/perritos/icons8-huella-de-perro-64 (1).png"
                alt="..."
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <Typography variant="h2" color="info" fontWeight="bold" textAlign="center">Vidas felices</Typography>
                <Typography variant="h2" color="info" fontWeight="regular" textAlign="center">Abre paso a tu propia felicidad</Typography>
            </GridItem>
                <GridContainer justify="center">
                  <GridItem xs={6} sm={6} md={3}>
                    <img
                      alt="..."
                      src="/img/examples/olu-eletu.jpg"
                      className={navImageClasses}
                    />
                    <img
                      alt="..."
                      src="/img/examples/clem-onojeghuo.jpg"
                      className={navImageClasses}
                      />
                    <img
                      alt="..."
                      src="/img/examples/cynthia-del-rio.jpg"
                      className={navImageClasses}
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={3}>
                    <img
                      alt="..."
                      src="/img/examples/mariya-georgieva.jpg"
                      className={navImageClasses}
                    />
                    <img
                      alt="..."
                      src="/img/examples/clem-onojegaw.jpg"
                      className={navImageClasses}
                    />
                  </GridItem>
                  <GridItem xs={8} sm={8} md={3}>
                    <img
                      alt="..."
                      src="/img/examples/olu-eletu.jpg"
                      className={navImageClasses}
                    />
                    <img
                      alt="..."
                      src="/img/examples/clem-onojeghuo.jpg"
                      className={navImageClasses}
                      />
                    <img
                      alt="..."
                      src="/img/examples/cynthia-del-rio.jpg"
                      className={navImageClasses}
                    />
                  </GridItem>
                </GridContainer>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
