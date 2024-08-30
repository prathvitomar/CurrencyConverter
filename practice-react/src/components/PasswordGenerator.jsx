import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(5);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const passwordRef = useRef(null);
  
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)
  },[length,character,number])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    generatePassword();
  },[length,character,length,PasswordGenerator])

  return (
    <div>
      <div>
        <input 
        type="text"
        value={password}
        name='password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPassword}
        >copy</button>
      </div>
      <div>
        <div>
          <input 
          type="range"
          value={length}
          min="0"
          max="10"
          onChange={(e)=> {setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={number}
          onChange={()=> {setNumber((prev)=> !prev)}}
          value={number}
          />
          <label>Number</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={character}
          value={character}
          onChange={()=> {setCharacter((prev)=> !prev)}}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator