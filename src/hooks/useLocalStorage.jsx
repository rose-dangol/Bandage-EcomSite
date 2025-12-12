function useLocalStorage(key) {
  const getLocalStorage = () => {
    return localStorage.getItem(key);
  };

  const setLocalStorage = (data) => {
    localStorage.setItem(key, data);
  };

  const removeLocalStorage = () => {
    localStorage.removeItem(key);
  };

  return { getLocalStorage, setLocalStorage, removeLocalStorage };
}

export { useLocalStorage };
