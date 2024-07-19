import { useState } from "react"


const LastLetter = () => {

    const [userSentence, setUserSentence] = useState<string>('')
  return (
    <div>
        <input placeholder="Escribe una frase" onChange={(e)=>{setUserSentence(e.target.value)}}></input>
        <button>Última letra en mayúscula</button>
        <br></br>
        {userSentence}
    </div>
  )
}

export default LastLetter