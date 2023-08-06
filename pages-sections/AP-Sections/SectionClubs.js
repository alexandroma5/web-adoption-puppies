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

export default function SectionClubs() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <img
              style={{height: "40px", width: "40px"}}
              src="/img/perritos/icons8-huella-de-perro-64 (1).png"
              alt="..."
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Typography variant="h2" color="info" fontWeight="bold" textAlign="center">Clubes</Typography>
            <Typography variant="h2" color="info" fontWeight="regular" textAlign="center">Intégrate a un club e interactúa</Typography>
          </GridItem>
          <GridItem xs={10} sm={10} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                <img
                  src="/img/faces/avatar.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <CardBody>
                <Button round color="warning">Ser parte</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={10} sm={10} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                <img
                  src="/img/faces/christian.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <CardBody>
                <Button round color="warning">Ser parte</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={10} sm={10} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                <img
                  src="/img/faces/kendall.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <CardBody>
                <Button round color="warning">Ser parte</Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
