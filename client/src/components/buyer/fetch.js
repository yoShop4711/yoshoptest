export const updateOrderStatus = (token, id, status) => {
  return fetch(`/cart/update_status/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status, id }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
