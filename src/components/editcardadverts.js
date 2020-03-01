import React, {Component} from 'react';
import Listadverts from './listadverts'
import axios from "axios";
import {  useParams } from "react-router-dom";
import { Link  } from 'react-router-dom'
import { Card, Container, Row, Col ,Alert, Button,Form} from 'react-bootstrap';

export default class Cardsadvert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      price:0,
      descripcion:null,
      tags:'',
      url:'',
      type:'',
      listatags:[]

    };
  };  

  componentDidMount = () => {
    if (this.props.match.params.id){
      this.handelClickDetail();
    }
    this.getTags();
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

  handleChangeTags=(event)=>{
    this.setState({
        tags:event.target.value
    })
  }
  ;

  handleChangeSelect = event => {
    this.setState({
      type: event.target.value,
    });
  };

  handleChageUrl=(event)=>{
    this.setState({
        url:event.target.value
    })
  }
  ;

  editForm = async (event)=>{
    event.preventDefault();
    axios.request({url:'http://34.89.93.186:8080/apiv1/login',
          method:'post' , 
          withCredentials:true,
          data:{ 
              name:this.state.name,
              description:this.state.descripcion,
            }
     } 
    )     
    .then(res => {  
            console.log(res);     
            console.log(res.data); 
            if (res.status === 200){
              this.props.history.push('/listadverts');
            };
      })
   .catch(error=>console.log(`Error ${error.code}: ${error.message}`));
  }

  handelClickDetail=() =>{
    console.log("consulta por id de card  ");
    axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${this.props.match.params.id}`,{withCredentials:true})     
    .then(res => {  
            console.log(res);     
            console.log(res.data.results);       
            this.setState({
             name:res.data.result.name,
             descripcion:res.data.result.description,            
            })  ; 
      });
  };

getTags=()=>{
  console.log("consulta por id de tags   ");
  axios.get(`http://34.89.93.186:8080/apiv1/tags`,{withCredentials:true})     
  .then(res => {  
          console.log('Resultado',res);           
          console.log(res.data.results);       
          this.setState({
           listatags:res.data.results,
          })   
    })
}

 handleeditForm=(event) =>{
    event.preventDefault(); 
    const params= {  name: this.state.name,
                    price: this.state.price,
                    description: this.state.descripcion,
                 // tags: this.state.tags.split(","),
                    tags: this.state.tags,
                    type:this.state.buy,
                    photo: this.state.url
                  }

     axios({   
      method: 'put',
      url: `http://34.89.93.186:8080/apiv1/anuncios/${this.props.match.params.id}`,  
       data: params,
       withCredentials:true })
   
        .then(res => {  
               this.props.history.push('/listadverts')                 
        })
        console.log("consulta por id de card  ");
    };
  
  render = () => {
    const {name,descripcion,price,tags,url,type,listatags} = this.state;
    return (
      <Container>
        <Row  className="justify-content-center">
          <Col><h2>Editar anuncio</h2></Col> 
        </Row>
      <Row className="justify-content-center mt-4">
        <Form onSubmit={this.handleeditForm}>
          <Form.Group  className="justify-content-center">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text"  value={name} onChange={this.handleChageName} required/>          
        </Form.Group> 

        <Form.Group  className="justify-content-center">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" name ='descripcion'  value={descripcion} onChange={this.handleChageDescripcion} required/>          
        </Form.Group>

        <Form.Group  className="justify-content-center">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number"  value={price} onChange={this.handleChagePrice} required/>          
        </Form.Group>
          
       
          <label>Tags</label>
          <select name="type" value={tags} onChange={this.handleChangeTags}>
            {listatags.map((item, index) => {
              console.log('Valor del item:',item);
              return <option key={index} value={item}>{item}</option>;
            })}
          </select>   
        
        <Form.Group  className="justify-content-center">    
        <Form.Label>Venta/Compra</Form.Label>
        <select name="type" placeholder="Tipo" value = {type} onChange={this.handleChangeSelect} >
          <option value='sell'>sell</option>
          <option value='buy'>buy</option>
        </select> 
        </Form.Group>

        <Form.Group  className="justify-content-center">
          <Form.Label>Url</Form.Label>
          <Form.Control type="text"  value={url} onChange={this.handleChageUrl} required/>          
        </Form.Group>
        
            <input type="submit" value="Guardar"  />
            <span className="volver"><Link to="/listadverts">Volver</Link>   </span>          
            </Form>
            </Row>
      </Container>
    );
  };

}