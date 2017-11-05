import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
