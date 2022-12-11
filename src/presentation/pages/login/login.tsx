/* eslint-disable @typescript-eslint/no-misused-promises */
import { Footer, FormStatus, Header, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginProps } from './login-props'
import Styles from './login-styles.scss'

const Login: React.FC<LoginProps> = ({ validation, authentication }: LoginProps) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState({
        ...state,
        isLoading: true
      })
      const account = await authentication.auth({ email: state.email, password: state.password })
      localStorage.setItem('accessToken', account.accessToken)
      navigate('/', { replace: true })
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  return (
		<div className={Styles.login}>
			<Header />
			<Context.Provider value={{ state, setState }}>
			<form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
				<h2>Login</h2>
				<Input type="email" name="email" placeholder="Digite seu e-mail" />
				<Input type="password" name="password" placeholder="Digite sua senha" />
				<button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type="submit">
					Entrar
				</button>
				<Link data-testid="sign-up" to="/signup" className={Styles.link}>Criar conta</Link>
				<FormStatus />
			</form>
			</Context.Provider>
			<Footer />
		</div>
  )
}

export default Login
