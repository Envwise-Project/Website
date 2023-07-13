// este es el componente para mostrar el contenido de las transferencias bancarias. 
import css from "./Modals.css"

const BankTransfer = () => {

    return(
        <>

        <div className={css.card}>
            <div>
                <h2>Add bank account</h2>
                <p>This will add a bank account (ACH) to your saved payment methods</p>

                <div className={css.checkboxContainer}>
                    <input type="checkbox" className={css.checkbox} id="myCheckbox" />
                    <label htmlFor="myCheckbox" className={css.checkboxLabel}>
                    I authorize Libertum to electronically debit my account
                    </label>
                    </div>
                <div className={css.cardActions}>
                {/* <button className={css.btn}>Continue</button>                 */}
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default BankTransfer; 
