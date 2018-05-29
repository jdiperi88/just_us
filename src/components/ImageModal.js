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
          <div className="main_modal_image">
                <div className='col'>
                    <img className="modal_image_item" src={image!== '' ? require(`../images/highlights/${image}`) : ''} alt={"product-image"} width="300px"></img>
                </div>
                <div className='close-modal' onClick={()=>closeModal()}>X</div>
           
          </div>
        </Modal>
      </div>
    );
  }
}
export default ImageModal;