export async function getUserListService(data) {
  try {
    console.log("service");
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}
export async function getSingleUserDetailsService(id) {
  try {
    console.log("service");
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "GET",
      }
    );
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
}
