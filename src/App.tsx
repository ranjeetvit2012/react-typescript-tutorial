
import { useState } from 'react'

import './App.css'
import { Button } from './component/Button'
import { Input } from './component/Input'
import {Status} from './component/Status'
import {Person} from './component/Person'
import {PersonList} from './component/PersonList'
import {RandomNumber} from './component/restriction-props/RandomNumber'
import { CustomButton } from './component/html/Button'
import { CustomComponent } from './component/html/CustomComponent'

function App() {

  // type User ={
  //   name: string;
  //   age: number;
  // }
  
 // const [user,setUser] = useState<User | null>({} as User)

// const handleChange = () => {
//   console.log('clicked',)
//   setUser({
//     name: 'John',
//     age: 25
//   })
// }
// const handleClick = () => {

// }

const [value, setValue] = useState("");

const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
  console.log('Button clicked', id);
  console.log(event)
};

const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setValue(event.target.value);
    setInputValue(event.target.value);
  };
  


  
  return (
    <>
      {/* <h1>Vite + React {user?.age}</h1>
      <h1>Vite + React {user?.name}</h1> */}
      {/* <Button
        handleClick={() => {
          console.log('Button clicked',)
        }}
        name="Click me"
      /> */}
<Button
      handleClick={(event) => handleClick(event, 1)} // Passing event and an example id
      name={"Click me"}
    />
  {/* <Input 
    handleChange={event => handleChange(event)} 
    placeholder="Enter text" 
    value="ss"
  /> */}
    <Input placeholder="Enter text" value={inputValue} handleChange={handleChange} />

    <Status status="loading" />
    <Person name={{first:'ranjeet',last:'mahto'}}/>

    <PersonList names={[{first:'ranjeet',last:'kumar'},{first:'ramesh',last:'mahto'},{first:'ballu',last:'mahto'}]}/>

    <RandomNumber number={10} isPositive />

    <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton>

      <CustomComponent name="John Doe" isLoggedIn={true} />

      <Input placeholder="Enter your name" value={value} handleChange={handleChange} />
      <p>Typed Value: {value}</p>
    
    </>
  )
}

export default App
