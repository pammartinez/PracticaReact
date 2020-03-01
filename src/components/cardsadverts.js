
import React, {Component} from 'react';
import Listadverts from './listadverts'
import axios from "axios";
import {  useParams } from "react-router-dom";
import { Link  } from 'react-router-dom'
import { Card, Container, Row, Col ,Alert, Button} from 'react-bootstrap';

export default class Cardsadvert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: null
    };
    
  };  


  componentDidMount = () => {
    if (this.props.match.params.id){
      this.handelClickDetail();
    }
  }
  ;

  handelClickDetail=() =>{
    console.log("consulta por id de card  ");
    axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${this.props.match.params.id}`,{withCredentials:true})     
    .then(res => {  
            console.log(res);     
            console.log(res.data.results);       
            this.setState({
              detail:res.data.result
            })   
      })
  };
  
  render = () => {
    const {detail} = this.state;
    console.log("detail");
    console.log(detail);
   if (detail){
    return (
      <Container>
        <Row>
          <Col className="text-align-center mt-4"><h2>Detalle</h2></Col>
        </Row>
        <Row >
          <h4>
          Nombre: {detail.name}
          <br />
          Descripción : {detail.description}
          </h4>
           <br />
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={detail.photo} />
          <Card.Body>
          <Card.Title>{detail.name}</Card.Title>
          <Card.Text>
            {detail.description}
          </Card.Text>
          <p>Precio:{detail.price}</p>
          </Card.Body>
          <Link to="/listadverts">Volver</Link> 
          </Card> 
        </Row>
      </Container>
    );
   }
   else {
     return (<div>Error</div>);
   }
  };

}