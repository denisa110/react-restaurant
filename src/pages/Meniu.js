import React from 'react';
import { MenuList } from "../helpers/MenuList";
import { MenuListCiorba } from "../helpers/MenuList";
import "../styles/Meniu.css";
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function Meniu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'> Meniul nostru </h1>
      <Container>
        <hr />
        <Row className='menuRow1'>
          <h2 className='secondTitle'> Specific spaniol </h2>
          <div className='menuList'>
            {
              MenuList.map((menuItem) => {
                return (
                  <div className='products'>
                    <div className='imgProduse'>
                      <img src={menuItem.image} alt="" />
                    </div>
                    <h2 className='nameItem'> {menuItem.name}</h2>
                    <h3 className='price'> {menuItem.price} RON </h3>
                    <Button className='btnComanda' variant="outline-warning"> Comandă acum </Button>
                  </div>
                );
              })};
          </div>
        </Row>
        <hr />

        <Row className='menuRow1'>
          <h2 className='secondTitle'> Ciorbe și supe cremă </h2>
          <div className='menuList'>
            {
              MenuListCiorba.map((menuItem) => {
                return (
                  <div className='products'>
                    <div className='imgProduse'>
                      <img src={menuItem.image} alt="" />
                    </div>
                    <h2 className='nameItem'> {menuItem.name}</h2>
                    <h3 className='price'> {menuItem.price} RON </h3>
                    <Button className='btnComanda' variant="outline-warning"> Comandă acum </Button>
                  </div>
                );
              })};
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Meniu;
