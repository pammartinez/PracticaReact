import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Card, Container, Row, Col ,Alert, Button} from 'react-bootstrap';
import './home.module.css';

export default class Home extends Component {
constructor(props) {
  super(props);
  this.state = {
       email: "" ,
      password:""
  };
  };

handleChageEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  };

handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  };

render = () => {
  const {email, password,registerok} = this.state;
    return (
      <Container fluid>
          <Row className="pal">
          <Col> <h2 className="text-align-center mt-6">Bienvenido</h2></Col>         
            <Col className="pal  align-items: center  justify-content: center" >
              <Button variant="outline-success" className="text-align-center m-2" ><Link to="/Register">Register</Link> </Button>
              <Button variant="outline-success" className="text-align-center m-2" ><Link to="/login">Login</Link></Button> 
            </Col>
            <Col className="pal">
              
            </Col>        
        
        </Row>
        </Container>
    );
  };

}
