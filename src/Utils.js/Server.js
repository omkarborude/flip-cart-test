import axios from "axios";
import { useEffect } from "react";

export const getProducts = () => {
  const { data } = await axios.get("Database.json");
  console.log(data);
};

useEffect(() => {
  getProducts();
});
