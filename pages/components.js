import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionCatalogue from "/pages-sections/AP-Sections/SectionCatalogue.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionEvents from "/pages-sections/AP-Sections/SectionEvents.js";
import SectionClubs from "/pages-sections/AP-Sections/SectionClubs.js";
import SectionBlogs from "/pages-sections/AP-Sections/SectionBlogs.js";
import SectionHappyLives from "/pages-sections/AP-Sections/SectionHappyLives.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="ADÓPTAME"
        rightLinks={<HeaderLinks />}
        fixed
        color="info"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image="/img/perritos/bg4.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>ENCUENTRA TU
                <br/> 
                NUEVO AMIGO
                <br/>  
                DE 4 PATAS</h1>
              </div>
            </GridItem>
            <GridItem>
              <Button round color="info">
                QUIERO ADOPTAR
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCatalogue />
        <SectionEvents />
        <SectionClubs />
        <SectionBlogs />
        <SectionHappyLives />
      </div>
      <Footer background="#1381be" whiteFont />
    </div>
  );
}
