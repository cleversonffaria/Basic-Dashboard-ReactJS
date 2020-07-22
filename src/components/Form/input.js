import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { TextInput } from "./styles";

export default function Input({ name, ...rest }) {
  //#region Hooks and States
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  //#endregion
  //#region Functions and ComponentdidMount
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  //#endregion

  return (
    <div>
      <TextInput ref={inputRef} {...rest} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
