import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import * as themes from './Themes/'

class BaseCard extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
    cardTheme: PropTypes.string.isRequired
  }

  static defaultProps = {
    cardTheme: 'Square'
  }

  render() {
    const { cardTheme, data } = this.props
    const CardWithTheme = themes[`${cardTheme}`]


    return <CardWithTheme.default {...data} />
  }
}

export default BaseCard
