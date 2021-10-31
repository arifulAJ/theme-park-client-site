
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AuthProvider from './constext/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Header/Home/Home';
import NavigationBar from './Pages/Header/NavigationBar/NavigationBar';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Privet from './Pages/privetRoute/Privet';
import SignUp from './Pages/SignUp/SignUp';
import Service from './Pages/Service/Service';
import About from './Pages/About/About';
import NotFoudn from './Pages/NotFound/NotFoudn';
import Signin from './Pages/SignUp/Signin/Signin';
import UserDetail from './Pages/PlaceOrder/UsersDatiels/UserDetail';

function App() {
  return (
    <AuthProvider>
    <Router>
    <NavigationBar></NavigationBar>

<Switch>
  <Route exact path='/'>
    <Home></Home>
   </Route>
  <Route  path='/home'>
    <Home></Home>
   </Route>
   <Privet path='/placeOrder/:orderId'>
     <PlaceOrder></PlaceOrder>
   </Privet>
   <Route path='/service'>
   <Service></Service>
   </Route>
   <Route path='/about'>
     <About></About>
   </Route>
   <Route path='/signup'>
   <SignUp></SignUp>
   </Route>
   <Route path='/signin'>
     <Signin></Signin>
   </Route>
   <Route path='/users/:id'>
     <UserDetail></UserDetail>
   </Route>
   <Route path='*'>
     <NotFoudn></NotFoudn>
   </Route>
</Switch>
<Footer></Footer>
    </Router>
    
     
    </AuthProvider>
  );
}

export default App;
