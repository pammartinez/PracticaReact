import React, {Component} from 'react';
import axios from "axios";
import { Link  } from 'react-router-dom'
import { Container, Row, Col , Button, Form} from 'react-bootstrap';
import './register.module.css';

export default class Register extends Component {
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
    submitForm = async (event)=>{
    event.preventDefault();
    alert('Login ' +this.state.email+ " password"  +this.state.password);
  
    axios.request({url:'http://34.89.93.186:8080/apiv1/register',
          method:'post' , 
          withCredentials:true,
          data:{ 
              username:this.state.email,
              password:this.state.password,
            }
     } 
    )     
    .then(response => {  
            console.log(response);     
            console.log(response.data); 
            if (response.status === 200){
              this.props.history.push('/login');
            }; 
      }
   )
   .catch((error) => {
    // Error
    /* if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
         console.log(error.response.data);
         console.log(error.response.status);
         console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the 
        // browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message); 
    }*/
    console.log(error);
})
  }

  render = () => {
    const {email, password,registerok} = this.state;
    return (
      <Container fluid>
      <Row  className="justify-content-center">
        <Col><h2>Registro </h2></Col> 
      </Row>
      <Row className="justify-content-center mt-5">     
          <Form onSubmit={this.submitForm}>
              <Form.Group className="justify-content-center"  controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                {/*   <input type="text" value={email} onChange={this.handleChageEmail} /> */}
                  <Form.Control type="text" placeholder="name@example.com" value={email} onChange={this.handleChageEmail}/>
              </Form.Group>
              
              <Form.Group controlId="formBasicPassword1">         
                  <Form.Label>Password</Form.Label>             
                  {/*<input type="password" value ={password}  onChange={this.handleChangePassword} />  */}
                  <Form.Control type="password" placeholder="name@example.com" value={password} onChange={this.handleChangePassword}/>          
                </Form.Group>  

              <Form.Group className="centrado" controlId="formTengoCuenta">   
                  <li><Link to="/login">Tengo Cuenta</Link></li>
                  <input className="centrado" type="submit" value="Register"/> 
                </Form.Group>  
                     
           </Form>
       </Row>
     </Container>
    );
  };
}


