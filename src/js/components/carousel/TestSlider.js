var React = require('react'),
    mediaStore = require('../../stores/mediaStore'),
    AddItem = require('../friends-form/AddItem'),
    Slider = require('react-slick');

var TestSlider = React.createClass({
    getInitialState: function(){
    return {
      slides: mediaStore.getSlides()
    }
  },
  componentDidMount: function(){
    mediaStore.addChangeListener(this._onSlidesChange);
  },
  componentWillUnmount: function(){
    mediaStore.removeChangeListener(this._onSlidesChange);
  },
  _onSlidesChange: function(){
    this.setState({
      slides: mediaStore.getSlides()
    });
  },
  render: function () {
    var sliderSettings = {
        // dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }


        }, {
            breakpoint: 600,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true,
                
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    };

    var slides = this.state.slides.map(function(slideHtmlInput){
      if (slideHtmlInput.isComponent)
      {
        return (
          <div className="form-box">{slideHtmlInput.html}</div>
        )
      }
      else
      {
        return (
          <div dangerouslySetInnerHTML={{__html: slideHtmlInput.html}}></div>
        )
      }
    }.bind(this));

    return (
      <div className="form-box">
        <Slider {...sliderSettings}>
          {slides}
        </Slider>
      </div>
    );
  }
});

module.exports = TestSlider;