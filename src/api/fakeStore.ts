import axios, { AxiosResponse } from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const base_uri = import.meta.env.VITE_BASE_URI;

const instance = axios.create({
  baseURL: base_uri,
  headers: {
    "Content-Type": "application/json",
  },
});

export const allProducts = async (params?: {
  limit: number;
}): Promise<AxiosResponse<Product[]>> => {
  return await instance.get("/products", {
    params,
  });
};
