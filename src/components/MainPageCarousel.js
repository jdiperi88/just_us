import React from "react";
import Slider from "react-slick";
import Header from "./Header";

// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     let left = require('../images/left-arrow.png'),
//     leftUrl = `url(${left}`
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: leftUrl, width:'44px', height:"76px"}}
//         onClick={onClick}
//       />
//     );
//   }

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     let right = require('../images/right-arrow.png'),
//         rightUrl = `url(${right}`

//     return (

//       <div
//         className={className}
//         style={{ ...style, display: "block", background: rightUrl, width:'44px', height:"76px"}}
//         onClick={onClick}
//       />
//     );
//   }

  
class MainPageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage : 'cake_boat1.jpg',
      verticalImage: ''
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  currentImageHandler = (image,vertical) =>{
    this.setState({
      currentImage:image,
      verticalImage: vertical
    })
  }
  render() {
    let { 
      images, 
      imagesDisplayed, 
      settings,
      openImageModal, 
      handleSelectPerson,
      navIsOpen, 
      active,
      openNav, 
      closeNav
    } = this.props
    let {
      currentImage,
      verticalImage
    } = this.state
    return (
      <div className='main_carousel'>
        <div className='carousel_overlay'>
        <Header
          navIsOpen={navIsOpen}
          active={active}
          openNav={openNav}
          closeNav={closeNav}
        />
        <select onChange={(e)=>{
            handleSelectPerson(e)
        }}>
            <option value="All" disabled selected value>Select Person</option>
            <option value="Joey">Joey</option>
            <option value="Saida">Saida</option>
            <option value="MJ">MJ</option>
            <option value="Pam">Pam</option>
            <option value="John">John</option>
            <option value="Oswaldo">Oswaldo</option>
            <option value="Cricket">Cricket</option>
            <option value="Dilobar">Dilobar</option>
            <option value="Umid">Umid</option>
            <option value="Onajon">Onajon</option>
            <option value="Jasur">Jasur</option>
            <option value="Ziyoda">Ziyoda</option>
            <option value="Ulugbek">Ulugbek</option>
            <option value="Kryssy">Kryssy</option>
            <option value="Tiffany">Tiffany</option>
            <option value="Joban">Joban</option>
            <option value="Kenny">Kenny</option>
            <option value="Tyrone">Tyrone</option>
            <option value="Allison">Allison</option>
            <option value="Princie">Princie</option>
            <option value="Danielle">Danielle</option>
            <option value="Scott">Scott</option>
            <option value="Bailey">Bailey</option>
            <option value="Raj">Raj</option>
        </select>
        { currentImage && 
        <div className='current_image_container'>
        <img 
          onClick={()=>{
            this.currentImageHandler(currentImage);
          }}  
          src={require(`../images/highlights/${currentImage}`)} 
          className={verticalImage?'vertical_image':''}
          />
        </div>
      }
          <div className='container'>

          <Slider {...settings}>
            {images && images.map((image, i) => {
              return (
                <div key={i}>
                  <img 
                  onClick={()=>{
                      this.currentImageHandler(image.image_name,image.vertical);
                    }}  
                    src={require(`../images/highlights/${image.image_name}`)}
                    className='vertical_image' 
                   />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
    );
}
}

export default MainPageCarousel;