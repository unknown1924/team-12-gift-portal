import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Products";
import User from "./components/User/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home1/Home";
import Admin from "./components/Admin/Admin";
import AdminNavbar from "./components/Admin/AdminNavbar";
import AdminUser from "./components/Admin/pages/AdminUser";
import AdminOrder from "./components/Admin/pages/AdminOrder";
import AdminComplaint from "./components/Admin/pages/AdminComplaint";
import Hom from "./components/Admin/pages/Hom";
import RaiseComplaint from "./components/Complaint/RaiseComplaint";
import Order from "./components/orders/Order";
import SendGift from "./components/SendGift/SendGift";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin/AdminComplaint" exact>
            <AdminComplaint />
          </Route>
          <Route path="/admin/AdminOrder" exact>
            <AdminOrder />
          </Route>
          <Route path="/admin/AdminUser" exact>
            <AdminUser />
          </Route>
          <Route path="/admin/AdminComplaint" exact>
            <AdminComplaint />
          </Route>
          <div>
            <Navbar />
            <Route path="/AboutUs" exact>
              <AboutUs />
            </Route>
            <Route path="/Products" exact>
              <Product />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/Home" exact>
              <Home />
            </Route>
            <Route path="/admin" exact>
              <Admin />
            </Route>
            <Route path="/RaiseComplaint" exact>
              <RaiseComplaint />
            </Route>
            <Route path="/Order">
              <Order />
            </Route>
            <Route path="/SendGift" exact>
              <SendGift />
            </Route>
            <Route path="/Login" exact>
              <Login />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
