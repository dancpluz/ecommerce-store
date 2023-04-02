'use client'

import { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

type StateContextType = {
  showCart: boolean;
  cartItems: Product[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: Product, quantity: number) => void;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCartItemQuantity: (id: string, value: string) => void;
  onRemove: (product: Product) => void;
};

const Context = createContext<StateContextType>({
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 1,
  incQty: () => { },
  decQty: () => { },
  onAdd: () => { },
  setShowCart: () => { },
  toggleCartItemQuantity: () => { },
  onRemove: () => { }
});

type Props = {
  children: React.ReactNode;
};

export const StateContext = ({ children }: Props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);

  let foundProduct: Product;
  let index: number;

  const onAdd = (product: Product, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity ? cartProduct.quantity + quantity : quantity,
          };
        }
        return cartProduct;
      });
      setCartItems(updatedCartItems);
    } else {
      const productWithQuantity = { ...product, quantity };
      setCartItems([...cartItems, productWithQuantity]);
    }

    toast.success(`${qty} ${product.name} adicionada à sacola.`);
  };

  const onRemove = (product: Product) => {
    foundProduct = cartItems.find((item) => item._id === product._id) as Product;
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
    
    setCartItems(newCartItems)
  }

  const toggleCartItemQuantity = (id: string, value: string) => {
    foundProduct = cartItems.find((item) => item._id === id) as Product;
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = [...cartItems];

    if(value === 'inc') {
      foundProduct.quantity += 1;
      newCartItems[index] = foundProduct;
      setCartItems(newCartItems)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)

    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        newCartItems[index] = foundProduct
        setCartItems(newCartItems)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);