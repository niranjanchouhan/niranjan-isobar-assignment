import React from 'react';
import Dialog from 'react-dialog'

class Modal extends React.Component {

    constructor() {
        super();
        this.state = {
            isDialogOpen: false
        }
    }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    

    return (
        <Dialog
            title="Add Item"
            modal={this.props.show}
            >
            <h1>Dialog Content</h1>
            <p>More Content. Anything goes here</p>
      <div >
        <div >
          {/* {this.props.children} */}
          asdfsdfsd
          sdfsdf
          sdfsdfs
          sdfsdfsdf
          sdfsdfsdfsf

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
      </Dialog>
    );
  }
}

export default Modal;