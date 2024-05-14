import { useEffect, useState } from "react";

function useFetch() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setPending(true);

    async function fetchData() {
      try {
        const res = await fetch(URL);
        if (!res.ok) {
          throw Error("Something went wrong !!!");
        }
        const data = await res.json();
        console.log(data);
        setData(data);
        setPending(false);
      } catch (error) {
        setError(error.message);
        setPending(false);
      }
    }
    fetchData();
  }, []);
  return { data, pending, error };
}

export default useFetch;
