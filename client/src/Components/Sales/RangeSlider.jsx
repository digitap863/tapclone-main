import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'; // Make sure to import the CSS file4
import './Sales.css'

const Horizontal = ({value,setValue,setFormData,formData}) => {
 

  const handleChangeStart = () => {
    console.log('Change event started');
  };

  const handleChange = (newValue) => {
    setValue(newValue);
    setFormData({ ...formData, Monthly_Budget: value })
  };

  const handleChangeComplete = () => {
    setFormData({ ...formData, Monthly_Budget: value })

  };

  return (
    <div className='slider'>
      <Slider
        min={10000}
        max={50000}
        value={value}
        step={1000}
        onChangeStart={handleChangeStart}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
      />
      <div className='flex justify-between'>
        <p className=' border-gray-400 p-2 rounded-md text-sm'>10000</p>
        <p className=' border-gray-400 p-2 rounded-md text-sm'>50000+</p>
      </div>
      <div className='w-full flex justify-end mb-5'>
      <h5 className='mt-2 font-semibold gap-3 flex'>Budget : <span className='text-[#9747FF] font-bold text-2xl transition ease-linear'>₹ {value}</span></h5>
      </div>
    </div>
  );
};

export default Horizontal;
