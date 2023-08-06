import React from "react";
// @material-ui/core components
// nodejs library that concatenates classes
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import Typography from "/components/Typography/Typography.js";


import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCatalogue() {
  const classes = useStyles();

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
            <Typography variant="h2" color="info" fontWeight="bold" textAlign="center">Todos nuestros peluditos</Typography>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <NavPills
                color="warning"
                alignCenter="true"
                tabs={[
                    {
                    tabButton: "Todos",
                    tabContent: (
                        <GridContainer>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card>
                            <CardHeader>
                            <img
                              style={{height: "auto", width: "100%"}}
                              src="/img/perritos/puppies-0001.jpg"
                              alt="..."
                              className={classes.imgCardTop}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" color="info" fontWeight="bold" textAlign="center">LUCA</Typography>
                                <Button round color="warning">Adoptar</Button>
                                <Button round color="danger">Apadrinar</Button>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card>
                            <CardHeader>
                            <img
                              style={{height: "auto", width: "100%"}}
                              src="/img/perritos/puppies-0001.jpg"
                              alt="..."
                              className={classes.imgCardTop}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" color="info" fontWeight="bold" textAlign="center">LUCA</Typography>
                                <Button round color="warning">Adoptar</Button>
                                <Button round color="danger">Apadrinar</Button>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card>
                            <CardHeader>
                            <img
                              style={{height: "auto", width: "100%"}}
                              src="/img/perritos/puppies-0001.jpg"
                              alt="..."
                              className={classes.imgCardTop}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" color="info" fontWeight="bold" textAlign="center">LUCA</Typography>
                                <Button round color="warning">Adoptar</Button>
                                <Button round color="danger">Apadrinar</Button>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card>
                            <CardHeader>
                            <img
                              style={{height: "auto", width: "100%"}}
                              src="/img/perritos/puppies-0001.jpg"
                              alt="..."
                              className={classes.imgCardTop}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" color="info" fontWeight="bold" textAlign="center">LUCA</Typography>
                                <Button round color="warning">Adoptar</Button>
                                <Button round color="danger">Apadrinar</Button>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card>
                            <CardHeader>
                            <img
                              style={{height: "auto", width: "100%"}}
                              src="/img/perritos/puppies-0001.jpg"
                              alt="..."
                              className={classes.imgCardTop}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" color="info" fontWeight="bold" textAlign="center">LUCA</Typography>
                                <Button round color="warning">Adoptar</Button>
                                <Button round color="danger">Apadrinar</Button>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card>
                            <CardHeader>
                            <img
                              style={{height: "auto", width: "100%"}}
                              src="/img/perritos/puppies-0001.jpg"
                              alt="..."
                              className={classes.imgCardTop}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" color="info" fontWeight="bold" textAlign="center">LUCA</Typography>
                                <Button round color="warning">Adoptar</Button>
                                <Button round color="danger">Apadrinar</Button>
                            </CardBody>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    )
                    },
                    {
                    tabButton: "Machos",
                    tabContent: (
                        <span>
                        <p>
                            Contenido de machos
                        </p>
                        </span>
                    )
                    },
                    {
                    tabButton: "Hembras",
                    tabContent: (
                        <span>
                        <p>
                            Contenido de hembras
                        </p>
                        </span>
                    )
                    },
                    {
                        tabButton: "Pequeños",
                        tabContent: (
                            <span>
                            <p>
                                Contenido de pequeños
                            </p>
                            </span>
                        )
                    },
                    {
                        tabButton: "Grandes",
                        tabContent: (
                            <span>
                            <p>
                                Contenido de grandes
                            </p>
                            </span>
                        )
                    },
                    {
                        tabButton: "Traviesos",
                        tabContent: (
                            <span>
                            <p>
                                Contenido de traviesos
                            </p>
                            </span>
                        )
                    },
                    {
                        tabButton: "Tranquilos",
                        tabContent: (
                            <span>
                            <p>
                                Contenido de tranquilos
                            </p>
                            </span>
                        )
                    }
                ]}
            />
            <Button color="warning">
              VER MÁS
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
