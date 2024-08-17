import { useState } from "react"


const Clock = () => {

    const [clockData, setClockData] = useState<string>();

    const date = ()=>{
        const arrDate = new Date().toLocaleString().split(' ')
        const onlyHour = arrDate[1]
        setClockData(onlyHour)
    }
  return (
    <div>
        <button onClick={()=>{date()}}>Actualiza la hora</button>
        <br></br>
        La hora es: {clockData}
    </div>
  )
}

export default Clock