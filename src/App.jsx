import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  './App.module.css'
import Food from './assets/component/Food'
import LoginPage from './loginPage'
import Biriyani from './assets/component/Biriyani'
import Signin from './assets/component/Signin'
import Noodle from './assets/component/Noodle'
import Order from './assets/component/Order'
function App() {
  
  const FoodItem=()=>{
    return(
      <Routes>
      <Route path="/food" element={<Food/>}/>
      <Route path="/biriyani" element={<Biriyani/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/noodle"   element={<Noodle/>}/>
      <Route path="/order"   element={<Order/>}/>




  </Routes>
    )
  }
  return (
    <>
    <div>
   

<BrowserRouter basename='/'>
<LoginPage />
      {
<FoodItem/>
}
</BrowserRouter>
    </div>
    </>
 
  )
}

export default App
