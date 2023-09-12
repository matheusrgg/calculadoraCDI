import { useState } from "react";



function InvestmentForm(props){


    const initialFormStateCDI = {
        "taxaCdiBrasil": 0,
        'taxaCdiInvestimento': 0,
        "valorAplicar": 0,
        "duration": 0
      }

    const [formValueCDI, setFormValueCDI]=useState(initialFormStateCDI)

    const formInputChangeHandler = (event, field) => {
        setFormValueCDI({...formValueCDI, [field]: event.target.value});
    };

    const handleReset = () =>{
        setFormValueCDI(initialFormStateCDI)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        props.onSaveExpenseData(formValueCDI)
    }

    return (
        <form className="form">
        <div className="input-group">
        <p>
            <label htmlFor="current-savings">Taxa do CDI hoje (%) </label>
            <input type="number" id="txa-cdi-brasil" onChange={(e)=> formInputChangeHandler(e, 'taxaCdiBrasil')}/>
        </p>
        <p>
            <label htmlFor="yearly-contribution">Taxa do CDI do Investimento(%)</label>
            <input type="number" id="taxaCdiInvestimento"  onChange={(e)=> formInputChangeHandler(e, 'taxaCdiInvestimento')} />
        </p>
        </div>
        <div className="input-group">
        <p>
            <label htmlFor="expected-return">
           Valor a Aplicar (R$)
            </label>
            <input type="number" id="valor-aplicar"  onChange={(e)=> formInputChangeHandler(e, 'valorAplicar')}/>
        </p>
        <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(e) => formInputChangeHandler(e, 'duration')} />
        </p>
        </div>
        <p className="actions">
        <button type="reset" className="buttonAlt"onClick={handleReset} >
            Reset
        </button>
        <button type="submit" className="button" onClick={handleSubmit}>
            Calculate
        </button>
        </p>
  </form>
    )
}


export default InvestmentForm
