import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import data from '../../data/learnMore'

const LearnMore = () => {
  const [items, setItems] = React.useState(data)

  return (
    <>
      <section className="flex items-center justify-between px-10 py-10">
        {items.map((item) => {
          const { id, title, link } = item

          return (
            <article key={id}>
              <h4 className="font-bold">{title}</h4>
              <button className="flex items-center text-blue-500 hover:underline">
                {link} <FaChevronRight className="text-xs" />
              </button>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default LearnMore
