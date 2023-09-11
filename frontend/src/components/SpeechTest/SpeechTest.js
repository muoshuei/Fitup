import { useState } from "react"
const SpeechTest = () => {
    const [ourText, setOurText] = useState("")
    const msg = new SpeechSynthesisUtterance()
    
    const handleSpeak = (msg) => {
        msg.text = ourText
        window.speechSynthesis.speak(msg)
    }

    return (
        <div className='App'>
        <h1>React Text to Speech App</h1>
        <input
            type='text'
            value={ourText}
            placeholder='Enter Text'
            onChange={(e) => setOurText(e.target.value)}
        />
        <button onClick={() => handleSpeak(msg)}>SPEAK</button>
        </div>
    )
}

export default SpeechTest;