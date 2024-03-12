import React from "react"

export default function BlogCards({title, description, image}) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
      <h1>{image}</h1>
    </div>
  )
}