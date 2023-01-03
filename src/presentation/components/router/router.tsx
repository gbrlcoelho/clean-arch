import { Login } from '@/presentation/pages'
import { AuthenticationSpy, ValidationStub } from '@/presentation/test'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()

  return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login authentication={authenticationSpy} validation={validationStub} />} />
			</Routes>
		</BrowserRouter>
  )
}

export default Router
