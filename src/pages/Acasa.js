import React from 'react';
import '../styles/Acasa.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Food1 from '../assets/food1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Acasa() {
  return (
    <div className='home'>
      <Container id='container'>
        <Row>
          <Col id='col1' >
            <div className='headerContainer'>
              <h3 className='h3Txt'> Bun venit la </h3>
              <h1 className='h1Home'> Domeniile Panciu </h1>
              <p className='pRestaurant'> Restaurant Spaniol din Copou</p>
              <Link to="/meniu"> <Button variant="outline-warning" class='btnComanda'> Comandă acum </Button> </Link>
            </div>
          </Col>
          <Col id='col'>< img id='food1Img' src={Food1} alt="Food" /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Acasa;





