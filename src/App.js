
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AuthProvider from './constext/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Header/Home/Home';
import NavigationBar from './Pages/Header/NavigationBar/NavigationBar';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Privet from './Pages/privetRoute/Privet';
import SignUp from './Pages/SignUp/SignUp';

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
   <Route path='/login'>
   <SignUp></SignUp>
   </Route>
</Switch>
<Footer></Footer>
    </Router>
    
     
    </AuthProvider>
  );
}

export default App;
