import BaseInput from "@common/BaseInput/BaseInput"
import BaseButton from '@common/BaseButton/BaseButton'
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { register } from "../apis/auth.api"

const Registered = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registeredUser = useMutation({
    mutationFn: async(payload: { email: string, password: string}) => {
      return register(payload)
    }
  })

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    registeredUser.mutate({email: email, password: password.toString()}, {
      onSuccess: () => {
        console.log('success')
      }
    })
  }

  const onChangeInput = (value: string, name: string) => {
    if(name === 'email') setEmail(value)
    if(name === 'password') setPassword(value)
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-lg rounded-lg h-[600px] w-[500px] px-8" onSubmit={onSubmitForm}>
        <h1 className="uppercase">Registered</h1>

        <div className="form-control">
          <BaseInput label={'email'}  value={email} onChangeInputData={onChangeInput} placeholder={'email'} name={'email'} />
        </div>

        <div className="form-control mt-5">
          <BaseInput label={'password'}  value={password} onChangeInputData={onChangeInput} placeholder={'password'} name={'password'} />
        </div>

        <div className="form-control mt-5">
          <BaseButton style="w-full" bgColor={'blue-500'} size={'md'}>Save</BaseButton>
        </div>
      </form>
    </div>
  )
}

export default Registered