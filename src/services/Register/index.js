export const registerNewUser = async (formData) => {
     try {
       const response = await fetch("/api/account", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(formData),
       });
   
       const finalData = await response.json();
   
       return finalData;
     } catch (e) {
       console.log("error", e);
     }
   };
   