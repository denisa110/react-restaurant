import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restaurant from '../assets/restaurant.jpg';
import Restaurant2 from '../assets/restaurant2.jpg';
import CookTeam from '../assets/cookTeam.jpg';
import { BsInstagram } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import '../styles/About.css';

function About() {
  return (
    <div>

      <Container className='containerAbout'>
        <Row className='row1About'>
          <Col className='col1About'>
            <h1 className='h1About'> Despre noi </h1>
            <h2 className='h2About'> Lorem ipsum dolor sit amet, consecteur adipisicing elit,
              sed do eiusmod tempor </h2>
            <p className='pAbout'> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercise
              ullamco laboris nisi ut aliquip ex</p>
          </Col>
          <Col className='col2About'>
            <img id='imgRestaurant' src={Restaurant} alt='Restaurant' />
          </Col>
        </Row>
        <Row className='row2About'>
          <Col className='col2About'>
            <img id='imgRestaurant2' src={Restaurant2} alt='Restaurant' />
          </Col>
          <Col className='col2About'>
            <h1 className='h1About'> Concept </h1>
            <h2 className='h2AboutRow2'> Lorem ipsum dolor sit amet, consecteur adipisicing elit,
              sed do eiusmod tempor </h2>
            <p className='pAbout'> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercise
              ullamco laboris nisi ut aliquip ex </p>
          </Col>

        </Row>

        <Row className='row3About'>
          <Col className='col3About'>
            <div className='txtCol3About'>
              <h1 className='h1About'> Echipa </h1>
              <h2 className='h2About'> Lorem ipsum dolor sit amet, consecteur adipisicing elit,
                sed do eiusmod tempor </h2>
              <p className='pAbout'> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercise
                ullamco laboris nisi ut aliquip ex </p>
            </div>
          </Col>
          <Col className='col2About'>
            <img className='imgCookTeam' src={CookTeam} alt='Cook Team' />
          </Col >

        </Row>

        <Row className='contactRow'>
          <Col></Col>
          <Col className='contactDetail'>
            <div className='detail'>
              <h2 className='h2Contact'> Contact: </h2>
              <p className='pA'><h5 className='h5A'>A:  </h5> Strada Codrescu nr.6, Iași </p> <br />
              <p className='pT'><h5 className='h5T'>T:  </h5> 0740977316 </p> <br />
              <p className='pE'><h5 className='h5E'>E:  </h5> andalgastrobar@gmail.com </p> <br />
              <div className='socialMedia'>
                <BsInstagram />
                <ImFacebook />
              </div>
              <hr/>
              <h2 className='h2Contact'> Program: </h2>
              <p className='pA'> Luni: închis</p>
              <p className='pA'> Marți - Duminică: 12:00 - 21:30</p>

            </div>

          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default About




