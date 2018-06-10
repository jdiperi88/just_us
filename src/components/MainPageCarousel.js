import React from "react";
import Slider from "react-slick";

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
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    let { images, imagesDisplayed, settings, openImageModal, handleSelectPerson} = this.props
    return (
      <div className='main_carousel'>
        <div className='overlay'>
          <div className='container'>
                <select onChange={(e)=>{
                  handleSelectPerson(e)
              }}>
                  <option value="All" disabled selected value>Move to...</option>
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
          <Slider {...settings}>
            {images && images.map((image, i) => {
              return (
                <div key={i}>
                <img onClick={()=>{
                  openImageModal(image.image_name);
                }}  src={require(`../images/highlights/${image.image_name}`)} />
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