import React, {Component} from 'react';
import axios from "axios";
import { Link  } from 'react-router-dom'
import { Container, Row, Col , Button, Form} from 'react-bootstrap';
import './login.module.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  email: "" ,
                  password:"",
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

  submitForm = async (event)=>{
    event.preventDefault();
  
    axios.request({url:'http://34.89.93.186:8080/apiv1/login',
          method:'post' , 
          withCredentials:true,
          data:{ 
              username:this.state.email,
              password:this.state.password,
            }
     } 
    )     
    .then(res => {  
            console.log(res);     
            console.log(res.data); 
            if (res.status === 200){
              this.props.history.push('/listadverts');
            };
      }
   )
   .catch(error=>console.log(`Error ${error.code}: ${error.message}`));
  }

  render = () => {
    const {email, password} = this.state;

    return (
    <Container fluid>
      <Row  className="justify-content-center">
        <Col><h2>Login</h2></Col> 
      </Row>
      <Row className="justify-content-center mt-4">
          <Form onSubmit={this.submitForm}>
            <Form.Group  className="justify-content-center" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text"  value={email} onChange={this.handleChageEmail}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword1">         
              <Form.Label>Password</Form.Label>             
              <Form.Control type="password"  value={password} onChange={this.handleChangePassword}/>          
            </Form.Group>  

          <Form.Group className="justify-content-center" controlId="formTengoCuenta">   
              <li><Link to="/register">No Tengo Cuenta</Link></li>
              <input className=" input justify-content-center" type="submit" value="Login"/> 
            </Form.Group>        
            </Form>

      </Row>
    </Container>
    );
  };

}