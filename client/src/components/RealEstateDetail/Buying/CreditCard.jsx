const CreditCard = () => {
  return (
    <>
      <div className="card w-[26rem] mx-auto max-h-[30rem] overflow-scroll">
        <div className="card-body text-center text-black">
          <h2 className="card-title">Add a new credit card</h2>
          <p className="text-left mb-6">This will add a new card to your saved payment methods</p>

          <div className="form-control flex flex-wrap justify-center">
            <div className="w-full max-w-xs">
              <label className="label">
                <span className="label-text">Cardholder Name</span>
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>

            <div className="w-full max-w-xs">
              <label className="label">
                <span className="label-text">Credit card number</span>
              </label>
              <input type="text" placeholder="1234 - 1234 - 1234 - 1234" className="input input-bordered w-full" />
            </div>

            <div className="w-full max-w-xs flex">
              <div className="w-1/2 pr-2">
                <label className="label">
                  <span className="label-text">Expiration</span>
                </label>
                <input type="text" placeholder="MM / AA" className="input input-bordered w-full" />
              </div>

              <div className="w-1/2 pl-2">
                <label className="label">
                  <span className="label-text">CVC</span>
                </label>
                <input type="text" placeholder="000" className="input input-bordered w-full" />
              </div>
            </div>

            <div className="w-full max-w-xs flex">
              <div className="w-1/2 pr-2">
                <label className="label">
                  <span className="label-text">Zip Code</span>
                </label>
                <input type="text" placeholder="" className="input input-bordered w-full" />
              </div>

              <div className="w-1/2 pl-2">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              </div>
            </div>

            <div className="w-full max-w-xs">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </div>
          </div>

          
          {/* <div className="card-actions justify-end">         
            <button className="btn bg-primary content-center" onClick={()=>window.my_modal_3.showModal()}>Add Credit Card</button>
            <dialog id="my_modal_3" className="modal">
              <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Credit Card added successfully</h3>                
              </form>
            </dialog>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CreditCard;
