import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import Typography from "/components/Typography/Typography.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionEvents() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <img
              style={{height: "40px", width: "40px"}}
              src="/img/perritos/icons8-huella-de-perro-64 (1).png"
              alt="..."
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Typography variant="h2" color="info" fontWeight="bold" textAlign="center">Eventos</Typography>
            <Typography variant="h2" color="info" fontWeight="regular" textAlign="center">Diversidad de cachorros</Typography>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/img/perritos/events-0001.png"
                    alt="First slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src="/img/perritos/events-0001.png"
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src="/img/perritos/events-0001.png"
                    alt="Third slide"
                    className="slick-image"
                  />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
