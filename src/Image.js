import product from "./Product"

const Image = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Product" style={{ maxWidth: '200px' }} />;
};

export default Image;
