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