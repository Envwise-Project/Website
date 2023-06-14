import { useState } from "react";

const Aboutproperty = (props) => {
    const { image, number, address, location, PIT, PRY, AvailablesNFT, amenities, rooms, guests, value, Tokenised, NFTPrice } = props;
    
    const [rangeValue, setRangeValue] = useState(40);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
    
    const passiveIncomePerYear = (PIT * rangeValue).toFixed(2);
    const passiveIncomePerMonth = (passiveIncomePerYear / 12).toFixed(2);

    return (
        <div className="w-[50rem]">

          <div>
            <div className="tabs">
              <button
                className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Details
              </button>
              <button
                className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Financials
              </button>
              <button
                className={`tab ${activeTab === 3 ? 'tab-active' : ''}`}
                onClick={() => handleTabClick(3)}
              >
                Documents
              </button>
              <button
                className={`tab ${activeTab === 4 ? 'tab-active' : ''}`}
                onClick={() => handleTabClick(4)}
              >
                Carbon Emissions
              </button>
              <button
                className={`tab ${activeTab === 5 ? 'tab-active' : ''}`}
                onClick={() => handleTabClick(5)}
              >
                Buying Process
              </button>
              
            </div>

        {activeTab === 1 && (
          <div>        
          <table className="table mt-6">
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Amenities </th>
                <td>{amenities}</td>
              </tr>
              {/* row 2 */}
              <tr >
                <th>Rooms</th>
                <td>{rooms}</td>
              </tr>
                      {/* row 3 */}
                      <tr>
                          <th>Adress: </th>
                          <td>{address} | {location}

                          <div>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.103122417797!2d-90.2111142248339!3d38.7842702533725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df4f23d1cc64ad%3A0x37845d3643065482!2sCove%20Ln%2C%20Spanish%20Lake%2C%20MO%2063138%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1686662781964!5m2!1ses-419!2sar"
                            width="400"
                            height="250"
                            style={{ border: '0' }}
                            allowFullScreen
                            loading="lazy"
                            title="Map">
                          </iframe>
                          </div>
                          
                          </td>
                      </tr>

                      <tr>
                          <th>Ocuppancy Status: </th>
                          <td>Free</td>
                      </tr>
                      </tbody>
                  </table>
            
          </div>
        )}

        {activeTab === 2 && (
          <div>          
            <table className="table mt-6">
            <tbody>
              <tr>
                <th>Market value of the property</th>
                <td> $ {value}</td>
              </tr>
              <tr>
                <th>Percent of property tokenised</th>
                <td>{Tokenised} %</td>
              </tr>
              <tr>
                <th>Rental yield</th>
                <td>{PRY} % </td>
              </tr>
              <tr>
                <th>Number of F-NFT available:</th>
                <td>{AvailablesNFT}</td>
              </tr>

              <tr>
                <th>Passive Income per token</th>
                <td>{PIT} % / year </td> 
              </tr>

              <tr>
                <th>Number of tokens to be purchased:</th>
                <td>
                <input
                  type="range"
                  min="0"
                  max={AvailablesNFT}
                  value={rangeValue}
                  className="range w-96 "
                  onChange={handleRangeChange}
                  /><span  className="tooltip tooltip-open tooltip-right mb-3" data-tip={rangeValue}></span>
                  
                  </td> {/* Placeholder for the value */}
                  </tr>
  
              <tr>
              <th className=" text-base">Annual Passive Income</th>
              <td>$ {passiveIncomePerYear}</td> {/* Placeholder for the value */}
              </tr>

              <tr>
                <th className=" text-base">Monthly Passive Income</th>
                <td>$ {passiveIncomePerMonth}</td> {/* Placeholder for the value */}
              </tr>  
              </tbody>

              <tr>
                <th className="text-orange-400 text-lg uppercase">Total Cost:</th>
                <td className=" font-bold">$ {rangeValue * NFTPrice  }</td> {/* Placeholder for the value */}
              </tr>

            </table>
          </div>
        )}

        {activeTab === 3 && (
          <div className="mt-8">
            {/* Contenido de la pestaña 3 */}
            <p>Property Insurance Document</p>
            <p>Charge Document</p>
          </div>
        )}

        {activeTab === 4 && (                
            <table className="table h-10 mt-8 ">
                  <tbody>
                    <tr>
                        <th>Current Emission</th>
                        <td>30</td>
                    </tr>
                    <tr>
                        <th>Expected Emission Level</th>
                        <td>{value}</td>
                    </tr>
            </tbody>
          </table>
                  
                )}

        {activeTab === 5 && (
                <div className="mt-8">
                  {/* Contenido de la pestaña 3 */}
                  <p>Property Insurance Document</p>
                  <p>Charge Document</p>
                </div>
              )}


          </div>
        </div>     
    )};


export default Aboutproperty; 