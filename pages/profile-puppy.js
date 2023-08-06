import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardFooter from "/components/Card/CardFooter.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import Typography from "/components/Typography/Typography.js";

import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Redeem from "@material-ui/icons/Redeem";

const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
        <Header
            color="info"
            brand="ADÓPTAME"
            rightLinks={<HeaderLinks />}
            {...rest}
        />
        <div
            className={classes.pageHeader}
            // style={{
            // backgroundImage: "url('/img/perritos/bg4.jpg')",
            // backgroundSize: "cover",
            // backgroundPosition: "top center"
            // }}
        >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={10}>
                <GridContainer justify="center" alignItems="flex-start">
                <GridItem xs={6} sm={6} md={5}>
                  <img
                    style={{height: "auto", width: "100%"}}
                    src="/img/perritos/puppies-0001.jpg"
                    alt="..."
                  />
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                  <Typography 
                    variant="h4" color="info" fontWeight="bold">
                    LUCA
                  </Typography>
                  <Typography 
                    color="info">
                    Raza:
                  </Typography>            <p>Golden</p>
                  <Typography 
                    color="info">
                    Edad:
                  </Typography>            <p>3 añitos</p>
                  <Typography 
                    color="info">
                    Sexo:
                  </Typography>            <p>Hembra</p>
                  <Typography 
                    color="info">
                    Tamaño:
                  </Typography>            <p>Pequeño</p>
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <GridContainer justify="center" align="center">
                    <GridItem xs={12} sm={12} md={4} align="center">
                        <InfoArea
                        title="Proceso"
                        description="1. Inicia el proceso de adopción. Completa el formulario. Te llegará un correo para que puedas continuar con el último formulario. XXX se pondrá en contacto contigo por 
                        correo en las siguientes 48 horas de completado el formulario para programar una entrevista por videollamada contigo. Luego de la entrevista, en las siguientes 24 horas nos pondremos en contacto contigo para indicarte el resultado de tu solicitud de adopción y los pasos a seguir."
                        icon={Fingerprint}
                        iconColor="info"
                        vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} align="center">
                        <InfoArea
                        title="Responsabilidad"
                        description="Adoptar un Wuf es asumir el compromiso de mantenerlo, 
                        alimentarlo, cuidarlo, respetarlo, darle cariño y velar por su salud. Asegúrate de estar preparado para esta responsabilidad antes de solicitar la adopción. Para ayudarte en el proceso, tu Wuf viene con un kit de adopción: alimento, cama, galletas, collar con plaquita, sesión de paseo, microchip de identifiación y antipulgas."
                        icon={VerifiedUser}
                        iconColor="info"
                        vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4} align="center">
                        <InfoArea
                        title="Seguimiento"
                        description="Nos pondremos en contacto con todos nuestros adoptantes al cumplirse la primera semana, mes, seis meses y año de  haberse producido la adopción de su Wuf. Se realizará vía medios digitales, pero WUF se reserva el derecho de poder solicitar una cita presencial cuando lo considere pertinente."
                        icon={Chat}
                        iconColor="info"
                        vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} align="center">
                        <InfoArea
                        title="Kit de adopción"
                        description="¡Todas las adopciones tienen un kit de regalo que incluye: baño, cama, galletas, 
                        collar, plaquita de identificación, ropa, sesión de spa, microchip de identificación, 
                        antipulgas y mucho más"
                        icon={Redeem}
                        iconColor="info"
                        vertical
                        />
                    </GridItem>
                  </GridContainer>
                </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                  <Button round color="info">
                    ADOPTAR
                  </Button>
                </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
        <Footer background="#1381be" whiteFont />
      </div>
    </div>
  );
}
