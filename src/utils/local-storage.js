export function setUserItem(data) {
  localStorage.setItem("user", JSON.stringify(data));
}

export function getUserItem() {
  const data = localStorage.getItem("user");
  return JSON.parse(data);
}

export function removeUserItem() {
  localStorage.removeItem("user");
}

export default {
  getUserItem,
  setUserItem,
  removeUserItem,
};
