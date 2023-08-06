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
  const imageClasses = classNames(
    classes.imgCardTop
  );
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
            <Typography variant="h2" color="info" fontWeight="bold" textAlign="center">Blogs</Typography>
            <Typography variant="h2" color="info" fontWeight="regular" textAlign="center">Te enseñamos cómo cuidarlos</Typography>
          </GridItem>

          <GridItem xs={6} sm={6} md={3}>
            <Card>
              <img
                src="/img/perritos/puppies-0006.jpg"
                alt="..."
                className={imageClasses}
              />
              <CardBody>
                <h4 className={classes.cardTitle}>CURIOSIDADES DE LOS CACHORROS</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Velit sed sed duis aliquam ut. Augue arcu vitae vestibulum risus cursus at nunc ipsum.</p>
                <Button round color="danger">Leer</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <Card>
              <img
                src="/img/perritos/puppies-0005.jpg"
                alt="..."
                className={imageClasses}
              />
              <CardBody>
                <h4 className={classes.cardTitle}>POR QUÉ DEBEMOS VACUNARLOS</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Velit sed sed duis aliquam ut. Augue arcu vitae vestibulum risus cursus at nunc ipsum.</p>
                <Button round color="danger">Leer</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <Card>
              <img
                src="/img/perritos/puppies-0004.jpg"
                alt="..."
                className={imageClasses}
              />
              <CardBody>
                <h4 className={classes.cardTitle}>CÓMO ALIMENTAR A UN CACHORRITO</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Velit sed sed duis aliquam ut. Augue arcu vitae vestibulum risus cursus at nunc ipsum.</p>
                <Button round color="danger">Leer</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={3}>
            <Card>
              <img
                src="/img/perritos/puppies-0003.jpg"
                alt="..."
                className={imageClasses}
              />
              <CardBody>
                <h4 className={classes.cardTitle}>CÓMO CUIDAR A UN PELUDO MAYOR</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Velit sed sed duis aliquam ut. Augue arcu vitae vestibulum risus cursus at nunc ipsum.</p>
                <Button round color="danger">Leer</Button>
              </CardBody>
            </Card>
          </GridItem>
         </GridContainer>
         </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
