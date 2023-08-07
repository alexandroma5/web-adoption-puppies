import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Typography from "/components/Typography/Typography.js";
// section styles
import styles from "/styles/jss/nextjs-material-kit/sectionStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBlogs() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgCardTop
  );
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={11}>
            <GridContainer>
            <GridItem xs={12}>
              <img
                style={{height: "40px", width: "40px"}}
                src="/img/perritos/icon-footprintblue.png"
                alt="..."
              />
            </GridItem>
            <GridItem xs={12}>
              <Typography variant="h2" color="primary" fontWeight="bold" textAlign="center">- Blogs -</Typography>
              <Typography variant="h3" color="primary" textAlign="center">Aprende a cómo cuidarlos</Typography>
            </GridItem>
            <GridItem xs={6} sm={6} md={3}>
              <Card color="info">
                <img
                  src="/img/perritos/web-blogs1primary.jpg"
                  alt="..."
                  className={imageClasses}
                />
                <CardBody>
                  <Typography variant="h4" color="primary" fontWeight="bold" textAlign="center">CURIOSIDADES QUÉ NO SABÍAS</Typography>
                  <Typography variant="P" color="primary" textAlign="center">Lorem ipsum dolor sit amet consectetur. Velit sed sed duis aliquam ut. Augue arcu vitae vestibulum risus cursus at nunc ipsum.</Typography>
                  <Button round color="danger">Leer</Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={6} sm={6} md={3}>
              <Card color="info">
                <img
                  src="/img/perritos/web-blogs1warning.jpg"
                  alt="..."
                  className={imageClasses}
                />
                <CardBody>
                  <Typography variant="h4" color="primary" fontWeight="bold" textAlign="center">¿POR QUÉ VACUNARLOS?</Typography>
                  <Typography variant="P" color="primary" textAlign="center">Lorem ipsum dolor sit amet consectetur. Velit sed sed duis aliquam ut. Augue arcu vitae vestibulum risus cursus at nunc ipsum.</Typography>
                  <Button round color="danger">Leer</Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={6} sm={6} md={3}>
              <Card color="info">
                <img
                  src="/img/perritos/web-blogs1danger.jpg"
                  alt="..."
                  className={imageClasses}
                />
                <CardBody>
                  <Typography variant="h4" color="primary" fontWeight="bold" textAlign="center">¿CUIDADOS PARA UN CACHORRO?</Typography>
                  <Typography variant="P" color="primary" textAlign="center">Lorem ipsum dolor sit amet consectetur. Velit sed sed duis aliquam ut. Augue arcu vitae vestibulum risus cursus at nunc ipsum.</Typography>
                  <Button round color="danger">Leer</Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={6} sm={6} md={3}>
              <Card color="info">
                <img
                  src="/img/perritos/web-blogs1success.jpg"
                  alt="..."
                  className={imageClasses}
                />
                <CardBody>
                  <Typography variant="h4" color="primary" fontWeight="bold" textAlign="center">¿QUÉ HACER CON TU CACHORRO?</Typography>
                  <Typography variant="P" color="primary" textAlign="center">Lorem ipsum dolor sit amet consectetur. Velit sed sed duis aliquam ut. Augue arcu vitae vestibulum risus cursus at nunc ipsum.</Typography>
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
