













import React,{useState,useRef,useEffect} from 'react'
import { Flex,Spacer,WrapItem,Button,Input} from '@chakra-ui/react'

function Form({name,setName,num,setNum,cvc,setCvc,mon,setMon,year,setYear,handleCardDisplay}) {

  return (
    <Flex>
      <form className='form'>
      <Flex direction='column'>
       <label htmlFor="name">CARDHOLDER NAME</label>
       <Input border='1px' borderColor='blue.300' className='name' type='text'  placeholder='Enter Name' w='80%'
        value={name}
        onChange={e => setName(e.target.value)}
       />
      </Flex>
      <Flex direction='column'>
       <label htmlFor="number">CARD NUMBER</label>
       <Input border='1px' borderColor='blue.300' className='num' type="text"
         w='80%'
         value={num.length <= 19 ? handleCardDisplay() : ""}
         onChange={e => setNum(e.target.value)}
        />
      </Flex>
      <Flex direction='column' >
       <label htmlFor="card">EXP.DATE(MM/YY) <span className='cvc'>CVC</span></label>
       <Flex gap='3' mb='3em' >
         <Input border='1px' borderColor='blue.300' className='In1' type="text" 
           w='20%'
           value={mon.length < 2 ? mon : ""}
           onChange={e => setMon(e.target.value)}
          />
         <Input border='1px' borderColor='blue.300' className='In2' type="text" 
           w='20%'
           value={year.length < 2
            ? year : ""}
           onChange={e => setYear(e.target.value)}
         />
         <Input border='1px' borderColor='blue.300' className='In3' type="text" 
          w='34.4%' ml='2%'
          value={cvc.length < 3 ? cvc : ""}
          onChange={e => setCvc(e.target.value)}
         />
       </Flex>
      </Flex>
       <WrapItem>
      <Button type='submit' colorScheme='pink' w='80%' h='3em'>Confirm</Button>
    </WrapItem>
      </form>
    </Flex>
  )
}

export default Form




































































































































