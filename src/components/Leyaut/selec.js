import "../Leyaut/select.css"
function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
        <options text="selecione uma opçâo ">Selecione uma opçâo</options>
        {options.map((options) => (
          <option value={options.id} key={options.id}>
            {options.name}
          </option>
        ))}
      </select>

    </div>
  )
}

export default Select