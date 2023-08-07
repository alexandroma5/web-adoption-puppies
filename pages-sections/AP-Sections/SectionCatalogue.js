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
import NavPills from "/components/NavPills/NavPills.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import Typography from "/components/Typography/Typography.js";
// section styles
import styles from "/styles/jss/nextjs-material-kit/sectionStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCatalogue() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
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
            <Typography variant="h2" color="primary" fontWeight="bold" textAlign="center">- Explora -</Typography>
            <Typography variant="h3" color="primary" textAlign="center">Todos nuestros cachorros</Typography>
          </GridItem>
          <GridItem xs={12}>
            <NavPills
              color="warning"
              tabs={[
                  {
                    tabButton: "Todos",
                    tabContent: (
                      <GridContainer>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card color="primary">
                            <CardHeader>
                            <img
                              src="/img/perritos/web-puppies1.jpg"
                              alt="..."
                              className={imageClasses}
                            />
                            </CardHeader>
                            <CardBody>
                              <Typography variant="h4" fontWeight="bold" textAlign="center">LUCA</Typography>
                              <Link href="/profile-puppy">
                                <a className={classes.link}>
                                  <Button round color="warning">Adoptar</Button>
                                </a>
                              </Link>
                              <Link href="/register-sponsor">
                                <a className={classes.link}>
                                  <Button round color="danger">Apadrinar</Button>
                                </a>
                              </Link>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card color="info">
                            <CardHeader>
                            <img
                              src="/img/perritos/web-puppies1.jpg"
                              alt="..."
                              className={imageClasses}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" fontWeight="bold" textAlign="center">SHIWA</Typography>
                                <Link href="/profile-puppy">
                                  <a className={classes.link}>
                                    <Button round color="warning">Adoptar</Button>
                                  </a>
                                </Link>
                                <Link href="/register-sponsor">
                                  <a className={classes.link}>
                                    <Button round color="danger">Apadrinar</Button>
                                  </a>
                                </Link>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card color="primary">
                            <CardHeader>
                            <img
                              src="/img/perritos/web-puppies1.jpg"
                              alt="..."
                              className={imageClasses}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" fontWeight="bold" textAlign="center">TOMY</Typography>
                                <Link href="/profile-puppy">
                                  <a className={classes.link}>
                                    <Button round color="warning">Adoptar</Button>
                                  </a>
                                </Link>
                                <Link href="/register-sponsor">
                                  <a className={classes.link}>
                                    <Button round color="danger">Apadrinar</Button>
                                  </a>
                                </Link>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card color="info">
                            <CardHeader>
                            <img
                              src="/img/perritos/web-puppies1.jpg"
                              alt="..."
                              className={imageClasses}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" fontWeight="bold" textAlign="center">LIN</Typography>
                                <Link href="/profile-puppy">
                                  <a className={classes.link}>
                                    <Button round color="warning">Adoptar</Button>
                                  </a>
                                </Link>
                                <Link href="/register-sponsor">
                                  <a className={classes.link}>
                                    <Button round color="danger">Apadrinar</Button>
                                  </a>
                                </Link>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card color="primary">
                            <CardHeader>
                            <img
                              src="/img/perritos/web-puppies1.jpg"
                              alt="..."
                              className={imageClasses}
                            />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" fontWeight="bold" textAlign="center">DANY</Typography>
                                <Link href="/profile-puppy">
                                  <a className={classes.link}>
                                    <Button round color="warning">Adoptar</Button>
                                  </a>
                                </Link>
                                <Link href="/register-sponsor">
                                  <a className={classes.link}>
                                    <Button round color="danger">Apadrinar</Button>
                                  </a>
                                </Link>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={3}>
                          <Card color="info">
                            <CardHeader>
                            <img
                              src="/img/perritos/web-puppies1.jpg"
                              alt="..."
                              className={imageClasses}
                            />
                            </CardHeader>
                            <CardBody>
                              <Typography variant="h4" fontWeight="bold" textAlign="center">DEUS</Typography>
                              <Link href="/profile-puppy">
                                <a className={classes.link}>
                                  <Button round color="warning">Adoptar</Button>
                                </a>
                              </Link>
                              <Link href="/register-sponsor">
                                <a className={classes.link}>
                                  <Button round color="danger">Apadrinar</Button>
                                </a>
                              </Link>
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12}>
                          <Button color="warning">
                            VER MÁS
                          </Button>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Machos",
                    tabContent: (
                      <span>
                        <p>
                          Contenido.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Hembras",
                    tabContent: (
                      <span>
                        <p>
                          Contenido.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Pequeños",
                    tabContent: (
                      <span>
                        <p>
                          Contenido.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Grandes",
                    tabContent: (
                      <span>
                        <p>
                          Contenido.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Traviesos",
                    tabContent: (
                      <span>
                        <p>
                          Contenido.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Tranquilos",
                    tabContent: (
                      <span>
                        <p>
                          Contenido.
                        </p>
                      </span>
                    )
                  }
              ]}
              alignCenter={true}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
