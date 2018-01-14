import React from 'react'

import { MagicBox, MenuItem } from '../../components'


const NavBar = ({ items }) => (
    <div class="navbar">
        <MagicBox
            component={MenuItem}
            content={items}
        />
    </div>
)

export default NavBar
