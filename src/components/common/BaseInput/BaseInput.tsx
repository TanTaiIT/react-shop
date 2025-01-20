// import { useState } from "react"
interface BaseInputType {
  placeholder: string,
  label: string,
  value: string,
  name: string,
  onChangeInputData: (value: string, name: string) => void
}
const BaseInput = ({placeholder, label, value, name, onChangeInputData}: BaseInputType) => {
  const changeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value1 = e.target.value
    onChangeInputData(value1, name)
  }
  
  return (
    <div className="relative">
      <label className="text-blue-500 capitalize">{label}: </label>
      <input name={name} value={value} placeholder={placeholder} onChange={changeInput} type="text" className="w-full outline-none rounded-sm px-2 active:border-blue-300 h-[35px] border-2 text-gray-500 focus:to-blue-500"/>
    </div>
  )
}

export default BaseInput