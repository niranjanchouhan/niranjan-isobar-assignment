import React from 'react';
import Item from './Item'
import '../styles/itemList.css';
import Modal from './Modal';

class ItemLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Image", field: "image"
      }, {
        headerName: "Name", field: "name"
      },
      {
        headerName: "Description", field: "description"
      },
      {
        headerName: "Author", field: "author"
      },
      {
        headerName: "PublishDate", field: "publishDate"
      },
      {
        headerName: "Duration", field: "duration"
      }
    ],
    isOpen: false 
  }
}

handleOnMouseOver(e){
  this.toggleModal();
}

toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

  render() {
    return (
      <div className="item-container">
        <div className="ag-theme-balham">
        <ul className="product-list">
              {this.props.products.length > 0 ? this.props.products.map(product => (
                  <li key={product.name} name={product.name} onMouseOver={(e)=>{this.handleOnMouseOver(e)}} className="product-list__item">
                    <Item {...product} />
                  </li>
              )) : (
                <div className="alert alert-info">No Product Found</div>
              )}
            </ul> 
      </div>
      {
        this.state.isOpen ? (
        <Modal show={this.state.isOpen}
        onClose={this.toggleModal} />
        ):null
      }
      </div>
    );
  }
}

export default ItemLists;
