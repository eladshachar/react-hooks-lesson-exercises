import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  
  const [post, setPost] = useState("My Post")
  const [likes, setLikes] = useState(0)

  const increaseLikes = () => {
    setLikes(likes +1)
  }
  
  useEffect(() => {
    document.title = `You have ${likes} likes`
  })

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <p>{post}</p>
        <button onClick={increaseLikes}>Like</button>
        
      </div>
    </div>
  )
}