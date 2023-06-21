import { useState } from "react"
import FormMS from "./components/FormMS"


const App = () => {

  const [valora, setValora] = useState('')
  const [valorb, setValorb] = useState('')
  const [operacion, setOperacion] = useState('')
  const [resultado, setResultado] = useState(0)
  const [total, setTotal] = useState(0)

  const handleChangeA = (e) => {
    setValora(e.target.value);
  };

  const handleChangeB = (i) => {
    setValorb(i.target.value);
  };

  const handleChangeOpe = (o) => {
    setOperacion(o.target.value);
  };

  const ope = function () {
    if (operacion === ("*")){
    setResultado((valora) * (valorb));
    }
    if (operacion === ("/")){
    setResultado((valora) / (valorb));
    }
    if (operacion === ("+")){
    setResultado(parseInt(valora) + parseInt(valorb));
    }
    if (operacion === ("-")){
    setResultado((valora) - (valorb));
    }
    
    setTotal(parseInt(total) + parseInt(resultado))
  };
  

  return (
    <div>
       <br />
       <FormMS 
       handleChangeA={handleChangeA} 
       handleChangeB={handleChangeB} 
       handleChangeOpe={handleChangeOpe}
       ope={ope}
       />
      <br /> 
      <h3>Resultado: {resultado}</h3>   
      <h3>Suma Total: {total}</h3>  
    </div>
  )
}

export default App