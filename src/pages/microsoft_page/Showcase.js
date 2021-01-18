import React from 'react'

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center">
          <div>
            <h1 className="text-center font-bold text-4xl mb-3 lg:text-6xl">
              Microsoft 365
            </h1>
            <p className="mb-5">
              Your productivity cloud across work and life.
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <button className="bg-blue-500 mx-2 my-1 border py-1 px-2 text-white font-bold tracking-wider">
              For Home
            </button>
            <button className="bg-blue-500 mx-2 my-1 border py-1 px-2 text-white font-bold tracking-wider">
              For Business
            </button>
            <button className="bg-blue-500 mx-2 my-1 border py-1 px-2 text-white font-bold tracking-wider">
              For Enterprise
            </button>
            <button className="bg-blue-500 mx-2 my-1 border py-1 px-2 text-white font-bold tracking-wider">
              For Education
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Showcase
