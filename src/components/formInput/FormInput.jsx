import React, { useState } from "react";
import "./FormInputStyle.css";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

export const FormInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const toogle = () => {
    if (showPassword) {
      document.getElementById("password").setAttribute("type", "password");
      setShowPassword(false);
    } else {
      document.getElementById("password").setAttribute("type", "text");
      setShowPassword(true);
    }
  };
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, HandleOnChange, id, icon, ...inputProps } =
    props;
  const handleFocused = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <div className="lebu">
        <label>{label}</label>
        {icon === true && showPassword === true ? (
          <i id="i-eye" onClick={toogle}>
            <BsEye htmlColor="#2e81f4" />
          </i>
        ) : null}
        {icon === true && showPassword === false ? (
          <i id="i-eye" onClick={toogle}>
            <BsEyeSlash />
          </i>
        ) : null}
      </div>
      {icon === false ? (
        <>
          <input
          className="inn"
          autoComplete="off"
            {...inputProps}
            onChange={HandleOnChange}
            onBlur={handleFocused}
            onFocus={() => {
              inputProps.name === "confirmPassword" && setFocused(true);
            }}
            focused={focused.toString()}
          />
        </>
      ) : (
        <>
          <input
          className="inn"
            id="password"
            {...inputProps}
            autoComplete="off"
            onChange={HandleOnChange}
            onBlur={handleFocused}
            onFocus={() => {
              inputProps.name === "confirmPassword" && setFocused(true);
            }}
            focused={focused.toString()}
          />
        </>
      )}
      <span id="span-type">{errorMessage}</span>
    </div>
  );
};
