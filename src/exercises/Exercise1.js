import React from 'react'
import { useState } from 'react'

export default function Exercise1() {
  // your code here


  const countries = ['united states', 'china', 'united kingdom', 'australia']

  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("United States")

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updateCity = (e) => {
    setCity(e.target.value)
  }

  const updateCountry = (e) => {
    setCountry(e.target.value)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type="text" placeholder='type your name' onChange={updateName}></input>
        <input type='text' placeholder='city' onChange={updateCity}></input>
        <select onChange={updateCountry}>
          {countries.map(c=> {
            return <option value={c}>{c}</option>
          })}
        </select>
      </div>
    </div>
  )
}