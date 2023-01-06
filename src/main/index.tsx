import Router from '@/presentation/components/router/router'
import '@/presentation/styles/global.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { makeLogin } from './factories/pages/login/login-factory'

ReactDOM.render(
    <Router MakeLogin={makeLogin} />,
    document.getElementById('main')
)
