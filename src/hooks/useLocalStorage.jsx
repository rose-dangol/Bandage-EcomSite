function useLocalStorage(key) {
  const getLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error("Error getting data", error);
    }
  };

  const setLocalStorage = (data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error setting data", error);
    }
  };

  const removeLocalStorage = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data", error);
    }
  };

  return { getLocalStorage, setLocalStorage, removeLocalStorage };
}

export { useLocalStorage };
