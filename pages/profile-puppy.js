import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Icon from "@material-ui/core/Icon";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Typography from "/components/Typography/Typography.js";
// page styles
import styles from "/styles/jss/nextjs-material-kit/mainPageStyle.js";
// icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Redeem from "@material-ui/icons/Redeem";

const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="primary"
        changeColorOnScroll={{
          height: 200,
          color: "danger"
        }}
        {...rest}
      />
      <Parallax small filter image="/img/perritos/unsplash-dog5.jpg" />
      <div className={classNames(classes.backgroundImageDiv, classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={11}>
                <Typography variant="h3" color="primary" textAlign="center">- ¿Quién soy? -</Typography>
                <Typography variant="h2" color="primary" fontWeight="bold" textAlign="center">LUCA</Typography>
                <div className={classes.divider}></div>
              </GridItem>
              <GridItem xs={11}>
                <GridContainer justify="center" alignItems="center">
                  <GridItem xs={6} sm={6} md={4}>
                    <img
                      style={{height: "auto", width: "100%"}}
                      src="/img/perritos/web-puppies1.jpg"
                      alt="..."
                      className={imageClasses}
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={4}>
                    <Typography variant="h3" color="primary" fontWeight="bold">
                      Mis datos
                    </Typography>
                    <Typography color="primary">Raza:</Typography>Golden
                    <Typography color="primary">Edad:</Typography>3 añitos
                    <Typography color="primary">Sexo:</Typography>Hembra
                    <Typography color="primary">Tamaño:</Typography>Pequeño
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12}>
                    <div className={classes.divider}></div>
                    <GridContainer justify="center" align="center">
                      <GridItem xs={12} sm={12} md={4} align="center">
                        <InfoArea
                          title="Proceso"
                          description="Inicia el proceso de adopción. Completa el formulario. Te llegará un correo para que puedas continuar con el último formulario. XXX se pondrá en contacto contigo por correo en las siguientes 48 horas de completado el formulario para programar una entrevista por videollamada contigo. Luego de la entrevista, en las siguientes 24 horas nos pondremos en contacto contigo para indicarte el resultado de tu solicitud de adopción y los pasos a seguir."
                          icon={Fingerprint}
                          iconColor="primary"
                          vertical
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4} align="center">
                        <InfoArea
                          title="Responsabilidad"
                          description="Adoptar un Wuf es asumir el compromiso de mantenerlo, alimentarlo, cuidarlo, respetarlo, darle cariño y velar por su salud. Asegúrate de estar preparado para esta responsabilidad antes de solicitar la adopción. Para ayudarte en el proceso, tu Wuf viene con un kit de adopción: alimento, cama, galletas, collar con plaquita, sesión de paseo, microchip de identifiación y antipulgas."
                          icon={VerifiedUser}
                          iconColor="primary"
                          vertical
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4} align="center">
                        <InfoArea
                          title="Seguimiento"
                          description="Nos pondremos en contacto con todos nuestros adoptantes al cumplirse la primera semana, mes, seis meses y año de  haberse producido la adopción de su Wuf. Se realizará vía medios digitales, pero WUF se reserva el derecho de poder solicitar una cita presencial cuando lo considere pertinente."
                          icon={Chat}
                          iconColor="primary"
                          vertical
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12} align="center">
                        <InfoArea
                          title="Kit de adopción"
                          description="¡Todas las adopciones tienen un kit de regalo que incluye: baño, cama, galletas, collar, plaquita de identificación, ropa, sesión de spa, microchip de identificación, antipulgas y mucho más"
                          icon={Redeem}
                          iconColor="primary"
                          vertical
                        />
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                  <Link href="/register-adopter">
                    <a className={classes.link}>
                      <Button round color="primary">
                        ADOPTAR
                      </Button>
                    </a>
                  </Link>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer whiteFont />
    </div>
  );
}
