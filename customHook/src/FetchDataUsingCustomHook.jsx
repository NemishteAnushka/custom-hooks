import React from "react";
import useFetch from "./hooks/useFetch";

function FetchDataUsingCustomHook() {
  const { data, pending, error } = useFetch();
  console.log(data);
  if (pending) {
    return <h3>Loading....</h3>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      {data &&
        data.map((user) => {
          return <h3 key={user.id}>{user.name}</h3>;
        })}
    </>
  );
}

export default FetchDataUsingCustomHook;
