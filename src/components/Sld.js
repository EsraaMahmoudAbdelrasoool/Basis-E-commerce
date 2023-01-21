import "./Sld.css";

function Sld() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.redmention.com/wp-content/uploads/2021/06/eCommerce-Website-Components-photo.jpg  "
              className="d-block w-100  height-500"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src=" https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/01/25181555/eCommerce-Cartoon.png "
              className="d-block w-100 height-500 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src=" https://www.shoponcloud.com/images/site-specific/2.jpg"
              className="d-block w-100 height-500 "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Sld;
