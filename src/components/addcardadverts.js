import React, {Component} from 'react';
import Listadverts from './listadverts'
import axios from "axios";
import {  useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import { Link  } from 'react-router-dom'
import { Container, Row, Col , Button, Form } from 'react-bootstrap';
import './addcardadverts.module.css';

export default class Addcardadverts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      price:0,
      descripcion:null,
      tags:'',
      url:'',
      type:''
    };
  };  

  componentDidMount = () => {
  /*   if (this.props.match.params.id){
      this.handelClickDetail();
    } */
  }

  handleChageName=(event)=>{
    this.setState({
        name:event.target.value
    })
  }
  ;

  handleChageDescripcion=(event)=>{
    this.setState({
        descripcion:event.target.value
    })
  }
  ;
  
  handleChagePrice=(event)=>{
    this.setState({
        price:event.target.value
    })
  }
  ;

  handleChageTags=(event)=>{
    this.setState({
        tags:event.target.value
    })
  }
  ;
  handleChangeSelect=(event)=>{
    this.setState({
        type:event.target.value
    })
  }
  ;

  handleChageUrl=(event)=>{
    this.setState({
        url:event.target.value
    })
  }
  ;

  handleAddForm=(event) =>{
    event.preventDefault();
    console.log("Añadir anuncio  ");
    const params= {  name: this.state.name,
                    price: this.state.price,
                    description: this.state.descripcion,
                    tags: this.state.tags.split(","),
                    type:this.state.type,
                    photo: this.state.url
                  }

     axios({   method: 'POST',
      url: `http://34.89.93.186:8080/apiv1/anuncios`,  
       data: params,
       withCredentials:true })
   
        .then(res => {  
              this.props.history.push('/listadverts')             
              console.log("LO HA HECO añadir anuncio ");
        })
        console.log("fin añadir anuncio ");
    };

  
  render = () => {
    const {name,descripcion,price,tags,url,type} = this.state;
    return (
      <Container>
      <Row  className="justify-content-center">
        <Col><h2>Añadir anuncio</h2></Col> 
      </Row>
      <Row className="justify-content-center mt-4">
        <Form onSubmit={this.handleAddForm}>
          <Form.Group  className="justify-content-center">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text"  value={name} onChange={this.handleChageName}/>          
        </Form.Group> 

        <Form.Group  className="justify-content-center">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" name ='descripcion'  value={descripcion} onChange={this.handleChageDescripcion}/>          
        </Form.Group>

        <Form.Group  className="justify-content-center">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number"  value={price} onChange={this.handleChagePrice} required/>          
        </Form.Group>

        <Form.Group  className="justify-content-center">
          <Form.Label>Tags</Form.Label>
         <Form.Control type="text"  value={tags} onChange={this.handleChageTags} required/>          
        </Form.Group>

       <Form.Group  className="justify-content-center">    
         <Form.Label>Venta/Compra</Form.Label>
        <select name="type" placeholder="Tipo" value = {type} onChange={this.handleChangeSelect} >
          <option value='null'></option>
          <option value='sell'>sell</option>
          <option value='buy'>buy</option>
        </select> 
        </Form.Group>

        <Form.Group  className="justify-content-center">
          <Form.Label>Url</Form.Label>
          <Form.Control type="text"  value={url} onChange={this.handleChageUrl} required/>          
        </Form.Group>        
          <input type="submit" value="Guardar"/>   
         <span className="volver"><Link to="/listadverts">Volver</Link>   </span>    
        </Form>      
      </Row>
      </Container>
    );
  };
}