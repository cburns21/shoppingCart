import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer.js';
import Header from './components/header.js';
import CartItems from './components/cartItems.js'; 
import AddItem from './components/addItem.js'


class App extends Component {
  constructor() {
    super() 
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      
      cartItemsList: [],
      quantity: 0,
      newItemName: '',
      price: 0,
    }
  }
  
  addItem = (event) => {
    event.preventDefault()
    let newItem = {
      product: {
        
      }
    }
  }
    
  updateQuantity = (event) => {
    console.log(event.target.value)
    this.setState({
      quantity: event.target.value
    })
  }

  updateName = (event) => {
    console.log(event.target.value)
    this.setState({
      newItemName: event.target.value
    })
  }

  updatePrice = (event) => {
    console.log(event.target.value)
    this.setState({
      price: event.target.value
    })
  }

  render() {
    // const cartItemsList =   
    //   [
    //     { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 3.99 }, quantity: 1 },
    //     { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 4.99 }, quantity: 2 },
    //     { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 19.99 }, quantity: 1 },
    //   ]

    return (
      <div>
        <Header/>
        <CartItems
          cartItemsList = {this.state.cartItemsList}/>
        <AddItem 
        products={this.state.products} 
        addItem={this.addItem}
        updateName= {this.updateName}
        updateprice = {this.updatePrice}
        update={this.updateQuantity}/>
        <Footer
          copyright={ 2016}/> 
         
      </div>
    )
      
    
  }
}

export default App;
