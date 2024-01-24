import React, { useState, useEffect } from 'react';
import InvestmentForm from './components/InvestmentForm';
import Menu from './components/menu';
import logo from './assets/investment-calculator-logo.png';

import TabelaRentabilidade from './components/InvestmentTable';


function App() {


  const [formValue, setFormValue] = useState('')
  const [tableData, setTableData] = useState([]);

  const saveExpenseDataHandler = (data) => {
    setFormValue(data)
    console.log("cade as info", formValue);

    setTableData(calcularRentabilidade(formValue))

  }


  const calcularRentabilidade = (formData) => {
    const newTableData = [];


    for (let ano = 1; ano <= formData.duration; ano++) {
      const montante = calcularRentabilidadeCDI(
        formData.valorAplicar,
        formData.taxaCdiBrasil,
        formData.taxaCdiInvestimento,
        ano
      );
      newTableData.push({ ano, montante });
    }

    console.log("o que tem aqui", newTableData);
    return newTableData;
  };

  function calcularRentabilidadeCDI(principal, taxaCdiAtual, taxaCdiInvestimento, anos) {
    const rentabilidadePorcentagem = (taxaCdiAtual * taxaCdiInvestimento) / 100;
    const montanteFinal = principal * Math.pow(1 + rentabilidadePorcentagem / 100, anos);
    return montanteFinal;
  }


  return (
    <div className="App flex justify-center">
      <Menu />
      <h1 className='flex justify-center'>Calculadora de Rentabilidade LCA</h1>
      <InvestmentForm onSaveExpenseData={saveExpenseDataHandler} />
      <TabelaRentabilidade tableData={tableData} />
    </div>
  );
}

export default App;