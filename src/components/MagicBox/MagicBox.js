import React from 'react'

import * as errors from '../../config/constants/errors'

const components = require('../../components')

const loadComponent = (component, content) => {
    const MyComponent = components[component]
    return <MyComponent content={content} />
}

const MagicBox = ({ component, content }) => (
    components[component] && typeof content !== 'undefined' ?
        loadComponent(component, content) : <components.ErrorBox type={errors.UNDEFINED_COMPONENT(component)} />
)

export default MagicBox

