import React from 'react'

const AboutCard = () => {
  return (
    <div className="bg-gray-300">
      <div className="container ">
        <div className="grid grid-cols-2">
          <div className="grid place-items-center ">
            <div className="text-2xl pl-1 md:pl-0">
              <h2>Why you should work with us</h2>
            </div>
          </div>
          <div className="p-5">
            <div className="m-1 p-3 rounded  bg-clip-padding bg-yellow-600 border border-black">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
              </p>
              <div className="bg-black rounded p-2 m-2 w-max text-white hover:bg-gray-800">
                See More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
