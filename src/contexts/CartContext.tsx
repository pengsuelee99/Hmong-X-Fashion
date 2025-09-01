import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity?: number; selectedColor?: string; selectedSize?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity = 1, selectedColor, selectedSize } = action.payload;
      const existingItem = state.items.find(
        item => item.product.id === product.id && 
                item.selectedColor === selectedColor && 
                item.selectedSize === selectedSize
      );

      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === product.id && 
          item.selectedColor === selectedColor && 
          item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        };
      }

      const newItems = [...state.items, { product, quantity, selectedColor, selectedSize }];
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.product.id !== action.payload.productId);
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter(item => item.product.id !== productId);
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        };
      }

      const updatedItems = state.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedSize?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addToCart = (product: Product, quantity = 1, selectedColor?: string, selectedSize?: string) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity, selectedColor, selectedSize } });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const itemCount = state.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};