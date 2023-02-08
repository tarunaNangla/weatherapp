import React, { useEffect, useState } from 'react'
import { Input,InputGroup,InputRightElement,InputLeftElement, Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Spacer } from '@chakra-ui/react'
// import chart from './Chart'

import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';


const pdata = [
  {
      name: '21°C',
      temp: 11,
     
  },
  {
      name: '22°C',
      temp: 15,
      
  },
  {
      name: '24°C',
      temp: 5,
      
  },
  {
      name: '25°C',
      temp: 10,
      
  },
  {
      name: '29°C',
      temp: 9,
      
  },
  {
      name: '28',
      temp: 10,
      
  },
];
const Weather = () => {

 
  const [city,setCity]=useState(null);
  
  const [search,setSearch]=useState("Pune");


  useEffect(()=>{
  const fetchApi=async()=>{
      const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b9134f13202791b53a307cfa0e6b0820`);
      const data=await res.json();
      console.log(data)
      setCity(data.main);
      // setCityy(data.sys);

  }



    fetchApi();

  },[search])
  return (
    <div>
  <InputGroup pt="10px" pl="2px" pr="2px">
  {/* <Box boxShadow='dark-lg'  >    */}
    
    <Input boxShadow='dark-lg'  placeholder='Enter location' defaultValue="" value={search} type="search" onChange={(e)=>{setSearch(e.target.value)}} />
  {/* </Box> */}
    <InputRightElement pt="20px" children={<SearchIcon color='black.500' />} />
  </InputGroup>
  {
     !city ?(
      <p>no data found</p>
     ):(
      <Box pt="10px">
      


    <Box mt="20px" pl="300px" >
    <Box textAlign={"left"} fontSize={"30px"} fontWeight="600" >{city.temp}°C</Box>  

      
    <ResponsiveContainer  width="100%" jsutifyContent="center" aspect={3}>
        <LineChart data={pdata} margin={{right:300}}>
            <CartesianGrid />
            <XAxis dataKey="name" 
                interval={'preserveStartEnd'} />
          
            <Legend />
            <Tooltip />
            <Line dataKey="temp" stroke="black" activeDot={{r:8}} />
          
        </LineChart>
    </ResponsiveContainer>

    </Box>

   <Flex>
       <Box  pl='10' pr='10' >Pressure</Box>
       <Spacer />
       <Box  pl='10' pr='10'>Humidity</Box>
    </Flex>
      <Flex>
       <Box pl='10' pr='10'>{city.pressure}hpa</Box>
       <Spacer />
       <Box pl='10' pr='10'>{city.humidity}%</Box>
    </Flex>



<Box mt="10px">

    <Flex>
       <Box  pl='4' pr='4' >sunrise</Box>
       <Spacer />
       <Box  pl='4' pr='4'>sunset</Box>
    </Flex>
      <Flex>
       <Box pl='4' pr='4'>{city.temp_max}</Box>
       <Spacer />
       <Box pl='4' pr='4'>{city.temp_min}</Box>
    </Flex>
</Box>


      </Box>
     )
  }
  
    </div>
  )
}

export default Weather
