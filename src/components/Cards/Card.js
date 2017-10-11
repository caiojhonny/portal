import React, { PureComponent } from 'react'

import BaseCard from './BaseCard'

class Card extends PureComponent {
  render() {
    const { data } = this.props

    return (
      <BaseCard data={data} />
    )
  }
}

export default Card
