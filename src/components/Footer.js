import React, { useState } from 'react'
import data from '../data/footer'
import { FaGlobe } from 'react-icons/fa'

const Footer = () => {
  const [links, setLinks] = useState(data)

  return (
    <>
      <footer className="bg-gray-200 px-8 py-4 md:grid grid-cols-2 xl:grid-cols-6 xl:pl-20">
        {links.map((link) => {
          const { id, title, hrefs } = link

          return (
            <div key={id}>
              <div className="mb-10">
                <h4 className="font-semibold text-gray-600">{title}</h4>
                {hrefs.map((href) => {
                  return (
                    <li key={hrefs} className="text-gray-600 text-sm my-2">
                      {href}
                    </li>
                  )
                })}
              </div>
            </div>
          )
        })}
      </footer>

      <div className="bg-gray-200 px-8 pb-4 md:flex items-center justify-between xl:px-20">
        <div className="flex items-center text-gray-600">
          <FaGlobe className="mr-3" />
          <p className="text-sm">English (United States)</p>
        </div>

        <div>
          <ul className="flex flex-wrap text-sm mt-4 text-gray-600">
            <li className="mr-4">Sitemap</li>
            <li className="mr-4">Contact Microsoft</li>
            <li className="mr-4">Privacy</li>
            <li className="mr-4">Terms of Use</li>
            <li className="mr-4">Trademarks</li>
            <li className="mr-4">Safety &amp; eco</li>
            <li className="mr-4">About our ads</li>
            <li>&copy; Microsoft 2020</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
