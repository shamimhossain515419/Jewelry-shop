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



export const GetUser = async (email) => {
  try {

    const res = await fetch(`http://localhost:3000/api/user?email=${email}`, {
      method: "GET",
      cache: "no-cache"
    });

    const result = res.json();
    return result;

  } catch (error) {
    console.log(error);
  }
}
