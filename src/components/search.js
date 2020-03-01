import React, {Component} from 'react';
import axios from "axios";
import { Link  } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { Container, Row, Col , Button, Form} from 'react-bootstrap';
import './search.module.css';

export default class Listadverts extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      name: '',
      type: '',
      pricemin:0,
      pricemax:100,
      venta: null,
      limit:10
    };
  };

handleChageName=(event)=>{
  this.setState({
    name: event.target.value
  });
};

handleChageType=(event)=>{
  this.setState({
    type: event.target.value
  });
};

handleChagePriceMin=(event)=>{
  if (this.state.pricemin<this.state.pricemax){
    this.setState({
      pricemin:event.target.value
    });
  }
};

handleChagePriceMax=(event)=>{
  if (this.state.pricemin<this.state.pricemax){
    this.setState({
      pricemax:event.target.value
    });
  }
};

handleChangeSelect=(event)=>{
 this.setState({
  venta:event.target.value
 } )
}

handleChangeLimit=(event)=>{
  this.setState({
   limit:event.target.value
  } )
 }

paginacion=()=>{

}

handleSearch = (event)=>{
 event.preventDefault();
 const {name,type,pricemin,pricemax,venta,limit}=this.state;
 this.props.handleSubmit(name,type,pricemin,pricemax,venta,limit); //Funcion que viene del padre 
};

  
render = () => {
  const {name , price, sale ,type , pricemin,pricemax, venta,limit } = this.state;

  return (
    <Container fluid>  
     <h2> Búsqueda </h2>
      <Form onSubmit={this.handleSearch}>
        <Row>
            <Col className="col-12 col-sm-6 col-md-6 col-lg-3">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>        
                <Form.Control type="text"  value={name} onChange={this.handleChageName}/>
            </Form.Group>
            </Col>

            <Col className="col-12 col-sm-6 col-md-6 col-lg-3">
            <Form.Group controlId="formBasicEmail2">
                <Form.Label>Tipo</Form.Label>        
                <Form.Control type="text"  value={type} onChange={this.handleChageType}/>
            </Form.Group>
            </Col>
        </Row>
       <Row>
          <Col className="col-12 col-sm-6 col-md-6 col-lg-3">
          <Form.Group controlId="formBasicEmail3">
              <Form.Label>Precio Mínimo</Form.Label>        
              <Form.Control  type ="range" min ='0'  max='100' step ='1'  value = {pricemin}  onChange={this.handleChagePriceMin}/>
          </Form.Group>
          </Col>


          <Col className="col-12 col-sm-6 col-md-6 col-lg-3">
          <Form.Group controlId="formBasicEmail4">
              <Form.Label>Precio Máximo</Form.Label>        
              <Form.Control  type ="range" min ='0'  max='100' step ='1'  value = {pricemax}  onChange={this.handleChagePriceMax}/>
          </Form.Group>
          </Col>
       </Row>
       <Row>  
        <Col className="col-12 col-sm-6 col-md-6 col-lg-3">
          <Form.Group controlId="formBasicEmail5">
            <Form.Label>Venta/Compra</Form.Label>           

              <Form.Control as="select"   className="browser-default custom-select" name="category" placeholder="Venta" onChange={this.handleChangeSelect}>
              <option value={null} selected></option>
                        <option value={true}>Venta</option>
                        <option value={false}>Compra</option>
                   
            </Form.Control>
           
              </Form.Group>
          </Col>
          </Row>
          <Col className="col-12 col-sm-6 col-md-6 col-lg-3">
  
        <Form.Group controlId="formBasicEmail6">
        <Form.Label>Límite</Form.Label>     
        <select name="limit" className="m-2" placeholder="Límite" onChange={this.handleChangeLimit}>
              <option value={10} selected></option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
        </select>  
          <Button className="m-4" variant="danger"  type="submit">
            Búsqueda
          </Button>
          </Form.Group>
          </Col>
      </Form>           
      </Container>
    );
  };

}


