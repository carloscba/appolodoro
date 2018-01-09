import React from "react";
import Link from 'next/link'

const Menu = (props) => (
    <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        {/* The only requirement for components placed inside a Link is they should accept an onClick prop. */}
    </ul>
)

export default Menu