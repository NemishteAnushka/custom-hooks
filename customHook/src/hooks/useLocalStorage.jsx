import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValue; //we get the localstorage from here and set in our state as initial and we parse it into string
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorage;
