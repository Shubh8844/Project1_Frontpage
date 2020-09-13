import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section1.css";
import { Avatar } from "@material-ui/core";

export default function Section1() {
  return (
    <Container className="section1" fluid>
      <Row>
        <Col xs={1} ls={1} md={1}></Col>
        <Col className="col__sec11" xs={4} ls={4} md={4}>
          <h1 className="col1__sec1title">About Us</h1>
        </Col>
        <Col className="col__sec12" xs={2} ls={2} md={2}>
          <div className="col2__sec1heading">
            <Avatar
              className="ceo__sec1image"
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM1q99ZLLIiDZYf8MAogmyxW8q_Y4wXC127w&usqp=CAU"
            />
            <br />
            Linda,CEO
          </div>
        </Col>
        <Col className="col__sec13" xs={4} ls={4} md={4}>
          <p>
            Karma is a free HTML5 template based on bootstrap responsive
            framework.Feel free to use the layout for any website.
          </p>

          <p>
            Karma es una plantilla HTML5 gratuita basada en bootstrap marco
            receptivo Siéntase libre de usar el diseño para cualquier sitio web.
          </p>

          <p>
            Karma est un modèle HTML5 gratuit basé sur le bootstrap cadre
            réactif.N'hésitez pas à utiliser la mise en page pour n'importe quel
            site Web.
          </p>
        </Col>
        <Col xs={1} ls={1} md={1}></Col>
      </Row>
    </Container>
  );
}
