import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionCatalogue from "/pages-sections/AP-Sections/SectionCatalogue.js";
import SectionEvents from "/pages-sections/AP-Sections/SectionEvents.js";
import SectionClubs from "/pages-sections/AP-Sections/SectionClubs.js";
import SectionShop from "/pages-sections/AP-Sections/SectionShop.js";
import SectionBlogs from "/pages-sections/AP-Sections/SectionBlogs.js";
import SectionHappyLives from "/pages-sections/AP-Sections/SectionHappyLives.js";
// page styles
import styles from "/styles/jss/nextjs-material-kit/mainPageStyle.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="primary"
        changeColorOnScroll={{
          height: 400,
          color: "danger"
        }}
        {...rest}
      />
      <Parallax image="/img/perritos/unsplash-dog5.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>ENCUENTRA TU<br/>CAHORRO IDEAL</h1>
                <h2 className={classes.subtitle}>Anímate y cambia tu vida</h2>
                <br/>
              </div>
            </GridItem>
            <GridItem>
              <Button round color="primary">
                QUIERO ADOPTAR
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.backgroundImageDiv, classes.main, classes.mainRaised)}>
        <SectionCatalogue />
        <SectionEvents />
        <SectionClubs />
        <SectionShop />
        <SectionBlogs />
        <SectionHappyLives />
      </div>
      <Footer />
    </div>
  );
}
