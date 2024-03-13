// const key = "accessToken";

const storetoken = (token) => {
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(key, token);
  }
};

const getToken = () => {
  if (typeof window !== "undefined") {
    return window.sessionStorage.getItem(key);
  }
  return null;
};

const clearToken = () => {
  if (typeof window !== "undefined") {
    window.sessionStorage.clear();
    window.localStorage.clear();
  }
  return true;
};

const func = {
  storetoken,
  getToken,
  clearToken,
};

export default func;
