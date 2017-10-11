import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

import Card from '../../components/Cards'

import './style.css'

class StoresList extends Component {
  render () {
    const { allStores } = this.props.allStoresQuery
    return (
      <div className='storesList--wrapper'>
        {
          allStores && allStores.map(store => (
            <Card
              key={store.id}
              data={
                {
                  title: store.name,
                  subtitle: store.instagram,
                  cardTheme: 'Square'
                }
              }
            />
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
      address
      facebook
      instagram
      website
    }
  }
`

export default graphql(ALL_STORES_QUERY, { name: 'allStoresQuery' })(StoresList)
