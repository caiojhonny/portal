import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './_services/registerServiceWorker'

import { Home } from './pages'

ReactDOM.render(<Home />, document.getElementById('root'))
registerServiceWorker()
