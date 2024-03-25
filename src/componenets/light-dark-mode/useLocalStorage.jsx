import React, { useEffect, useState } from 'react'

const useLocalStorage = (key,defaultvalue) => {

const [value,setValue] = useState(()=>{
  let currentValue;

  try{
   currentValue = JSON.parse(localStorage.getItem(key) || String(defaultvalue))
  }
  catch(error){
    currentValue = defaultvalue;
  }

  return currentValue
});

useEffect(()=>{
localStorage.setItem(key, JSON.stringify(value))
},[key,value]);

return [value,setValue]



  return (
    <div>useLocalStorage</div>
  )
}

export default useLocalStorage