import React from 'react'

const Book = ({ title, img_url }) => {
  return (
    <div className="book">
      <img src={img_url} />
      <h3>{title}</h3>
    </div>
  )
}

export {Book}
