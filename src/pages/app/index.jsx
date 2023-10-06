import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Home from '../home';
import MyAccount from '../myAccount';
import MyOrder from '../myOrder';
import SingIn from '../singIn';
import MyOrders from '../myOrders';
import NavBarTemplate from '../../components/navBar';
import './App.css'


const AppRouter = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/signin', element: <SingIn />},
    {path: '/*', element: <MyOrder />},
  ]);
  return routes;
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
      <NavBarTemplate/>
        <AppRouter/>
      </BrowserRouter>
    </>
  )
}

export default App
