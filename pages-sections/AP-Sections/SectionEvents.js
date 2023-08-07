import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import Typography from "/components/Typography/Typography.js";
// section styles
import styles from "/styles/jss/nextjs-material-kit/sectionStyle.js";

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
        <GridContainer>
          <GridItem xs={12}>
            <img
              style={{height: "40px", width: "40px"}}
              src="/img/perritos/icon-footprintblue.png"
              alt="..."
            />
          </GridItem>
          <GridItem xs={12}>
            <Typography variant="h2" color="primary" fontWeight="bold" textAlign="center">- Navega -</Typography>
            <Typography variant="h3" color="primary" textAlign="center">Diversos eventos a tu alcance</Typography>
          </GridItem>
          <GridItem xs={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/img/perritos/web-events1primary.jpg"
                    alt="First slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src="/img/perritos/web-events1danger.jpg"
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src="/img/perritos/web-events1success.jpg"
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
