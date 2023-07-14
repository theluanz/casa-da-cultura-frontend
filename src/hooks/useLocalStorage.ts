import { useState, useEffect } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    setValue(storedValue ? JSON.parse(storedValue) : initialValue);
  }, []);

  const setLocalStorageValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorageValue];
};

export { useLocalStorage };
