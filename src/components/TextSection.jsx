import React from 'react'

function TextSection({title, paragraph, id}) {
  return (
    <div className="container" id={id}>
        <div className="section-title">
          <h2>{title}</h2>
          <p>{paragraph ? paragraph : "loading..."}</p>
        </div>
    </div>
  )
}

export default TextSection;