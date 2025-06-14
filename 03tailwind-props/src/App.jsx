import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-200 text-black p-4 rounded-xl'>Tailwind css</h1>
      <Card imgLink="https://images.pexels.com/photos/29147722/pexels-photo-29147722/free-photo-of-close-up-of-a-deer-with-majestic-antlers-in-the-wild.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" titleName="DEER" titleContext="The Daring Deer of valley" descContext="The deer of the valley is known for it's remarkable hunting capabilities. This particular Deer is also the king of the valley irrespective of being a habitat of Lions as well."/>
      <Card imgLink="https://images.pexels.com/photos/32262818/pexels-photo-32262818/free-photo-of-stylish-individual-leaning-against-dark-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" titleName="MAN" titleContext="The Model Man" descContext="The guyish guy who models and keeps modelling coz he likes to model. he never moves dance eats or laugh."/>
    </>
    
  )
}

export default App
