import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'))
registerServiceWorker()
