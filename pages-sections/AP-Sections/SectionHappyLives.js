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
import Typography from "/components/Typography/Typography.js";
// section styles
import styles from "/styles/jss/nextjs-material-kit/sectionStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBlogs() {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={10} sm={10} md={10}>
            <GridContainer>
              <GridItem xs={12}>
              <img
                style={{height: "40px", width: "40px"}}
                src="/img/perritos/icon-footprintblue.png"
                alt="..."
              />
              </GridItem>
              <GridItem xs={12}>
                <Typography variant="h2" color="primary" fontWeight="bold" textAlign="center">- Vidas felices -</Typography>
                <Typography variant="h3" color="primary" textAlign="center">¿Qué tanta felicidad les puede traer un cachorro?</Typography>
                <div className={classes.divider}></div>
              </GridItem>
              <GridContainer justify="center">
                <GridItem xs={6} sm={6} md={3}>
                    <img
                      alt="..."
                      src="/img/perritos/happies/unsplash-happies1.jpg"
                      className={navImageClasses}
                    />
                    <img
                      alt="..."
                      src="/img/perritos/happies/unsplash-happies2.jpg"
                      className={navImageClasses}
                      />
                </GridItem>
                <GridItem xs={6} sm={6} md={3}>
                    <img
                      alt="..."
                      src="/img/perritos/happies/unsplash-happies4.jpg"
                      className={navImageClasses}
                    />
                    <img
                      alt="..."
                      src="/img/perritos/happies/unsplash-happies3.jpg"
                      className={navImageClasses}
                    />
                </GridItem>
                <GridItem xs={8} sm={8} md={3}>
                    <img
                      alt="..."
                      src="/img/perritos/happies/unsplash-happies5.jpg"
                      className={navImageClasses}
                    />
                    <img
                      alt="..."
                      src="/img/perritos/happies/unsplash-happies6.jpg"
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
