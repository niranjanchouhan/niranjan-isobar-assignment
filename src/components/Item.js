import React, { Component } from 'react';
import '../styles/item.css';

class Item extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, description, author, publishDate, duration, image, isInCart } = this.props;

        return (
            <div className="product thumbnail">
                <div className='product-image'>
                <img align='middle' src={image} alt="product" width='100px' height='100px' />
                </div>
                <div className="caption">
                    <h6>{name}</h6>
                    <span>{author}</span><br/>
                    <label>{publishDate}</label><br/>
                    <label>{duration}</label><br/><br/>
                    <p className='product-description'>{description}</p><br/>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Item;