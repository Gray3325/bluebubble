import React, { useEffect } from "react";
import { useState } from "react";
import chroma from "chroma-js";

import { ColourOption, colourOptions } from "./productData";
import Select, { StylesConfig } from "react-select";

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

export default function SelectComponent() {
  const id = Date.now().toString(); //需要設定才能運作
  const [isMounted, setIsMounted] = useState(false); //需要先設定isMounted狀態
  useEffect(() => setIsMounted(true), []); //要先讓值變成ture才能讓底下的程式碼正常運作
  return  isMounted ? ( //先確認isMounted狀態，如果出錯就不顯示
    <Select
      closeMenuOnSelect={false}
      isMulti //是否多選
      options={colourOptions}
      styles={colourStyles}
      placeholder='choose...'
      id={id} //需要設定才能運作
    />
  ): null;
}
