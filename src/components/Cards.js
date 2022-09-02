













import React from 'react'
import { Flex, Spacer,Box,Button,Stack,Image,position } from '@chakra-ui/react'


function Cards({name,num,mon,cvc,year}) {
  console.log(num)
 
  return (
   
    <div className='cards'>
     <Box pos='relative' w='25rem' >
     <h1 className='cardnumber'> {num}</h1>
     <h1 className='cardName'>{name}</h1>
     <h1 className='mon'>{mon}{mon ? '/' : ""}{year}</h1>
       <img className='cardimg Front'
        src='images/bg-card-front.png'
        alt='Dan Abramov'
        />
     </Box>
     <Box  pos='relative' w='25rem' mt='5'>
      <h1 className='cvc'>{cvc}</h1>
       <img className='cardimg Back'
          src='images/bg-card-back.png'
          alt='Dan Abramov'
        />
      </Box>
   </div>
)}

export default Cards































































































