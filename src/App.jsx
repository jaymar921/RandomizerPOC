import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Randomizer } from './assets/components/Randomizer'

function App() {
  const list = ['Jayharron', 'Rodney', 'Kenneth', 'Ada', 'Neal', 'Alyssa', 'Jhon Mark', 'Bo', 'Harold Inacay', 'Harold Cuico', 'Xerxes', 'Raph', 'CJ', 'Dylan'];
  const [command, setCommand] = useState('');

  const onDone = (w) => {
    console.log(w);
  }
  return (
    <>
      <Randomizer 
        backgroundColor='#17A14B' /* Change the Background color of the randomizer */
        textColor='white'         /* Change the Text color of the randomizer (shuffling part) */
        winnerTextColor='red'     /* Change the Text color of the randomizer (winner displayed) */
        command={command}         /* Randomizer command (start, reset, clear) */
        items={list}              /* List of items to be shuffled (array of string) */
        duration={2000}           /* How long will be the shuffling to effect before displaying the winner */
        completeCallback={onDone} /* Invoked when a winner is selected, (winner) => { // your logic }*/
        fontWeight={900}          /* Weight of the font 0 - 900         | default: 0 */ 
        textSize={50}             /* Size of text in pixels             | default: 20 */
        containerWidth={500}      /* Width of the Randomizer container  | default: 300 */
        containerHeight={300}     /* Height of the Randomizer container | default: 100 */
        className=''              /* Custom className style for the Randomizer container */
        />        
      <div>
        <br /> <br />
        <button onClick={() => {setCommand('start')}}>Start</button>
        <button onClick={() => {setCommand('reset')}}>Reset</button>
        <button onClick={() => {setCommand('clear')}}>Clear</button>
      </div>
    </>
  )
}

export default App
