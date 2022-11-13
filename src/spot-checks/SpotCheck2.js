import React from 'react'
import { useState } from 'react'

export default function SpotCheck2() {
  const [isLoading, setIsLoading] = useState(true)
  const [lesson, setLesson] = useState({ name: 'React Hooks', completed: false, started: false })
  const [lessonStatus, setLessonStatus] = useState("")

  const updateLesson = key => setLesson({...lesson, [key]: true})
  


  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        <div>
          {isLoading ? <p>Page is loading...</p> : <p>{lessonStatus}</p>}
          <button >Begin Lesson</button>
          <button >Complete Lesson</button>
        </div>

      </div>
    </div>
  )
}