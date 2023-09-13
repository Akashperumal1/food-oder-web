import React from 'react'
import styles from '../component/Food.module.css'
import { Link } from 'react-router-dom'
const Noodle = () => {
//     // Add event listener to 'Add to Cart' buttons
// var addToCartButtons = document.getElementsByClassName('add-to-cart');
// for (var i = 0; i < addToCartButtons.length; i++) {
//   addToCartButtons[i].addEventListener('click', addToCart);
// }

// // Cart items array
// var cartItems = [];

// // Function to add item to cart
// function addToCart(event) {
//   var foodItem = event.target.parentElement;
//   var item = {
//     name: foodItem.getElementsByTagName('h4')[0].innerText,
//     price: parseFloat(foodItem.getElementsByTagName('p')[0].innerText.split(':')[1]),
//   };
//   cartItems.push(item);
//   updateCart();
// }

// // Function to update cart
// function updateCart() {
//   var cartList = document.getElementById('cart-items');
//   cartList.innerHTML = '';
//   var totalPrice = 0;
//   for (var i = 0; i < cartItems.length; i++) {
//     var listItem = document.createElement('li');
//     listItem.innerText = cartItems[i].name + ' - $' + cartItems[i].price;
//     cartList.appendChild(listItem);
//     totalPrice += cartItems[i].price;
//   }
//   document.getElementsByClassName('foodL').innerText = 'Total Price: $' + totalPrice;
// }

// // Add event listener to 'Checkout' button
// document.getElementById('checkout').addEventListener('click', checkout);

// // Function to handle checkout
// function checkout() {
//   // Perform necessary actions for checkout, e.g. payment processing, order confirmation, etc.
//   alert('Thank you for your order!');
//   cartItems = []; // Clear cart
//   updateCart();
// }

  return (
    <div class={styles.paginglinks}>
    <div className={styles.main}>
<h2>NOODLES</h2>

    <article className={styles.food}>
            <div className={styles.FoodDiv}>
                <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\01.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\02.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\03.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\04.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\05.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>	<div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\06.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\01.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\02.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\03.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\04.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>
            <div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\05.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>	<div className={styles.FoodDiv}>
            <div className={styles.star}>
                <h6>1</h6>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJxDlVNZrM8ymVyRD1QuC__Ev4wBtLELdtYkrIR6oBhsfCFp-FRVFtktSoZ3MSA6em2g&usqp=CAU" alt="" />
                
                </div>
                <img src="src\gallery\06.jpg" alt="Image" className={styles.foodItem} />
                <div>
                    <h4 className={styles.foodL}>Fusce dictum finibus</h4>
                    <p className={styles.foodL}>$45 / $55</p>
                    <button >Add to Cart</button>
                </div>
            </div>


        </article>
        
    </div>
</div>

    )
}

export default Noodle