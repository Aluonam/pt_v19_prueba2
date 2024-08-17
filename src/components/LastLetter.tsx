import { useState } from "react"


const LastLetter = () => {

    const [userSentence, setUserSentence] = useState<string>('')

    const handleChangeLetter = () => {
        const arrWords = userSentence.split(' ');
        const lastLetter = arrWords.map((oneWord)=>{
            const letters= oneWord.split('').reverse();
            const capitalLetter = letters[0].toUpperCase();
            letters[0] = capitalLetter;
            letters.reverse()
            return letters.join('')
        })
        setUserSentence(lastLetter.join(' '))
    }

  return (
    <div>
        <input placeholder="Escribe una frase" onChange={(e)=>{setUserSentence(e.target.value)}}></input>
        <button onClick={()=>{handleChangeLetter()}}>Última letra en mayúscula</button>
        <br></br>
        {userSentence}
    </div>
  )
}

export default LastLetter