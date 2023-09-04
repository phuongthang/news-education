import Slider from "react-slick";
const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid bg-primary px-0 px-md-5 mb-5 text-center" style={{ height: "300px" }}>
      <Slider {...settings}>
        <div>
          <h3 className="text-white d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
            1
          </h3>
        </div>
        <div>
          <h3 className="text-white d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
            2
          </h3>
        </div>
        <div>
          <h3 className="text-white d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
            3
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Slide;
