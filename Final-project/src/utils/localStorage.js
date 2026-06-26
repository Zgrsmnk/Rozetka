const AUTH_KEY = "auth";

export const saveAuth = (value) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(value));
};

export const getAuth = () => {
  return JSON.parse(localStorage.getItem(AUTH_KEY));
};

export const clearAuth = () => {
  localStorage.removeItem(AUTH_KEY);
};
