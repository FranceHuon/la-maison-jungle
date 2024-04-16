import '../styles/Cart.css'
import { useState } from 'react'

function Cart() {
    const [cart, updateCart] = useState(0)
    const monsteraPrice = 8
    // const ivyPrice = 10
    // const flowerPrice = 15

    return (
        <div className='lmj-cart'>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button onClick={()=> updateCart(cart + 1)}>
                    Ajouter
                </button>
                {/* <li>Lierre : {ivyPrice}€</li>
                <li>Fleurs : {flowerPrice}€</li> */}
            </div>
            <h3>Total : {monsteraPrice * cart}</h3>
        </div>
    )
}

export default Cart