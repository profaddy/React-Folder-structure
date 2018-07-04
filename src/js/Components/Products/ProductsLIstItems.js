import React from 'react';
import './index.css'
import {ADD_ITEM} from "../../actions/cartActions"
import { connect } from "react-redux"
import {bindActionCreators} from "redux";


 class ProductListItems extends React.Component  {

  constructor(){
    super();
    
    }
  
    render(){
      console.log('cart',this.props.cart)
      console.log('products',this.props.product)
  var itemInCart = this.props.cart.filter(item => item.id === this.props.product.id)[0];
 
  return(
    <div className='product-list-item'>
      
     <h3> {this.props.product.name}</h3>
     <img
      height={100}
      title={this.props.product.name}
      src={`/products/${this.props.product.image}` }
      />
      <div classNmae='product-des'>{this.props.product.description}</div>
      <div classNmae='product-pri'>Rs.{this.props.product.price}</div>
      <div>
      <button bSstyle='danger' onClick={ () => this.props.dispatch(ADD_ITEM(this.props.product,this.props.totIteminCart))}>
      Add to cart({(itemInCart && itemInCart.quantity) || 0})
      </button></div>
    </div>
);
    }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToCart: ADD_ITEM
  }, dispatch);
};

export default connect(mapDispatchToProps)(ProductListItems);
