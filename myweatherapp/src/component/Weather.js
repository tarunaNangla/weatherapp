import React, { useEffect, useState } from 'react'
import { Input,InputGroup,InputRightElement,InputLeftElement, Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
const Weather = () => {

  const [city,setCity]=useState(null);
  const [search,setSearch]=useState("Pune");

  useEffect(()=>{
  const fetchApi=async()=>{
      const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b9134f13202791b53a307cfa0e6b0820`);
      const data=await res.json();
      // console.log(data)
      setCity(data.main);

  }

    fetchApi();

  },[search])
  return (
    <div>
       
  <InputGroup>
    
    <Input placeholder='Enter location' defaultValue="" value={search} type="search" onChange={(e)=>{setSearch(e.target.value)}} />
    <InputRightElement children={<SearchIcon color='black.500' />} />
  </InputGroup>

  {
     !city?(
      <p>no data found</p>
     ):(
      <div>
          <h1>{search}</h1>
          <h1>{city.temp}°Cel</h1>
      </div>
     )
  }
  
    </div>
  )
}

export default Weather
