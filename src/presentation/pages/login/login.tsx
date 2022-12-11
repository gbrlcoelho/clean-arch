import { Footer, FormStatus, Header, Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import React, { useEffect, useState } from 'react'
import { LoginProps } from './login-props'
import Styles from './login-styles.scss'

const Login: React.FC<LoginProps> = ({ validation }: LoginProps) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    main: ''
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setState({
      ...state,
      isLoading: true
    })
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
			<form className={Styles.form} onSubmit={handleSubmit}>
				<h2>Login</h2>
				<Input type="email" name="email" placeholder="Digite seu e-mail" />
				<Input type="password" name="password" placeholder="Digite sua senha" />
				<button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type="submit">
					Entrar
				</button>
				<span className={Styles.link}>Criar conta</span>
				<FormStatus />
			</form>
			</Context.Provider>
			<Footer />
		</div>
  )
}

export default Login
