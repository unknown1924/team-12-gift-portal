import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Products/Products'
import User from './components/User/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home1/Home'
import Admin from './components/Admin/Admin'
import AdminNavbar from './components/Admin/AdminNavbar'
import AdminUser from './components/Admin/pages/AdminUser'
import AdminOrder from './components/Admin/pages/AdminOrder'
import AdminComplaint from './components/Admin/pages/AdminComplaint'
import Hom from './components/Admin/pages/Hom'

function App() {
  return (
    <>
      <Router>
        <AdminNavbar />
        {/* <Product/> */}

        <Route path='/' exact>
          <Home />
        </Route>
        <Route
          exact
          path='./components/pages/AdminUser'
          component={AdminUser}
        />
        <Route path='/admincomplaint' exact></Route>
        <Route exact path='/adminorder' component={AdminOrder} />

        <Routes>
          <Route path='/aboutus' exact component={AboutUs} />
        </Routes>
      </Router>
      {/* <Navbar /> */}
      {/* <User /> */}
      {/* <AboutUs /> */}
      {/* <Product /> */}
      {/* <Admin /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
