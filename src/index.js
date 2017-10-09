
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'
import register from './services'

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
    try {
      register()
      console.log('ServiceWorker registered with success')
    } catch (error) {
      throw new Error(error)
    }
  })
}
