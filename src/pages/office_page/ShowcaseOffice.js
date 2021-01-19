import React from 'react'
import showcaseImg from '../../images/office/hero_539.jpg'

const ShowcaseOffice = () => {
  return (
    <>
      <section className="office-showcase">
        <div className="overlay">
          <div className="showcase-img">
            <img src={showcaseImg} alt="" />
          </div>

          <div className="office-text px-5 py-10 text-center sm:text-left xl:mx-20 xl:px-0">
            <h1 className="font-bold text-3xl mb-3 lg:text-5xl lg:mb-5">
              If you’re looking for Office, you’re in the right place
            </h1>
            <p className="lg:text-xl">
              The Office apps you know and love are now included in Microsoft
              365.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowcaseOffice
