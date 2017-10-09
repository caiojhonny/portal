import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {
  ApolloProvider,
  createNetworkInterface,
  ApolloClient
} from 'react-apollo'

import App from './app'
import register from './services'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8k4q2x604fc01368ll12q8m'
})

const client = new ApolloClient({
  networkInterface
})

const renderApp = (NextApp) => {
  render(
    <ApolloProvider client={client}>
      <AppContainer>
        <NextApp />
      </AppContainer>
    </ApolloProvider>,
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
