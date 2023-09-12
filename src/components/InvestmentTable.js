import React from 'react';

function TabelaRentabilidade(props) {
  console.log("dentro do investment table", props)
  const tabelaLinhas = props.tableData.map((data, index) => (
    <tr key={index}>
      <td>{data.ano}</td>
      <td>R$ {data.montante.toFixed(2)}</td>
    </tr>
  ));

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Ano</th>
          <th>Montante</th>
        </tr>
      </thead>
      <tbody>{tabelaLinhas}</tbody>
    </table>
  );
}

export default TabelaRentabilidade;