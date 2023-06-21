

const FormMS = ({valora, valorb, operacion, handleChangeA, handleChangeB, handleChangeOpe, ope}) => {
  return (
    <div>
        <input name="name" 
                type="number"   
                value={valora}
               onChange={handleChangeA}
               placeholder="Valor1"></input>



         <select name="select" onChange={handleChangeOpe}>
            <option >Seleccione el operador...</option>
            <option value="+" >+</option>
            <option value="-" >-</option>
            <option value="*" >*</option>
            <option value="/" >/</option>
        </select>

         <input name="name"   
            type="number"
                value={valorb}    
               onChange={handleChangeB}
               placeholder="Valor2"></input>

         <button onClick={ope}>Calcular</button>

    </div>
  )
}

export default FormMS