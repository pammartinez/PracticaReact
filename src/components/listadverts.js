import React, {Component} from 'react';
import axios from "axios";
import { Link  } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import Search from './search'
import './listadverts.module.css';
import { Container, Row, Col , Button, Form} from 'react-bootstrap';

export default class Listadverts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: []
    };
  };

componentDidMount=()=> {
  this.handleClickAdvert();
}

paginacion=()=>{
}

handleSubmit = (name,type,pricemin,pricemax,venta,limit)=>{

 let query=''; 
 let car ='&';

 if (name){
    query +=`${car}name=${name}`
  }
 if (type){
    query +=`${car}tag=${type}`
  }

  if (pricemin){
    query +=`${car}price=${pricemin}-${pricemax}`
  }  

   if (venta!==null){
    query +=`${car}venta=${venta}`
  } 

  console.log(query);
 axios.get(`http://34.89.93.186:8080/apiv1/anuncios?limit=${limit}${query}`,{withCredentials:true})     
  .then(res => {  
          console.log(res);     
          console.log(res.data.results);       
          this.setState({
            lista:res.data.results
          }, this.paginacion)   
    })  
};


handleClickAdvert =  ()=>{
    axios.get(`http://34.89.93.186:8080/apiv1/anuncios`,{withCredentials:true})     
    .then(res => {  
            console.log(res);     
            console.log(res.data.results);       
            this.setState({
              lista:res.data.results
            })   
      })
  }

  render = () => {
    const {lista, name , price, sale ,type , pricemin,pricemax, venta } = this.state;

    return (
    <Container fluid>  
    <Row> 
      <Col>
            <h2> Lista  Anuncios </h2>
       <Search  handleSubmit={this.handleSubmit}/> 
       </Col>
     </Row>
      <ul>
        <Row>
        {lista.map((item,index)=>{
          return (
            <div key = {index}>
                                                                  
             <Col className="col-12 col-sm-6 col-md-6 col-lg-3">
             {<Card   style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.photo} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <p>Precio:{item.price}</p>
                <Card.Link href="#"> <Link to={`/cardsadverts/${item._id}`} > Detalle </Link> </Card.Link>                 
                <Card.Link href="#"> <Link to={`/cardsadverts/Editar/${item._id}`} > Editar </Link> </Card.Link>               
                <Card.Link href="#"> <Link to={`/cardsadverts/Anadir`} > Añadir </Link> </Card.Link>   
              </Card.Body>
              </Card> }
              </Col>
            </div>
            )
        })}
        </Row>
      </ul>
      </Container>
    );
  };

}
