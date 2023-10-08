export const JwtToken = async (formData) => {
     console.log(formData);
     try {
       const res = await fetch("http://localhost:3000/api/token/jwt", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body:JSON.stringify(formData),
       });
       const data = await res.json();
       return data;
     } catch (error) {
       console.log(error);
     }
   };
   