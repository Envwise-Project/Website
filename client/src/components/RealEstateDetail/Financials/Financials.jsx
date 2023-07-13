import  style  from "../Aboutproperty.module.scss"
import GraphicIncomeMonth from "./GraphicIncomeMonth";
import TableIncome from "./TableIncome";

import { useState } from "react";

const Financials = ({number, PRY, value, AvailablesNFT, NFTPrice, capital}) => {

  const dividerStyle = {
    borderBottom: "1px inset silver",
    width: '30%', 
    // margin: '0 auto', 
    
  }

    const [rangeValue, setRangeValue] = useState(40);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };

      const thumbPosition = (rangeValue - 0) / (100 - 0);

    
    const investment = NFTPrice * rangeValue;
    const passiveincometoken = (((investment * PRY)/100) / rangeValue).toFixed(2)
    const passiveIncomePerYear = ((investment*PRY)).toFixed(2);
    const passiveIncomePerMonth = (passiveIncomePerYear / 12).toFixed(2);
    console.log(passiveIncomePerMonth)
    const capitalrepaymentpertoken = NFTPrice/capital;
    const monthlycapitalrepayment = (capitalrepaymentpertoken/12).toFixed(2)
    const anualcapitalrepayment = capitalrepaymentpertoken * rangeValue
  
 

return (
  <div>
    <div className={style.table}>
                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Market value of the property:</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}> $ {value}</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Funded:</span>
                   </div>
                   <div className={style.cell} >                   
                      <div className={style.barra}>
                      <progress
                        type="progress"
                        min="0"
                        max="100"
                        step="1"
                        value="40"   
                        oninput="rangevalue.value=value"
                        className=""/>                 
                          <output id="rangevalue"> 40 % </output>
                      </div>
                  </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Rental Yield:</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>{PRY} %</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Number of Tokens available:</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>{AvailablesNFT}</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Passive Income per token:</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>{passiveincometoken}</span>
                   </div>
                 </div>
                 
                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Number of tokens to be purchased:</span>
                   </div>

                   <div className={style.cell} >                   
                      <div className={style.barra}>
                      <input
                        type="range"
                        min="1"
                        max={AvailablesNFT}
                        step="1"
                        value={rangeValue}                    
                        onChange={handleRangeChange}
                        className={style.tokensbar}
                        // className={style.range}
                        // className="range range-warning w-full"  
                        onInput={() => {}}/>                 
                          <output id="rangevalue">{rangeValue} TOKENS</output>
                      </div>
                  </div>
                   </div>


                   <div style={dividerStyle}></div>
           
                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Invesment:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontabledif}>$ {investment}</span>
                   </div>
                 </div>



                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Anual Passive Income:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontabledif}>$ {passiveIncomePerYear}</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Passive Income per Month:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontabledif}>$ {passiveIncomePerMonth}</span>
                   </div>
                 </div>

                 <div style={dividerStyle}></div>
                 { capital  ? ( <>
                                   <div className={style.row}>
                                   <div className={style.cell}>
                                     <span className={style.label}>Capital Repayment Duration:</span>
                                   </div>
                                   <div className={style.cell}>
                                     <span className={style.descriptiontable}>{capital} years</span>
                                   </div>
                                 </div>

                                 <div className={style.row}>
                                   <div className={style.cell}>
                                     <span className={style.label}>Capital Repayment per Token:</span>
                                   </div>
                                   <div className={style.cell}>
                                     <span className={style.descriptiontable}>$ {monthlycapitalrepayment} / month </span>
                                   </div>
                                 </div>

                                 <div className={style.row}>
                                   <div className={style.cell}>
                                     <span className={style.label}>Annual Capital Repayment:</span>
                                   </div>
                                   <div className={style.cell}>
                                     <span className={style.descriptiontable}> $  {anualcapitalrepayment} </span>
                                   </div>
                                 </div>

                                 </>
                              )
                            : null}  

                              <div style={dividerStyle}></div>                 

    </div>


           <div className={style.graphics}>

           <div className={style.graphic1}>
                 <GraphicIncomeMonth 
                      passiveIncomePerMonth={passiveIncomePerMonth}                
                   />  
                   <span className={style.descriptiontablemonth}>
                   <p><i>ACCUMULATIVE PASSIVE INCOME PER MONTH</i></p>
                  </span>
                 </div>
         <div>
                <TableIncome 
                   passiveIncomePerYear={passiveIncomePerYear}
                   investment={investment}
                   /> 
                  <span className={style.descriptiontablemonth}>
                   <p><i>ACCUMULATIVE PASSIVE INCOME IN YEARS</i></p>
                  </span>
         </div>




           </div>
           
           </div>
)}; 

export default Financials; 