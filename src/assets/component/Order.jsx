import React from 'react'
import styles from '../component/Order.module.css'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div>
    <div >
    <h1>Order Your Product <span>Easier & Faster.</span></h1>
    <p>
      Delivero is a leading global online food delivery marketplace,
      connecting consumers and restaurants through its platform in 24
      countries.
    </p>
    <Link to={'/order'} >Go to Menu</Link>
  </div>
  <div >
    <img src="./images/Delivery address.svg" alt="delevery" />
  </div>
  </div>
    )
}

export default Order