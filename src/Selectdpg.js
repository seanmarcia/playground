export default function SelectDpg({dpgType, setDpgtype, setValue}) {
    const handleChange = (event) => {
        setDpgtype(event.target.value)
        setValue(null)
      }
    return (
    <fieldset>
    <input
      type="radio"
      name="dpgtype"
      className="radio"
      value="Accepted"
      id="accepted"
      checked={dpgType === 'Accepted'}
      onChange={handleChange}
      />
    <label htmlFor="Accepted">Accepted</label>
  
    <input
      type="radio"
      name="dpgtype"
      className="radio"
      value="Nominee"
      id="nominee"
      checked={dpgType === 'Nominee'}
      onChange={handleChange}
      />
    <label htmlFor="medium">Nominee</label>
    </fieldset>
    )
  }