// este es el componente para mostrar el contenido de las transferencias bancarias.

const BankTransfer = () => {
  return (
    <>
      <div className="card text-neutral-content">
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title">Add bank account</h2>
          <p>
            This will add an bank account (ACH) to your saved payment methods
          </p>
          <div className="card-actions justify-end mt-8">
            <button className="btn bg-primary text-white content-center hover:bg-green-600">
              Accept
            </button>
            {/* this should redirect to another site in order to add a bank account */}
            <button className="btn bg-primary text-white content-center hover:bg-green-600">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankTransfer;
