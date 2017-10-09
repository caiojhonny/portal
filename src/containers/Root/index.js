import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Landing from '../Landing'

class Root extends Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charset='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <link rel='canonical' href='https://workwith.coffee/' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>Work With Cofffee - By devs for all</title>
          <link rel='manifest' href='../../manifest' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black' />
          <meta name='apple-mobile-web-app-title' content='Weather PWA' />
          <link rel='apple-touch-icon' href='images/icons/icon-152x152.png' />
          <meta name='msapplication-TileImage' content='images/icons/icon-144x144.png' />
          <meta name='msapplication-TileColor' content='#2F3BA2' />
        </Helmet>
        <Landing />
      </div>
    )
  }
}

export default Root
