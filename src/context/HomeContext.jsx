import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getCategories() {
    try {
      setIsLoading(true);

      const res = await axios.get(
        "https://e-commerce-11-api.vercel.app/api/api/categories"
      );

      setCategories(res.data.data);
    } catch (err) {
      console.error("Error fetching categories:", err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <HomeContext.Provider value={{ categories, isLoading }}>
      {children}
    </HomeContext.Provider>
  );
}

export function useHomeContext() {
  const context = useContext(HomeContext);

  return context;
}
