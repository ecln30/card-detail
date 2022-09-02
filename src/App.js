






import './App.css';
import React,{useState} from 'react'
import Form from './components/Form'
import Cards from './components/Cards'
import { Flex, Spacer,Box,Button } from '@chakra-ui/react'


function App() {
  const [name, setName] = useState('')
  const [num,setNum] = useState('')
  const [cvc,setCvc] = useState('')
  const [mon,setMon] = useState('')
  const [year,setYear] = useState('')
  
  
  const handleCardDisplay = () => {
    const rawText = [...num.split(' ').join('')] 
    const creditCard = [] // Create card as array
    rawText.forEach((t, i) => {
        if (i % 4 === 0) creditCard.push(' ') // Add space
        creditCard.push(t)
    })
    return creditCard.join('') // Transform card array to string
  }

  return (
    <div className="App">
    <Flex>
      <div className="Img">
        <Cards 
          name={name}
          num={num}
          cvc={cvc}
          mon={mon}
          year={year}
          handleCardDisplay={handleCardDisplay}
        />
        <img className='mainImg' src='images/bg-main-desktop.png' />
      </div>
      <main className='main'>
        <Form  
          name={name}
          setName={setName}
          num={num}
          setNum={setNum}
          cvc={cvc}
          setCvc={setCvc}
          mon={mon}
          setMon={setMon}
          year={year}
          setYear={setYear}
          handleCardDisplay={handleCardDisplay}
        />
      </main>
    </Flex>
    </div>
  );
}

export default App































































































































