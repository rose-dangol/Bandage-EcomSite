function useLocalStorage() {
  const getLocalStorage = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error("Error getting data", error);
    }
  };

  const setLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error setting data", error);
    }
  };

  const removeLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data", error);
    }
  };

  return { getLocalStorage, setLocalStorage, removeLocalStorage };
}

export { useLocalStorage };
