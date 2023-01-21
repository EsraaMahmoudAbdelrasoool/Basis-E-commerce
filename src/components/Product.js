import { Link } from "react-router-dom";
import "./Product.css";
function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      <div className="card h-100 text-center p-4">
        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
        <div className="card-body">
          <h5 className="card-title mb-0">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text load fw-bold"> Price : {product.price}$</p>
          {showButton && (
            <Link className="btn btn-outline-dark" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;
