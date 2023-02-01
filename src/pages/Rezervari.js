import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RestaurantHall from '../assets/restaurantHall.jpg';
import '../styles/Rezervari.css';

function Rezervari() {
  return (
    <div>
      <Container className='rezervariContainer' >
        <Row className='rowRezervari'>
          <Col className='form'>
            <h1 className='h1Rezervari'> Rezervă o masă </h1>
            <Form>
              {/* Date nume prenume persoana */}
              <Row className='name'>
                <Form.Group as={Col} controlId='formGridName'>
                  <Form.Control placeholder='Nume' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridPrenume'>
                  <Form.Control placeholder='Prenume' />
                </Form.Group>
              </Row>
              <br />
              {/* Date de contact persoana */}
              <Row className='telefon'>
                <Form.Group as={Col} controlId='formGridTelefon'>
                  <Form.Control placeholder='Telefon' />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Control type='email' placeholder='Email' />
                </Form.Group>
              </Row>
              <br />
              {/* Date rezervare */}
              <Row className='rezervare'>
                <Form.Group as={Col} controlId='formGriNrPersoane'>
                  <Form.Select defaultValue='Nr. de persoane'>
                    <option> Nr. de persoane </option>
                    <option> 1 </option>
                    <option> 2 </option>
                    <option> 3 </option>
                    <option> 4 </option>
                    <option> 5 </option>
                    <option> 6 </option>
                    <option> 7 </option>
                    <option> 8 </option>
                    <option> 9 </option>
                    <option> 10 </option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId='formGridOra'>
                  <Form.Control type='time' placeholder='' />
                </Form.Group>
                <Form.Group as={Col} controlId='formGridData'>
                  <Form.Control type='date' placeholder='' />
                </Form.Group>
              </Row>
              <br />
              <Row className='locatieMasa'>
                <Form.Group as={Col} controlId='formGridLocatieMasa'>
                  <Form.Select defaultValue='Locația mesei'>
                    <option> Locația mesei </option>
                    <option> În apropierea ferestrei </option>
                    <option> La parter </option>
                    <option> La etaj </option>
                    <option> Pe terasa </option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <p className='pAnulareRez'> *Anularea rezervării în cazul în care mancarea este comandată în prealabil,
                se face cu maxim 6 ore înainte de ora rezervării. </p>
              <br />
              <h2 className='h2Cerinte'> Cerințe suplimentare </h2>
              <hr className='hrLine' />
              <Form.Group className='checkbox' id='formGridCheckbox'>
                <Form.Check type='checkbox' label='Vreau să primesc mesaje adiționale din partea Andalu' />
              </Form.Group>
              <Button className='btnSubmit' variant='primary' type='submit'> Rezervă masa</Button>
            </Form>
          </Col>
          <Col>
            <img className='restaurantHall' src={RestaurantHall} alt="Restaurant hall" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Rezervari