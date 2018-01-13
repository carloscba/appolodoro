import React from "react";
import Link from 'next/link'
import Styles from './styles'

const Menu = (props) => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        <Styles />
    </div>
)

export default Menu