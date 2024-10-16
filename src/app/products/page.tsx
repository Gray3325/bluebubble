"use client"; //新增這行才能使用套件

import NavBar from "../../api/navbar";
import styles from "../page.module.css";

// import DropdownMenu from "./dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from "./selectComponent";

export default function Products() {
    
  return (
    <div className={styles.page}>
      <NavBar title='BLUEBUBBLE' navClass={styles.navbar} />
      <div className={styles.product}></div>
      <div className={styles.main}>
        <Container>
          <Row>
            <Col>
              <Select />
            </Col>
            <Col xs={8}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
