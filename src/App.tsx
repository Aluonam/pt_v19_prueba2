
import './App.css'
import Clock from './components/Clock'
import LastLetter from './components/LastLetter'
import UsersTable from './components/UsersTable'

function App() {

  return (
    <>
      <div style={{display:'flex', flexDirection:'column'}}>
        <UsersTable></UsersTable>
        <br></br>
        <Clock></Clock>
        <br></br>
        <LastLetter></LastLetter>
      </div>
      
    </>
  )
}

export default App
