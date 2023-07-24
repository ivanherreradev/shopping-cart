/**
 * This module is part of a shopping cart context that utilizes React hooks.
 * It provides the CartContext context and the CartProvider component.
 * The CartProvider is used to manage the shopping cart state and provides
 * functions to add and remove items from the cart.
 */

import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  /**
   * Shopping cart state.
   * @type {CartItem[]}
   */
  const [cartItems, setCartItems] = useState(() => {
    try {
      // Try to get cart products from local storage (localStorage).
      const productsInLocalStorage = localStorage.getItem('cartProducts')
      // If there are products in local storage, return them as an array of objects.
      // If there are no products, return an empty array.
      return productsInLocalStorage ? JSON.parse(productsInLocalStorage) : []
    } catch (error) {
      // In case of any error, return an empty array.
      return []
    }
  })

  // Use the useEffect hook to save cart changes to local storage.
  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartItems))
    // The useEffect will run only when the value of cartItems changes.
  }, [cartItems])

  /**
   * Adds a product to the shopping cart.
   * If the product is already in the cart, increases the quantity by 1.
   * If the product is not in the cart, adds it with a quantity of 1.
   *
   * @param {Product} product - The product to be added to the cart.
   */
  const addItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    )

    if (inCart) {
      // If the product is already in the cart, update the quantity.
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 }
          } else return productInCart
        })
      )
    } else {
      // If the product is not in the cart, add it with quantity 1.
      setCartItems([...cartItems, { ...product, amount: 1 }])
    }
  }

  /**
   * Deletes a product from the shopping cart.
   * If the quantity of the product in the cart is 1, removes it completely.
   * If the quantity is greater than 1, decreases the quantity by 1.
   *
   * @param {Product} product - The product to be deleted from the cart.
   */
  const deleteItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    )

    if (inCart.amount === 1) {
      // If the quantity is 1, remove the product from the cart completely.
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== product.id)
      )
    } else {
      // If the quantity is greater than 1, decrease the quantity by 1.
      setCartItems((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...inCart, amount: inCart.amount - 1 }
        } else return productInCart
      })
    }
  }

  // Render the context provider with relevant values and functions.
  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
