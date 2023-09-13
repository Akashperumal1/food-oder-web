import React from 'react'
import styles from './assets/loginPage.module.css'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
      <div className={styles.main}>
        <div class={styles.showlist}>
          <header>
            <Link to={'/food'}><img src="https://www.clipartmax.com/png/small/112-1129793_healthy-food-logo-png.png" alt="image" /></Link>
            <h3>Your location </h3>
            <div class={styles.headli}>
              <ol>
                <li><input type="search" placeholder='Search...' className={styles.input} /></li>
                <li><Link to={"/food"} >HOME</Link></li>
                <div className={styles.dropdown}>
                  <li className={styles.dropbtn}>MENU</li>
                  <div  className={styles.content}>
                  <li><Link to={"/biriyani"} >BIRIYANI</Link></li>
                  <li><Link to={"/noodle"} >NOODLE</Link></li>
                  <li><Link to={"/order"} >ORDER</Link></li>
                  </div>
                </div>

                <li><Link to={"/order"} >ORDER</Link></li>
                <div>

                <button><Link to={'/signin'}>SIGNIN</Link></button>
                </div>
              </ol>
            </div>
          </header>
        </div>
      </div>

  )
}

export default LoginPage