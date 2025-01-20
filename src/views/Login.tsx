import { useState } from "react"
import { login } from "../apis/auth.api"
import { useNavigate } from "react-router-dom"
import BaseInput from "@common/BaseInput/BaseInput"
import { useMutation } from "@tanstack/react-query"
import BaseButton from "@common/BaseButton/BaseButton"
import useLoading from './../hook/useLoading'
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setLoading } = useLoading()

  const loginMutation = useMutation({
    mutationFn: async(payload: { email: string, password: string}) => login(payload)
  })

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      await loginMutation.mutateAsync({email: email, password: password},
        {
          onSuccess: () => {
            navigate('/')
          }
        }
      )
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
    
  }

  const onChangeInput = (value: string, name: string) => {
    if(name === 'email') setEmail(value)
    if(name === 'password') setPassword(value)
  }

  const onRegisterUser = () => {
    navigate('/registerd')
  }


  return (
    <div className="flex items-center justify-center h-screen">
    <div>
    <div className="text-3xl text-gray-600">Login</div>
      <form className="bg-white shadow-lg rounded px-8 w-[500px] h-[600px]" onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <BaseInput placeholder={'user name'} label={'user name'} value={email} onChangeInputData={onChangeInput} name={'email'}/>
        </div>

        <div className="form-control mt-5">
          <BaseInput placeholder={'password'} label={'password'} onChangeInputData={onChangeInput} value={password} name={'password'}/>
        </div>
        <div className="form-control mt-5">
          <p className="ml-auto text-red-600 text-right cursor-pointer" onClick={onRegisterUser}>registered</p>
        </div>
        <div className="mt-3">
          <BaseButton bgColor={'blue-500'} size={'md'} style={'w-full'}>Save</BaseButton>
        </div>
      </form>
    </div>
    </div>                                                  
  )
}

export default Login
