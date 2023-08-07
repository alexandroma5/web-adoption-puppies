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

export default function SectionShop() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12}>
            <img
              style={{height: "40px", width: "40px"}}
              src="/img/perritos/icon-footprintblue.png"
              alt="..."
            />
          </GridItem>
          <GridItem xs={12}>
            <Typography variant="h2" color="primary" fontWeight="bold" textAlign="center">- Adquiere -</Typography>
            <Typography variant="h3" color="primary" textAlign="center">Productos de calidad a buen precio</Typography>
          </GridItem>
          <GridItem xs={10} sm={10} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                <img
                  src="/img/perritos/web-shop1.png"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <CardBody>
                <Typography variant="h4" color="primary" fontWeight="bold" textAlign="center">COMIDA</Typography>
                <Typography variant="h3" color="success" textAlign="center">S/. 10.00</Typography>
                <Button round color="danger">Comprar</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={10} sm={10} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                <img
                  src="/img/perritos/web-shop2.png"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <CardBody>
                <Typography variant="h4" color="primary" fontWeight="bold" textAlign="center">JUGUETE</Typography>
                <Typography variant="h3" color="success" textAlign="center">S/. 20.00</Typography>
                <Button round color="danger">Comprar</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={10} sm={10} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={8} className={classes.itemGrid}>
                <img
                  src="/img/perritos/web-shop3.png"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <CardBody>
                <Typography variant="h4" color="primary" fontWeight="bold" textAlign="center">ROPITA</Typography>
                <Typography variant="h3" color="success" textAlign="center">S/. 30.00</Typography>
                <Button round color="danger">Comprar</Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
