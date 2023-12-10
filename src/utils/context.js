import { useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react'
export const Context = createContext();
const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItem, setCartItem] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartSubTotal, setsubTotal] = useState(0)
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo(0,0)
    },[location])
    useEffect(() => { 
        let count=0;
        cartItem.map(item=>count+=item.attributes.quantity)
        setCartCount(count);

        let subtotal=0;
        cartItem.map(item => subtotal+=item.attributes.price*item.attributes.quantity)
        setsubTotal(subtotal)
    }, [cartItem])
    const handleAddToCart = (product, quantity) => {
        let items = [...cartItem]
        let index = items.findIndex(p => p.id === product.id)
        if (index !== -1) {
            items[index].attributes.quantity += quantity
        } else {
            product.attributes.quantity = quantity
            items = [...items, product]
        }
        setCartItem(items);
    }
    const handleRemoveFromCart = (product) => {
        let items = [...cartItem]
        items = items.filter(p => p.id !== product.id)
        setCartItem(items)
    }
    const handleProductQuantity = (type, product) => {
        let items = [...cartItem]
        let index = items.findIndex((p) => p.id === product.id);
        if (type === 'inc') {
            items[index].attributes.quantity += 1;
        } else if (type === 'dec') {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1
        }
        setCartItem(items);
    }
    return (
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartItem,
            setCartItem,
            cartCount,
            setCartCount,
            cartSubTotal,
            setsubTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleProductQuantity


        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext