import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function BasicForm() {
  const [firstName, setFirstName] = useLocalStorage("firstname", "");
  const [secondName, setSecondName] = useLocalStorage("secondname", "");
  //   const [secondName, setSecondName] = useLocalStorage("secondname", "");
  return (
    <div>
      <h2>Local storage example</h2>
      <form>
        <label htmlFor="firstname">First Name </label>
        <input
          type="text"
          id="firstname"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="secondname">Second Name </label>
        <input
          type="text"
          id="secondname"
          placeholder="Enter second name"
          value={secondName}
          onChange={(e) => {
            setSecondName(e.target.value);
          }}
        />
      </form>
      <h3>First Name : {firstName}</h3>
      <h3>Second Name : {secondName}</h3>
    </div>
  );
}

export default BasicForm;
