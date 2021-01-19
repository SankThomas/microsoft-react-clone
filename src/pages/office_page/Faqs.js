import React, { useState } from 'react'
import data from '../../data/faqs'

const Faqs = () => {
  const [items, setItems] = useState(data)

  return (
    <>
      <h2>Frequently asked questions</h2>
      <section>
        {items.map((item) => {
          const { id, question } = item
          return (
            <div key={id}>
              <p>{question}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Faqs
