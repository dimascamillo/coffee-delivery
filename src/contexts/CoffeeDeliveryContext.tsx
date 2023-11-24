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
  fetchProducts: () => Promise<void>;
}

interface CoffeeDeliveryProps {
  children: ReactNode;
}

export const CoffeeDeliveryContext = createContext({} as CoffeeDeliveryContextType);

export function CoffeeDeliveryProvider({ children }: CoffeeDeliveryProps) {
  const [products, setProducts] = useState<Products[]>([]);

  async function fetchProducts() {
    const response = await api.get("/products");

    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <CoffeeDeliveryContext.Provider value={{ products, fetchProducts }}>{children}</CoffeeDeliveryContext.Provider>
  );
}
