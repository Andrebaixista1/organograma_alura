import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {

  const placeholderModificada = `${props.placeholder}`;
  // let valor = 'Guilherme Silveira';

  const [valor, setValor]= useState ('Guilherme Silveira')

  const aoDigitado = (e) => {
    props.aoAlterado(e.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.force} placeholder={placeholderModificada} />
    </div>
  );
};

export default CampoTexto;
