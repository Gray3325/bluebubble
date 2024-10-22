import React, { useEffect } from 'react';
import { useState } from 'react';

import Select from 'react-select';
import { colourOptions } from './productData';

export default function EasySelect() {
  const id = Date.now().toString(); //需要設定才能運作
	const [isMounted, setIsMounted] = useState(false); 
  useEffect(() => setIsMounted(true), []); //要先讓值變成ture才能讓底下的程式碼正常運作
  return isMounted ? ( 
  <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    className="basic-multi-select"
    classNamePrefix="select"
    aria-labelledby="colors-select"
    id={id} //需要設定才能運作
  />) : null;
};