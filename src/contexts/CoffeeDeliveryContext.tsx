import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  categories: string;
  src: string;
}

interface CoffeeDeliveryContextType {
  products: Products[];
  // checkout: Checkout[];
  quantityProducts: number;
  fetchProducts: () => Promise<void>;
  handleAddProductToCart: () => void;
  handleRemoveProductToCart: () => void;
}

interface CoffeeDeliveryProps {
  children: ReactNode;
}

// interface Checkout {
//   quantityProducts: number;
// }

export const CoffeeDeliveryContext = createContext({} as CoffeeDeliveryContextType);

export function CoffeeDeliveryProvider({ children }: CoffeeDeliveryProps) {
  const [products, setProducts] = useState<Products[]>([]);
  const [quantityProducts, setQuantityProducts] = useState(1);

  async function fetchProducts() {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleAddProductToCart() {
    try {
      setQuantityProducts((prevQuantity) => prevQuantity + 1);
    } catch (error) {
      console.error(error);
    }
  }

  function handleRemoveProductToCart() {
    try {
      quantityProducts > 1 && setQuantityProducts((prevQuantity) => prevQuantity - 1);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CoffeeDeliveryContext.Provider
      value={{
        products,
        fetchProducts,
        quantityProducts,
        handleAddProductToCart,
        handleRemoveProductToCart,
      }}>
      {children}
    </CoffeeDeliveryContext.Provider>
  );
}
