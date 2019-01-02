import React, {Component} from 'react'; 

class CartItem extends Component {

    render() {
        console.log('this props', this.props.products.name)
        return (
            <div className="collection-item">
                <div className="row">
                        <div className="col-md-8">{this.props.product.name}</div>
                        <div className="col-md-2">{this.props.product.priceInCents}</div>
                        <div className="col-md-2">{this.props.quanity}</div>
                </div>
            </div>

        )  
        }
}

export default CartItem