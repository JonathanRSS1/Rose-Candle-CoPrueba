import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// ✅ usa la variable de entorno
const API_BASE = import.meta.env.VITE_API_BASE_URL;

const useFetchProduct = () => {
  const ApiProducts = `${API_BASE}/api/products`;

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(ApiProducts);

      if (!response.ok) {
        throw new Error("Error fetching Products");
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching Products", error);
      toast.error("Error fetching Products");
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await fetch(`${ApiProducts}/${id}`);
      if (!response.ok) {
        console.log("Failed to fetch Products");
        throw new Error("Failed to fetch Products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Products:", error);
      console.log("Failed to fetch Products");
      return null;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    getProducts,
    getProductById,
  };
};

export default useFetchProduct;
