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
  constructor(){
    super();


    // this.props.openShopModal(this.state.image1)
  }
  render() {
    let { images, imagesDisplayed, settings, openImageModal} = this.props
    return (
      <div className='container main_carousel'>
      <Slider {...settings}>
        {images.map((slide, i) => {
          return (
            <div key={i}>
             <img onClick={()=>{
               openImageModal(slide);
             }}  src={require(`../images/highlights/untitled-${slide}.jpg`)} />
            </div>
          );
        })}
      </Slider>
    </div>
    );
}
}

export default MainPageCarousel;