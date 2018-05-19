import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


class ImageModal extends React.Component {

render() {
    let {imageModalIsOpen, 
        image, 
        closeModal,
    } = this.props
    return (
      <div>
        <Modal
          isOpen={imageModalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="overlay"
        >
          <div className="col">
                <div className='col'>
                    <h4>tes</h4>
                    <img className="modal-food-item" src={image!== '' ? require(`../images/highlights/untitled-${image}.jpg`) : ''} alt={"product-image"} width="300px"></img>
                </div>
                <div className='close-modal' onClick={()=>closeModal()}>X</div>
           
          </div>
        </Modal>
      </div>
    );
  }
}
export default ImageModal;