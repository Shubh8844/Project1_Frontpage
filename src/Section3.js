import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section3.css";
import CreateIcon from "@material-ui/icons/Create";
import SettingsIcon from "@material-ui/icons/Settings";
import SignalCellular4BarIcon from "@material-ui/icons/SignalCellular4Bar";
import { Header, Button, Popup, Grid } from "semantic-ui-react";

export default function Section1() {
  return (
    <Container className="section3" fluid>
      <Row>
        <Col xs={1} ls={1} md={1}></Col>
        <Col className="section3__1" xs={4} ls={4} md={4}>
          <h1 className="col1__sec3title">Services</h1>
        </Col>
        <Col className="col__sec32" xs={6} ls={6} md={6}>
          <div className="col2__sec3images">
            <Popup
              position="right center"
              trigger={
                <CreateIcon
                  className="col2__sec3indimg"
                  style={{ color: "white" }}
                />
              }
              flowing
              hoverable
            >
              <Container className="col2__sec3hidsection" fluid>
                <Header as="h4">Web Design</Header>
                <br />
                <span>
                  'Web design encompasses many different skills and disciplines"
                </span>
                <p>
                  'Web design encompasses many different skills and disciplines"
                </p>
              </Container>
            </Popup>

            <Popup
              position="right center"
              trigger={
                <SettingsIcon
                  className="col2__sec3indimg"
                  style={{ color: "white" }}
                />
              }
              flowing
              hoverable
            >
              <Container className="col2__sec3hidsection2" fluid>
                <Header as="h4">Settings</Header>
                <br />
                <span>
                  'Web design encompasses many different skills and disciplines"
                </span>
                <p>
                  'Web design encompasses many different skills and disciplines"
                </p>
              </Container>
            </Popup>

            <Popup
              position="right center"
              trigger={
                <SignalCellular4BarIcon
                  className="col2__sec3indimg"
                  style={{ color: "white" }}
                />
              }
              flowing
              hoverable
            >
              <Container className="col2__sec3hidsection3" fluid>
                <Header as="h4">Web Network</Header>
                <br />
                <span>
                  'Web design encompasses many different skills and disciplines"
                </span>
                <p>
                  'Web design encompasses many different skills and disciplines"
                </p>
              </Container>
            </Popup>
          </div>
        </Col>

        <Col xs={1} ls={1} md={1}></Col>
      </Row>
    </Container>
  );
}
