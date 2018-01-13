import Menu from '../components/Layout/Menu/'
import Footer from '../components/Layout/Footer/'

const Layout = (props) => (
  <div>
    <Menu />
    {props.children}
    <Footer />
  </div>
)

export default Layout