import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

type Props = {
  MakeLogin: React.FC
}

const Router: React.FC<Props> = ({ MakeLogin }: Props) => {
  return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<MakeLogin />} />
			</Routes>
		</BrowserRouter>
  )
}

export default Router
