import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
 
const Speech = () => {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
 
  return (
    <div className="container">
    <div className="center">
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Type Your Message"
        rows="3"
      /><br/>
      <div className="btn">
      <button onClick={() => speak({ text: value })}>Speak</button>
      </div>
    </div>
    </div>
  );
}

export default Speech;