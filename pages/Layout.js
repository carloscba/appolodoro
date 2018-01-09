import Menu from '../components/Menu'

const Layout = (props) => (
  <div>
    <Menu />
    {props.children}
  </div>
)

export default Layout