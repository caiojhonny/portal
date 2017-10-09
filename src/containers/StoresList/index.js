import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

import './style.css'

class StoresList extends Component {
  render () {
    const { allStores } = this.props.allStoresQuery
    return (
      <div className='storesList--wrapper'>
        {
          allStores && allStores.map(store => (
            <span className='store' key={store.id}>{store.name}</span>
          ))
        }
      </div>
    )
  }
}

export const ALL_STORES_QUERY = gql`
  query {
    allStores {
      id
      name
    }
  }
`

export default graphql(ALL_STORES_QUERY, { name: 'allStoresQuery' })(StoresList)
