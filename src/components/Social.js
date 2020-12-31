import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Social = () => {
  return (
    <div className="flex items-center py-5 px-8 xl:pl-20">
      <div className="mr-5">
        <h4>Follow Microsoft</h4>
      </div>
      <div className="flex">
        <FaFacebookF className="mr-2 text-2xl text-blue-900" />
        <FaTwitter className="mr-2 text-2xl text-blue-700" />
        <FaLinkedin className="mr-2 text-2xl text-blue-900" />
      </div>
    </div>
  )
}

export default Social
