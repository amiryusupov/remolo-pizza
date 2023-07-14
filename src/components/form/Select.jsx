import React from 'react'

function SelectForm({ options, defaultValue, labelValue, labelName, inputName }) {
  return (
    <div className="form-group">
      <label htmlFor={labelValue}>{labelName}</label>
      <select name={inputName} defaultValue={defaultValue}>
        {
          options.map((item, key) => {
            return (
              <option key={key} value={item.value}>{item.label}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default SelectForm