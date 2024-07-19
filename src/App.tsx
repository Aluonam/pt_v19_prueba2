
import './App.css'
import Clock from './components/Clock'
import UsersTable from './components/UsersTable'

function App() {

  return (
    <>
      <div style={{display:'flex', flexDirection:'column'}}>
        <UsersTable></UsersTable>
        <br></br>
        <Clock></Clock>
      </div>
      
    </>
  )
}

export default App
