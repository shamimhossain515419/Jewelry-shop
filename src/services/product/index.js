import { Result } from "postcss";

export const getAllAdminProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/all-product", {
      method: "GET",
      cache: "no-store"
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const PostAllProduct = async (formData) => {
  try {
    const res = await fetch("/api/product/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export const GetSingleProduct = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/product/single-product?id=${id}`, {
      method: "GET",
      cache: "no-store"

    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

