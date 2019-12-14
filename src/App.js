import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Articles from "./components/Articles";
import Form from "./components/Form";






const API='https://my-json-server.typicode.com/monikafac/articles/db';

class App extends Component {
  state = { 
   articles:[ ],
   counter:0,
   response:"",
   checked:[false, false, false]
   }

  
   componentDidMount() {
    setTimeout(() => {
      fetch(API)
      .then(response=>{
        if(response.ok){
          return response
        }
        throw Error("Błąd!")
      })
      .then(response => response.json())
      .then(data=>{
        const article = data.articles 
        this.setState(prevState =>({
          articles:prevState.articles.concat(article)
        }))
      })
      .catch(error => console.log(error));
      
    }, 0)
  }

  handleChandleMenu = ()=>{
    const menu=document.querySelector("#menu")
   
    menu.classList.toggle("hide")
  }
 

   handleToTheRight=()=>{
     if(this.state.counter ===9){
       this.setState({
         counter:0
       })
     }else
     this.setState({
       counter:this.state.counter+1
     })  
   }

   handleToTheLeft=()=>{
     if(this.state.counter===0){
      this.setState({
        counter:9
      })
     }else
    this.setState({
      counter:this.state.counter-1
    })
  }

  


  render() { 
    return ( 
      <>
      <Header changeMenu={this.handleChandleMenu}/>
      <Articles 
      clickLeft={this.handleToTheLeft} 
      clickRight={this.handleToTheRight}
      articles={this.state.articles}
      counter={this.state.counter}
      />
      <Form/>
     
      </>
     );
  }
}
 
export default App;