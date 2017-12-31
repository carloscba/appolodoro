import Menu from './Menu'

const Layout = (props) => (
  <div>
    <Menu />
    {props.children}
  </div>
)

export default Layout