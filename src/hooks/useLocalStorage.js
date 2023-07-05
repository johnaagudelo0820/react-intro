import { useState, useEffect } from 'react';

export const useLocalStorage = (keyItem, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(keyItem);
      if (!localStorageItem) return;

      const parsedItem = JSON.parse(localStorageItem) ?? initialValue;
      setItem(parsedItem);
      setLoading(false);
    }, 3000);
  }, [initialValue, keyItem]);

  const saveItem = (item) => {
    setItem(item);
    localStorage.setItem(keyItem, JSON.stringify(item));
  };

  return { item, saveItem, loading };
};
