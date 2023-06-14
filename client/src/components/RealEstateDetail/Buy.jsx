import { Link } from "react-router-dom";

const Buy = (props) => {
  const { image, number, address, location, PIT, PRY, AvailablesNFT } = props;

  return (
    <div className="ml-3">
      <div className="card card-compact w-96 bg-base-100 bg-opacity-80 shadow-xl">
        <figure>
          <img src={image} alt="image1" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {address} - {location}
          </h2>
          <p>Passive Income Per Token: {PIT}</p>
          <p>Projected Rental Yield: ${PRY}</p>
          <p>Avaliables NFT: {AvailablesNFT}</p>
          <div className="card-actions justify-center">
            <Link to={`/marketplace/buy/${number}`}>
              <button className="btn text-white content-center btn-wide bg-primary flex items-center justify-center hover:bg-green-600">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
