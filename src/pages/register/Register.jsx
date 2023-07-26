import { useState } from "react";
import { FormInput } from "../../components/formInput/FormInput";
import "./registerStyle.css";
import React from "react";

export const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true, //HTML Attribute,
      icon: false,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true, //HTML Attribute
      icon: false,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
      icon: false,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number and one special character!",
      label: "Password",
      autoComplete: "off",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true, //HTML Attribute
      icon: true,
    },
  ];
  const input1 = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true, //HTML Attribute
      icon: false,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number and one special character!",
      label: "Password",
      autoComplete: "off",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true, //HTML Attribute
      icon: true,
    },
  ];
  const handleSubmit = (e) => {
    // e.preventDefault();

    const RawData = new FormData(e.target);
    const formData = Object.fromEntries(RawData.entries());
    console.log(formData);
    console.log(typeof formData);
    localStorage.setItem('userData', JSON.stringify(formData))
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const [head, setHead] = useState(inputs);
  const regg = () => {
    setHead(inputs);
  };
  const logg = () => {
    setHead(input1);
  };
  
  return (
    <div className="App" style={{ borderRadius: "12px" }}>
      <div className="logo">Codex</div>
      <form
        style={{ borderRadius: "12px" }}
        className="newForm"
        action="#"
        onSubmit={handleSubmit}
      >
        <div className="cont">
          <h1 className="reg" onClick={regg}>
            Register
          </h1>
          <h1 className="log" onClick={logg}>
            Login
          </h1>
        </div>
        {head.map((input, index) => {
          return (
            <FormInput
              /*key={input.id} */
              key={index}
              {...input}
              value={values[input.name]}
              HandleOnChange={handleChange}
            />
          );
        })}
        <button className="subw">Submit</button>
      </form>
    </div>
  );
};
