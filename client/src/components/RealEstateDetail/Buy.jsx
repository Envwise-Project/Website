import { Link } from "react-router-dom";

const Buy = (props) => {
  const { image, number, address, location, PIT, PRY, AvailablesNFT } = props;

  return (
    <div className="ml-3">
      <div className="card card-compact w-96 bg-base-100 bg-opacity-80 shadow-xl">
        <figure>
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{address} - {location}</h2>
          <p>Passive Income Per Token: {PIT}</p>
          <p>Projected Rental Yield: ${PRY}</p>
          <p>Avaliables NFT: {AvailablesNFT}</p>
          <div className="card-actions justify-center">
            <Link
              to={`/marketplace/buy/${number}`}
            >
              <button className="btn btn-wide bg-primary mb-4 content-center text-white hover:bg-green-600">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
