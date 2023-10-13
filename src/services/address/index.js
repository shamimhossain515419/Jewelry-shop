export const AddressPost = async (formData) => {

     const res = await fetch('/api/address/post-address', {
          method: "POST",
          body: JSON.stringify(formData),
     });
     const data = res.json();
     return data;
}


 export const Address_by_id = async (email) => {

     const res = await fetch(`/api/address/get-address?email=${email}`, {
          method: "GET",
         
     });
     const data = res.json();
     return data;
}
 export const Address_delete_by_id = async (id) => {

     const res = await fetch(`/api/address/delete-by-id?id=${id}`, {
          method: "DELETE",
         
     });
     const data = res.json();
     return data;
}

