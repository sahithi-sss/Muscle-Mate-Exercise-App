import { useState } from 'react'
import Generator from './components/Generator'
import Workout from './components/Workout'
import Hero from './components/Hero'
import { generateWorkout } from './utils/functions'

function App() {
  const [workout,setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout (){
    if (muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goal})
    //console.log(newWorkout)
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col text-teal-500 text-sm sm:text-base relative'>
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center bg-[url('/image-tab.jpg')] md:bg-none xl:bg-[url('/image.jpeg')]"></div>
      <div className="relative z-10"> 
        <Hero />
        <Generator 
          poison = {poison}
          setPoison = {setPoison}
          muscles = {muscles}
          setMuscles = {setMuscles}
          goal = {goal}
          setGoal = {setGoal}
          updateWorkout={updateWorkout}
        />
        {workout && (<Workout workout={workout}/>)}
      </div>
    </main>
  )
}

export default App
