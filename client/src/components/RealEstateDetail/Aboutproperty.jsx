import { useState } from "react";
import { Link } from "react-router-dom";
import plano1 from "./documents/plano1.pdf"
import plano2 from "./documents/plano2.pdf"
import document1 from "./documents/Register1.pdf"
import document2 from "./documents/Register2.pdf"


const Aboutproperty = (props) => {
    const { more, map, image, number, address, location, PIT, PRY, AvailablesNFT, amenities, rooms, guests, value, Tokenised, NFTPrice } = props;
    
    const [rangeValue, setRangeValue] = useState(40);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
    
    const passiveIncomePerYear = ((PIT * rangeValue)/10).toFixed(2);
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
                            src={map}
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

                      <tr>
                          <th>More</th>
                          <td>{more}</td>
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
          <div className="flex justify-center mt-5">      
            <ul className="steps steps-vertical">
              <li className="link link-hover mt-3">
              <Link
                  to={plano1}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="plano1.pdf"                  
                >
                  Download Blueprint 1 
                </Link>
                
                </li>
              <li className="link link-hover mt-3">
              <Link
                  to={plano2}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="plano1.pdf"                  
                >
                  Download Blueprint 2 
                </Link>

              </li>
              <li className="link link-hover mt-3">
              <Link
                  to={document1}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="plano1.pdf"                  
                >
                  Download Title 21 High Street 
                </Link>
               </li>
              <li className="link link-hover mt-3">
                <Link
                  to={document2}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="plano1.pdf"                  
                >
                  Download Title 23 High Street 
                </Link>
                </li>
            </ul>            

                

                

                

                
            
           
          </div>
        )}

        {activeTab === 4 && (                
            <table className="table h-10 mt-8 ">
                  <tbody>
                    <tr>
                        <th>Current Emission</th>
                        <td>943 kWh per month</td>
                    </tr>
                    <tr>
                        <th>Expected Emission Level</th>
                        <td>456 kWh per month</td>
                    </tr>
            </tbody>
          </table>
                  
                )}

        {activeTab === 5 && (
                <div className="mt-8">
                  {/* Contenido de la pestaña 3 */}
                  
                  <p>Charge document</p>
                </div>
              )}


          </div>
        </div>     
    )};


export default Aboutproperty; 



{/* <table className="table mt-[-2rem]">
<tbody >              
  <tr>
    <th>Blueprints</th>
    <td> 
      <a href="https://drive.google.com/file/d/1Faf1XiLZIBtm2vXzyiIj0M7PSgpChzDn/view?usp=sharing" target="_blank"> Blueprint 1 </a>
      <br /> 
      <br />                 
      <a href="https://drive.google.com/file/d/1nry8wOF_xb0iV3uIq52csaDexg95wF4i/view?usp=sharing" target="_blank">Blueprint 2 </a>                
    </td>
  </tr >

  <tr>
    <th >Other documents </th>
    <td>  
      <a href="https://drive.google.com/file/d/1OKBJ1dKgZEd8ZBse8AI9d3h0zt6RDZv9/view?usp=sharing" target="_blank" >Title 21 High Street</a>
<br />
<br />

      <a href="https://drive.google.com/file/d/1bKvMVhea7gxi8VKusIFNroWqMzfzeTHr/view?usp=sharing" target="_blank" >Title 23 High Street</a>
      
      </td>
  </tr>
  
  </tbody>
</table> */}