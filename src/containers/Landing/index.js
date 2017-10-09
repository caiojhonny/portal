import React, { PureComponent } from 'react'

import StoresList from '../StoresList'

import './style.css'

class Landing extends PureComponent {
  render () {
    return (
      <div className='landing--wrapper'>
        <div className='landing--block'>
          <img className='landing--logo' src={require('../../assets/images/logo_beta.png')} />
          <span className='landing--title'>Work with Coffee</span>
          <span className='landing--subtitle'>A top curated list of work places for you.</span>
        </div>
        <div className='graphql--section'>
          <h3>Knew some coffe shops</h3>
        </div>
        <StoresList />
      </div>
    )
  }
}

export default Landing
